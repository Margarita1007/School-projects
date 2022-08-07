import {
    CreateCarContentResponse,
    GetCarsContentResponse,
    //GetOneCarContentResponse,
    ViewerInterface,
    WinnerDataType,
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

    tableWinnersTemplate() {
        const fragment = document.createDocumentFragment();
        const tableTemp = document.querySelector<HTMLTemplateElement>('#winners_table');
        if (tableTemp) {
            const tableClone = <Element>tableTemp.content.cloneNode(true);
            // const tableNumber = document.querySelector('.table_number') as HTMLTableElement;
            // const tableCar = document.querySelector('.table_car') as HTMLTableElement;
            // const tableName = document.querySelector('.table_name') as HTMLTableElement;
            // const tableWins = document.querySelector('.table_wins') as HTMLTableElement;
            // const tableTime = document.querySelector('.table_time') as HTMLTableElement;
            fragment.append(tableClone);
        }
        const divSelect = document.getElementById('view_winners');
        if (divSelect) {
            divSelect.append(fragment);
        }
    }

    tableWinners(data: WinnerDataType[]) {
        //const rows = data.length;
        //const cells = 5;
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
                newrow.insertCell(0).innerHTML = `${i + 1}`;
                const imgCell = newrow.insertCell(1);
                //.innerHTML = `<img class="winner-vehicle-img" src="./assets/car.png">`;
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
        }

        // function tableFill() {
        //     const col1 = document.querySelector('.col_first') as HTMLTableColElement;
        //     for (let i = 0; i < data.length; i++) {
        //         col1[i].textContent
        //     }
        //     // let fillFrom = 27;
        //     // const td = document.querySelectorAll('#table td') as NodeListOf<HTMLTableSectionElement>;

        //     // for (let i = 0; i < td.length; i++) {
        //     //     td[i].textContent = `${fillFrom--}`;
        //     //     if (fillFrom < 1) break;
        //     // }
        // }
    }
}

export default Viewer;
