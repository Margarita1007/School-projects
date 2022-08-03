import {
    CreateCarContentResponse,
    GetCarsContentResponse,
    //GetOneCarContentResponse,
    ViewerInterface,
} from '../types/types';
//import { state } from '../app/state';

class Viewer implements ViewerInterface {
    viewGarage(respData: GetCarsContentResponse) {
        //state.cars = [];
        //const fragment = document.createDocumentFragment();
        //const garageTemp = document.querySelector<HTMLTemplateElement>('#garage');
        // fill garage from template according to response
        respData.forEach((car) => {
            //state.cars.push(car);
            this.viewOneCar(car);
        });
        //console.log(state.cars);
    }

    viewOneCar(car: CreateCarContentResponse) {
        //state.cars.push(car);
        //state.countCar++;
        //console.log(state.countCar);
        const fragment = document.createDocumentFragment();
        const oneCarTemp = document.querySelector<HTMLTemplateElement>('#one_car');
        if (oneCarTemp) {
            const carClone = <Element>oneCarTemp.content.cloneNode(true);
            const trackSelect = carClone.querySelector('.garage__track');
            const button_remove = carClone.querySelector('.garage__track__head__buttons-remove');
            const button_select = carClone.querySelector('.garage__track__head__buttons-select');
            const trackNameSelect = carClone.querySelector('.garage__track__head-name');
            const trackVehicleSelect = carClone.querySelector('.garage__track__line-vehicle-img') as HTMLDivElement;

            if (trackNameSelect && trackVehicleSelect) {
                trackNameSelect.textContent = car.name;
                trackVehicleSelect.style.backgroundColor = car.color;
            }

            if (trackSelect) {
                trackSelect.setAttribute('id', car.id.toString());
            }

            if (button_remove && button_select) {
                button_remove.setAttribute('id', `btn_remove_${car.id}`);
                button_select.setAttribute('id', `btn_select_${car.id}`);
            }

            fragment.append(carClone);
        }
        const mainGarageSelect = document.querySelector('.main__garage');
        if (mainGarageSelect) {
            mainGarageSelect.append(fragment);
        }
        // } else {
        //     const main_buttons = document.querySelector('.main_buttons') as HTMLElement;
        //     const divGarage = document.createElement('div');
        //     divGarage.classList.add('main__garage');
        //     if (main_buttons) {
        //         divGarage.after(main_buttons);
        //         divGarage.append(fragment);
        //     }
        // }
    }
}

export default Viewer;
/*
const startApp = async () => {
    await app.start();
    const buttons_remove = document.querySelectorAll('.garage__track__head__buttons-remove') as NodeListOf<HTMLElement>;
    buttons_remove.forEach((button) => {
        app.buttonsEventRemove(button);
    });
    //app.buttonsEvent();
    const button_create = document.querySelector('.main__buttons__create-create') as HTMLElement;
    controller.addListener(button_create, 'click', async () => {
        const dataCar = controller.readOptionsForCreateQuery();
        const result = await app.createCar(dataCar.data);
        console.log(result);
        //app.buttonsEventRemove();
    });
};
startApp();
*/
