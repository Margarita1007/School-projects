import Loader from '../loader/loader';
import QueryMaker from '../loader/query-maker';
import { AppInterface } from '../types/types';
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
        const garage_countHTML = document.querySelector('.garage_count');
        const garage_pages = document.querySelector('.garage_pages');
        const pages = Math.ceil(state.countCar / state.limit);
        const paginator = document.querySelector('.garage__head-page-number');
        if (garage_countHTML) {
            garage_countHTML.innerHTML = `${state.countCar} cars`;
        }
        if (garage_pages && paginator) {
            garage_pages.innerHTML = `${pages}`;
            paginator.innerHTML = `${state.pageGarage}`;
        }
        // if (garage_pages && paginator) {
        //     if (pages === 0 || state.pageGarage === 0) {
        //         garage_pages.innerHTML = '1';
        //         paginator.innerHTML = '1';
        //     } else {
        //         garage_pages.innerHTML = `${pages}`;
        //         paginator.innerHTML = `${state.pageGarage}`;
        //     }
        // }
        //console.log(state.pageGarage);
        //console.log(state.cars);
        //console.log(state.pageGarage);
    }

    clear() {
        const garage = document.querySelectorAll('.garage__track') as NodeListOf<HTMLElement>;
        garage.forEach((car) => {
            car.remove();
        });
    }

    async createCar(dataCar: { name: string; color: string }) {
        const dataCarJSON = JSON.stringify(dataCar);
        await this.loader.createRespOneCar(
            this.query.queryMakerPOSTQuery({
                url: 'garage',
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                body: dataCarJSON,
            })
        );
        await this.start();
    }

    async generateCars(dataCar: { name: string; color: string }[]) {
        await Promise.all(dataCar.map(async (car) => await this.createCar(car)));
        await this.start();
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

    async startStopEngine(id: number, status: string) {
        const getStartData = await this.loader.getStartStop(
            this.query.queryMakerEngine({ url: 'engine', method: 'PATCH', id: id, status: status })
        );
        return getStartData;
    }

    async drive(id: number, status: string) {
        //const controller = new AbortController()
        const resp = await this.loader.getDrive(
            this.query.queryMakerEngine({ url: 'engine', method: 'PATCH', id: id, status: status })
        );
        return resp;
    }
}

export default App;
