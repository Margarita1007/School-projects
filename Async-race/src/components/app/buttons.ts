import App from './app';
import Controller from './controller';
import { state } from './state';
import Drive from './drive';
import Viewer from '../viewer/viewer';

const app = new App();
const controller = new Controller();
const drive = new Drive();
const view = new Viewer();

class Buttons {
    addListenerButtons() {
        document.body.addEventListener('click', async (event) => {
            const eventTarget = event.target as HTMLButtonElement;
            const updateBlock = document.querySelector('.main__buttons__update') as HTMLElement;

            if (eventTarget.classList.contains('garage__track__head__buttons-remove')) {
                const id = +eventTarget.id.split('btn_remove_')[1];
                await app.deleteCar(id.toString());
                const getWins = await app.getWinners();
                const foundWin = getWins.find((win) => win.id === id);
                if (foundWin !== undefined) {
                    await app.deleteWinner(id);
                }
                await app.start();
                if (state.cars.length === 0 && state.pageGarage > 1) {
                    state.pageGarage--;
                    await app.start();
                }
            }
            if (eventTarget.classList.contains('main__buttons__create-create')) {
                const dataCar = controller.readOptionsForCreateQuery();
                await app.createCar(dataCar.data); //view
                const nextButton = document.querySelector('.main__pagination-next') as HTMLButtonElement;
                const createName = (<HTMLInputElement>document.getElementById('create__name')) as HTMLInputElement;
                const createColor = (<HTMLInputElement>document.getElementById('create__color')) as HTMLInputElement;
                createName.value = '';
                createColor.value = '#000000';
                if (state.pageGarage * state.limit < state.countCar) {
                    nextButton.classList.remove('disabled');
                }
            }

            if (
                eventTarget.classList.contains('garage__track__head__buttons-select') &&
                updateBlock.classList.contains('disabled')
            ) {
                const id = +eventTarget.id.split('btn_select_')[1];
                const data = await app.getCar(id.toString());
                const updateName = (<HTMLInputElement>document.getElementById('update__name')) as HTMLInputElement;
                const updateColor = (<HTMLInputElement>document.getElementById('update__color')) as HTMLInputElement;
                const updateButton = document.querySelector('.button_update') as HTMLElement;
                controller.lockUnlockElement(updateBlock);
                updateName.value = data.name;
                updateColor.value = data.color;
                updateButton.addEventListener(
                    'click',
                    async () => {
                        controller.lockUnlockElement(updateBlock);
                        const dataNew = controller.readOptionsForUpdateQuery(id);
                        await app.updateCar(dataNew.data);
                        updateName.value = '';
                        updateColor.value = '#000000';
                        await app.start();
                    },
                    { once: true }
                );
            }

            if (eventTarget.classList.contains('main__buttons__race-generate')) {
                const count = state.generateCount;
                const generateCarsArray = controller.generateCars(count);
                await app.generateCars(generateCarsArray);
                const nextButton = document.querySelector('.main__pagination-next') as HTMLButtonElement;
                if (state.pageGarage * state.limit < state.countCar) {
                    nextButton.classList.remove('disabled');
                }
            }
        });
    }

    pagination() {
        const paginator = document.querySelector('.garage__head-page-number');
        const nextButton = document.querySelector('.main__pagination-next') as HTMLButtonElement;
        const prevButton = document.querySelector('.main__pagination-prev') as HTMLButtonElement;

        if (state.pageGarage * state.limit < state.countCar) {
            nextButton.classList.remove('disabled');
        }

        document.body.addEventListener('click', (event) => {
            const eventTarget = event.target as HTMLButtonElement;
            if (eventTarget === nextButton) {
                state.pageGarage++;
                app.start();
            }
            if (eventTarget === prevButton) {
                state.pageGarage--;
                app.start();
            }

            if (paginator) {
                paginator.innerHTML = state.pageGarage.toString();
            }

            if (state.pageGarage === 1) {
                prevButton.classList.add('disabled');
                nextButton.classList.remove('disabled');
            } else {
                prevButton.classList.remove('disabled');
            }

            if (state.pageGarage * state.limit < state.countCar) {
                nextButton.classList.remove('disabled');
            } else {
                nextButton.classList.add('disabled');
            }
        });
    }

    addListenerDriving() {
        document.body.addEventListener('click', async (event) => {
            const eventTarget = event.target as HTMLButtonElement;
            if (eventTarget.classList.contains('garage__track__line__buttons-start')) {
                const id = +eventTarget.id.split('btn_start_')[1];
                drive.startEngine(id);
            }

            if (eventTarget.classList.contains('garage__track__line__buttons-stop')) {
                const id = +eventTarget.id.split('btn_stop_')[1];
                drive.stopEngine(id);
            }

            if (eventTarget.classList.contains('main__buttons__race-race')) {
                const btn_reset = document.querySelector('.main__buttons__race-reset') as HTMLElement;
                await drive.race();
                btn_reset.classList.remove('disabled');
            }

            if (eventTarget.classList.contains('main__buttons__race-reset')) {
                await drive.resetRace();
                const winner_text = document.querySelector('.winner_text_scoreboard') as HTMLElement;
                const btn_race = document.querySelector('.main__buttons__race-race') as HTMLElement;
                winner_text.innerHTML = '';
                btn_race.classList.remove('disabled');
            }
        });
    }

    viewGarageWinners() {
        document.body.addEventListener('click', async (event) => {
            const eventTarget = event.target as HTMLButtonElement;
            const btnToGarage = document.querySelector('.button_toGarage') as HTMLButtonElement;
            const btnToWinners = document.querySelector('.button_toWinners') as HTMLButtonElement;
            const viewGarage = document.getElementById('view_garage') as HTMLElement;
            const viewWinners = document.getElementById('view_winners') as HTMLElement;
            if (eventTarget === btnToGarage) {
                viewWinners.style.display = 'none';
                viewGarage.style.display = 'block';
                controller.lockUnlockElement(btnToGarage);
                controller.lockUnlockElement(btnToWinners);
                state.view = 'garage';
            }
            if (eventTarget === btnToWinners) {
                viewGarage.style.display = 'none';
                viewWinners.style.display = 'block';
                controller.lockUnlockElement(btnToWinners);
                controller.lockUnlockElement(btnToGarage);
                state.view = 'winners';
                const data = await controller.getdataWinsPage();
                view.tableWinners(data);
                const nextButtonWin = document.querySelector('.winners__pagination_next') as HTMLButtonElement;
                if (state.pageWinners * state.limitWin < state.countWinners) {
                    nextButtonWin.classList.remove('disabled');
                } else {
                    nextButtonWin.classList.add('disabled');
                }
            }
        });
    }
}
export default Buttons;
