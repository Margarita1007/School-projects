import {
    CreateCarContentResponse,
    GetCarsContentResponse,
    //GetOneCarContentResponse,
    ViewerInterface,
    WinnerDataType,
} from '../types/types';
import { state } from '../app/state';

class Viewer implements ViewerInterface {
    viewGarage(respData: GetCarsContentResponse) {
        respData.forEach((car) => {
            this.viewOneCar(car);
        });
    }

    viewOneCar(car: CreateCarContentResponse) {
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

    tableWinnersTemplate() {
        const fragment = document.createDocumentFragment();
        const tableTemp = document.querySelector<HTMLTemplateElement>('#winners_table');
        if (tableTemp) {
            const tableClone = <Element>tableTemp.content.cloneNode(true);
            fragment.append(tableClone);
        }
        const divSelect = document.getElementById('view_winners');
        if (divSelect) {
            divSelect.append(fragment);
        }
    }

    tableWinners(data: WinnerDataType[]) {
        const table = document.getElementById('table_body') as HTMLTableElement;
        table.remove();

        fillTable();
        function fillTable() {
            const table = document.createElement('tbody');
            table.setAttribute('id', 'table_body');
            const tableSelect = document.getElementById('table') as HTMLTableElement;
            tableSelect.append(table);
            for (let i = 0; i < data.length; i++) {
                const newrow = table.insertRow(-1);
                newrow.insertCell(0).innerHTML = `${(state.pageWinners - 1) * state.limitWin + i + 1}`;
                const imgCell = newrow.insertCell(1);
                const img = document.createElement('img');
                img.src = './assets/car.png';
                img.alt = 'vehicle';
                img.setAttribute('class', 'winner-vehicle-img');
                img.style.backgroundColor = data[i].color;
                imgCell.appendChild(img);
                newrow.insertCell(2).innerHTML = `${data[i].name}`;
                newrow.insertCell(3).innerHTML = `${data[i].wins}`;
                newrow.insertCell(4).innerHTML = `${data[i].time}`;
            }
            const winners_countHTML = document.querySelector('.winners_count') as HTMLElement;
            winners_countHTML.innerHTML = `${state.countWinners} cars`;
            const paginator = document.querySelector('.winners_page') as HTMLElement;
            paginator.innerHTML = `${state.pageWinners}`;
            console.log(state.pageWinners);
            console.log(state.countWinners);
        }
    }
}

export default Viewer;
