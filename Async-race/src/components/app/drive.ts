import App from './app';
import { state } from './state';
const app = new App();

class Drive {
    async startEngine(id: number) {
        //const startEngineButton = document.querySelector('.garage__track__line__buttons-start');
        // document.body.addEventListener('click', async (event) => {
        //     const eventTarget = event.target as HTMLButtonElement;
        const startButton = document.getElementById(`btn_start_${id}`) as HTMLButtonElement;
        const stopButton = document.getElementById(`btn_stop_${id}`) as HTMLButtonElement;
        stopButton.classList.remove('disabled');
        startButton.classList.add('disabled');
        // const width = document.querySelector('.garage__track__line')?.clientWidth;
        //     if (eventTarget.classList.contains('garage__track__line__buttons-start')) {
        //         const id = +eventTarget.id.split('btn_start_')[1];
        const result = await app.startStopEngine(id, 'started');
        if (result) {
            const timeAnimation: number = result.distance / result.velocity;
            this.animation(id, timeAnimation);
            const responce = await app.drive(id, 'drive');
            if (!responce) {
                const carBlock = document.getElementById(`img_block_${id}`);
                const brokenText = document.getElementById(`broke_${id}`);
                if (carBlock && brokenText) {
                    carBlock.getAnimations({ subtree: true }).map((animation) => animation.pause());
                    brokenText.style.opacity = '1';
                }
            }
            return { id, timeAnimation, responce };
        }
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
        //stopButton.classList.remove('disabled');
    }

    async raceAll() {
        const cars = state.cars;
        const race = await Promise.all(cars.map(async (car) => await this.startEngine(car.id)));
        console.log(race);
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
                [{ transform: `translate(0)` }, { transform: `translate(${width - 290}px, 0)` }],
                timeAnimation
            );
            if (animation) {
                animation.addEventListener('finish', function () {
                    if (carBlock && finishText) {
                        carBlock.style.transform = `translate(${width - 290}px, 0)`;
                        finishText.style.opacity = '1';
                    }
                });
            }
        }
    }
}

export default Drive;
