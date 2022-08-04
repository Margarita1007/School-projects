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
            const button_startEngine = carClone.querySelector('.garage__track__line__buttons-start');
            const button_stopEngine = carClone.querySelector('.garage__track__line__buttons-stop');
            const trackNameSelect = carClone.querySelector('.garage__track__head-name');
            const brokenText = carClone.querySelector('.broken');
            const finishText = carClone.querySelector('.finished');
            const trackVehicleBlock = carClone.querySelector('.garage__track__line-vehicle') as HTMLElement;
            const trackVehicleSelect = carClone.querySelector('.garage__track__line-vehicle-img') as HTMLDivElement;

            if (trackNameSelect && trackVehicleSelect && trackVehicleBlock) {
                trackNameSelect.textContent = car.name;
                trackVehicleSelect.style.backgroundColor = car.color;
                trackVehicleSelect.setAttribute('id', `img_${car.id}`);
                trackVehicleBlock.setAttribute('id', `img_block_${car.id}`);
            }

            if (trackSelect) {
                trackSelect.setAttribute('id', car.id.toString());
            }

            if (button_remove && button_select) {
                button_remove.setAttribute('id', `btn_remove_${car.id}`);
                button_select.setAttribute('id', `btn_select_${car.id}`);
            }

            if (button_startEngine && button_stopEngine) {
                button_startEngine.setAttribute('id', `btn_start_${car.id}`);
                button_stopEngine.setAttribute('id', `btn_stop_${car.id}`);
            }

            if (brokenText && finishText) {
                brokenText.setAttribute('id', `broke_${car.id}`);
                finishText.setAttribute('id', `finish_${car.id}`);
            }

            fragment.append(carClone);
        }
        const mainGarageSelect = document.querySelector('.main__garage');
        if (mainGarageSelect) {
            mainGarageSelect.append(fragment);
        }
    }
}

export default Viewer;
