import Loader from '../loader/loader';
import QueryMaker from '../loader/query-maker';
import { AppInterface, UpdateCarContentResponse, UpdateWinnerResponse, WinnerType } from '../types/types';
import Viewer from '../viewer/viewer';
import { state } from './state';

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
        const getGarageCars = await this.loader.getRespPage(
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
    }

    async getGarage() {
        const getGarageCars = await this.loader.getResp(this.query.queryMakerMethod({ url: 'garage', method: 'GET' }));
        return getGarageCars;
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
        return;
    }

    async getCar(id: string) {
        const idCar = Number(id);
        const res = await this.loader.getRespOneCar(
            this.query.queryMakerGETOneQuery({ url: 'garage', method: 'GET', id: idCar })
        );
        return res;
    }

    async updateCar(dataCar: { name: string; color: string; id: number }) {
        const dataCarJSON = JSON.stringify(dataCar);
        return (await this.loader.updateCar(
            this.query.queryMakerUpdateQuery({
                url: 'garage',
                id: Number(dataCar.id),
                method: 'PUT',
                header: { 'Content-Type': 'application/json' },
                body: dataCarJSON,
            })
        )) as UpdateCarContentResponse;
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

    async createWinner(dataWin: { id: number; wins: number; time: number }) {
        const dataWinJSON = JSON.stringify(dataWin);
        await this.loader.createRespOneCar(
            this.query.queryMakerPOSTQuery({
                url: 'winners',
                method: 'POST',
                header: { 'Content-Type': 'application/json' },
                body: dataWinJSON,
            })
        );
    }

    async getWinnersPage() {
        const query = {
            url: 'winners',
            method: 'GET',
            page: state.pageWinners,
            limit: state.limitWin,
            sort: state.sort,
            order: state.sortOrder,
        };
        const resp = await this.loader.getRespWinsPage(this.query.queryMakerWinnersPageQuery(query));
        state.carsWin = resp.carsWin;
        state.countWinners = resp.countWin;
        return resp;
    }

    async getWinners() {
        const query = {
            url: 'winners',
            method: 'GET',
            sort: 'time',
            order: 'ASC',
        };
        const resp = await this.loader.getRespWins(this.query.queryMakerWinnersQuery(query));
        return resp;
    }

    async getWinner(id: number) {
        const res = await this.loader.getRespOneCar(
            this.query.queryMakerGETOneQuery({ url: 'winners', method: 'GET', id: id })
        );
        return res as Promise<WinnerType | undefined>;
    }

    async deleteWinner(id: number) {
        await this.loader.deleteRespCar(this.query.queryMakerDELETEQuery({ url: 'winners', method: 'DELETE', id: id }));
        return;
    }

    async updateWinner(dataCar: { wins: number; time: number; id: number }) {
        const dataCarJSON = JSON.stringify(dataCar);
        return (await this.loader.updateCar(
            this.query.queryMakerUpdateQuery({
                url: 'winners',
                id: dataCar.id,
                method: 'PUT',
                header: { 'Content-Type': 'application/json' },
                body: dataCarJSON,
            })
        )) as UpdateWinnerResponse;
    }
}

export default App;
