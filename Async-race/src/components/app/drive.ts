import { RaceWinnerType, startDrive, StartStopEngineResponse } from '../types/types';
import App from './app';
import Controller from './controller';
import { state } from './state';
const app = new App();
const controller = new Controller();

class Drive {
    async startEngine(id: number): Promise<startDrive> {
        const startButton = document.getElementById(`btn_start_${id}`) as HTMLButtonElement;
        const stopButton = document.getElementById(`btn_stop_${id}`) as HTMLButtonElement;
        stopButton.classList.remove('disabled');
        startButton.classList.add('disabled');
        const result: StartStopEngineResponse = await app.startStopEngine(id, 'started');
        const timeAnimation: number = result.distance / result.velocity;
        this.animation(id, timeAnimation);
        const responce = await app.drive(id, 'drive');
        if (responce === undefined) {
            const carBlock = document.getElementById(`img_block_${id}`);
            const brokenText = document.getElementById(`broke_${id}`);
            if (carBlock && brokenText) {
                carBlock.getAnimations({ subtree: true }).map((animation) => animation.pause());
                brokenText.style.opacity = '1';
            }
        }
        return { id, timeAnimation, responce };
    }

    async stopEngine(id: number) {
        const startButton = document.getElementById(`btn_start_${id}`) as HTMLButtonElement;
        const stopButton = document.getElementById(`btn_stop_${id}`) as HTMLButtonElement;
        const brokenText = document.getElementById(`broke_${id}`) as HTMLElement;
        const finishText = document.getElementById(`finish_${id}`) as HTMLElement;
        startButton.classList.remove('disabled');
        stopButton.classList.add('disabled');
        await app.startStopEngine(id, 'stopped');
        const carBlock = document.getElementById(`img_block_${id}`) as HTMLElement;
        carBlock.getAnimations({ subtree: true }).map((animation) => animation.cancel());
        carBlock.style.transform = `translate(0)`;
        brokenText.style.opacity = '0';
        finishText.style.opacity = '0';
    }

    async race() {
        const btn_reset = document.querySelector('.main__buttons__race-reset') as HTMLElement;
        const btn_race = document.querySelector('.main__buttons__race-race') as HTMLElement;
        btn_reset.classList.add('disabled');
        btn_race.classList.add('disabled');
        const cars = state.cars;
        const promises = cars.map(async (car) => {
            const res = await this.startEngine(car.id);
            return res;
        });
        const winner = await this.raceAll(
            promises,
            state.cars.map((car) => car.id)
        );
        await controller.NumberWins(winner);
        const winner_text = document.querySelector('.winner_text_scoreboard') as HTMLElement;
        winner_text.innerHTML = `${winner.name} is winner,\ntime ${winner.time} c`;
        console.log(winner);
        await Promise.all(promises);
        return winner;
    }

    async raceAll(promises: Promise<startDrive>[], indexes: number[]): Promise<RaceWinnerType> {
        const { id, timeAnimation, responce } = await Promise.race(promises);
        if (!responce) {
            const indexFailed = indexes.findIndex((i) => i === id);
            const restOfPromises = [
                ...promises.slice(0, indexFailed),
                ...promises.slice(indexFailed + 1, promises.length),
            ];
            const restOfIndexes = [...indexes.slice(0, indexFailed), ...indexes.slice(indexFailed + 1, indexes.length)];
            return this.raceAll(restOfPromises, restOfIndexes);
        }
        return { ...state.cars.find((car) => car.id === id), time: +(timeAnimation / 1000).toFixed(2) };
    }

    raceAllAnimate() {
        document.getAnimations().forEach(async (animation) => {
            animation.addEventListener('finish', () => {
                console.log('win', animation.currentTime);
            });
        });
    }

    async resetRace() {
        const cars = state.cars;
        await Promise.all(cars.map(async (car) => await this.stopEngine(car.id)));
    }

    animation(id: number, timeAnimation: number) {
        const width = document.querySelector('.garage__track__line')?.clientWidth;
        const carBlock = document.getElementById(`img_block_${id}`);
        const finishText = document.getElementById(`finish_${id}`);
        if (carBlock && width) {
            const animation = carBlock.animate(
                [{ transform: `translate(0)` }, { transform: `translate(${width - 245}px, 0)` }],
                timeAnimation
            );
            if (animation) {
                animation.addEventListener('finish', function () {
                    if (carBlock && finishText) {
                        carBlock.style.transform = `translate(${width - 245}px, 0)`;
                        finishText.style.opacity = '1';
                    }
                });
                return animation;
            }
        }
    }
}

export default Drive;
