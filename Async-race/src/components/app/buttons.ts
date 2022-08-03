import App from './app';
import Controller from './controller';
import { state } from './state';
const app = new App();
const controller = new Controller();

class Buttons {
    addListenerButtons() {
        document.body.addEventListener('click', async (event) => {
            const eventTarget = event.target as HTMLButtonElement;
            //const parentBTNREmove = eventTarget.parentNode?.parentNode?.parentNode as HTMLElement;
            const updateBlock = document.querySelector('.main__buttons__update') as HTMLElement;

            if (eventTarget.classList.contains('garage__track__head__buttons-remove')) {
                const id = +eventTarget.id.split('btn_remove_')[1];
                await app.deleteCar(id.toString());
                await app.start();
                //parentBTNREmove.remove();
                console.log('remove btn', id);
            }

            if (eventTarget.classList.contains('main__buttons__create-create')) {
                const dataCar = controller.readOptionsForCreateQuery();
                await app.createCar(dataCar.data); //view
            }

            if (
                eventTarget.classList.contains('garage__track__head__buttons-select') &&
                updateBlock.classList.contains('disabled')
            ) {
                const id = +eventTarget.id.split('btn_select_')[1];
                //GET - получить данные по id - имя и цвет
                //присвоить значения инпутам
                //по клику - считать измененные значения инпутов
                //запрос на сервер на изменение данных
                const data = await app.getCar(id.toString());
                const updateName = (<HTMLInputElement>document.getElementById('update__name')) as HTMLInputElement;
                const updateColor = (<HTMLInputElement>document.getElementById('update__color')) as HTMLInputElement;
                // const updateBlock = document.querySelector('.main__buttons__update') as HTMLElement;
                const updateButton = document.querySelector('.button_update');
                if (updateBlock) {
                    controller.lockUnlockElement(updateBlock);
                }
                updateName.value = data.name;
                updateColor.value = data.color;
                //console.log(data);
                updateButton?.addEventListener(
                    'click',
                    async () => {
                        controller.lockUnlockElement(updateBlock);
                        const dataNew = controller.readOptionsForUpdateQuery(id);
                        console.log(dataNew.data);
                        await app.updateCar(dataNew.data);
                        //app.clear();
                        await app.start();
                        // const promiseClear = new Promise((resolve) => {
                        //     resolve(app.clear());
                        // });
                        // promiseClear.then(() => {
                        //     app.start();
                        //     //addListenerButtons();
                        // });
                        //await app.start();
                        //addListenerButtons();
                    },
                    { once: true }
                );
            }

            if (eventTarget.classList.contains('main__buttons__race-generate')) {
                const count = state.generateCount;
                const generateCars = controller.generateCars(count);
                await Promise.all(generateCars.map(async (car) => app.createCar(car)));
            }
        });
    }

    pagination() {
        const paginator = document.querySelector('.garage__head-page-number');
        const nextButton = document.querySelector('.main__pagination-next') as HTMLButtonElement;
        const prevButton = document.querySelector('.main__pagination-prev') as HTMLButtonElement;

        if (state.countCar > state.limit) {
            controller.lockUnlockElement(nextButton);
        }

        nextButton.addEventListener('click', () => {
            state.pageGarage++;
            if (paginator) {
                paginator.innerHTML = state.pageGarage.toString();
            }
        });
        //const div_num = document.querySelectorAll('.num');
    }
}

// export function buttonsSelect() {
//     const buttons_select = document.querySelectorAll(
//         '.garage__track__head__buttons-select'
//     ) as NodeListOf<HTMLElement>;

//     buttons_select.forEach((button) => {
//         button.addEventListener('click', () => {
//             //console.log(button);
//         });
//     });
// }

// export function buttonsRemove() {
//     const buttons_remove = document.querySelectorAll(
//         '.garage__track__head__buttons-remove'
//     ) as NodeListOf<HTMLElement>;
//     //const updateName = (<HTMLInputElement>document.getElementById('update__name')) as HTMLInputElement;
//     //const updateColor = (<HTMLInputElement>document.getElementById('update__color')) as HTMLInputElement;

//     buttons_remove.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             const target = e.target as HTMLElement;
//             const parent = target.parentNode?.parentNode?.parentNode as HTMLElement;
//             const elemID = parent.getAttribute('id');
//             if (elemID) {
//                 app.deleteCar(elemID);
//                 parent.remove();
//             }
//             //console.log(elemID);
//         });
//     });
// }
export default Buttons;
