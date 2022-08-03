import Loader from '../loader/loader';
import QueryMaker from '../loader/query-maker';
import { AppInterface, CreateCarContentResponse } from '../types/types';
import Viewer from '../viewer/viewer';
import { state } from './state';

// start of app
class App implements AppInterface {
    view: Viewer;
    query: QueryMaker;
    loader: Loader;
    constructor() {
        this.view = new Viewer();
        this.query = new QueryMaker();
        this.loader = new Loader();
    }
    async start() {
        const garage = document.querySelectorAll('.garage__track') as NodeListOf<HTMLElement>;
        garage.forEach((car) => {
            car.remove();
        });
        const getGarageCars = await this.loader.getResp(
            this.query.queryMakerMethod({ url: 'garage', method: 'GET' }),
            state.pageGarage,
            state.limit
        );
        this.view.viewGarage(getGarageCars.cars);
        state.cars = getGarageCars.cars;
        state.countCar = getGarageCars.count;
        console.log(state.cars);
        console.log(state.countCar);
    }

    clear() {
        const garage = document.querySelectorAll('.garage__track') as NodeListOf<HTMLElement>;
        garage.forEach((car) => {
            car.remove();
        });
    }

    async createCar(dataCar: { name: string; color: string }) {
        const dataCarJSON = JSON.stringify(dataCar);
        const createCarData: CreateCarContentResponse = await this.loader.createRespOneCar(
            this.query.queryMakerPOSTQuery({
                url: 'garage',
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                body: dataCarJSON,
            })
        );
        await this.start();
        return createCarData;
        //state.cars.push(createCarData);
        //state.countCar++;
        //console.log(state.cars);
        //console.log(state.countCar);
        //return this.view.viewOneCar(createCarData);
    }

    async deleteCar(id: string) {
        const idCar = Number(id);
        await this.loader.deleteRespCar(
            this.query.queryMakerDELETEQuery({ url: 'garage', method: 'DELETE', id: idCar })
        );
        //console.log('delete ', res);
        return;
    }

    async getCar(id: string) {
        const idCar = Number(id);
        const res = await this.loader.deleteRespCar(
            this.query.queryMakerGETOneQuery({ url: 'garage', method: 'GET', id: idCar })
        );
        //console.log('get ', res);
        return res;
    }

    async updateCar(dataCar: { name: string; color: string; id: number }) {
        const dataCarJSON = JSON.stringify(dataCar);
        return await this.loader.updateCar(
            this.query.queryMakerUpdateQuery({
                url: 'garage',
                id: Number(dataCar.id),
                method: 'PUT',
                header: { 'Content-Type': 'application/json' },
                body: dataCarJSON,
            })
        );
    }

    // buttonsEventRemove(button: HTMLElement) {
    //     //const button_remove = document.querySelector('.garage__track__head__buttons-remove') as HTMLElement;
    //     //const updateName = (<HTMLInputElement>document.getElementById('update__name')) as HTMLInputElement;
    //     //const updateColor = (<HTMLInputElement>document.getElementById('update__color')) as HTMLInputElement;
    //     button.addEventListener('click', (e) => {
    //         const target = e.target as HTMLElement;
    //         console.log(target);
    //         const parent = target.parentNode?.parentNode?.parentNode as HTMLElement;
    //         const elemID = parent.getAttribute('id');
    //         if (elemID) {
    //             this.deleteCar(elemID);
    //             console.log(elemID);
    //             parent.remove();
    //         }
    //         //console.log(elemID);
    //     });
    // }
}

export default App;

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
