import {
    GetCarsContentResponse,
    UpdateCarContentResponse,
    LoaderInterface,
    StartStopEngineResponse,
    DriveResponse,
    GetWinnersResponse,
    UpdateWinnerResponse,
} from '../types/types';
// send a fetch request for specified query
class Loader implements LoaderInterface {
    async getRespPage(query: { url: string; method: string }, page: number, limit: number) {
        const resp = await fetch(`${query.url}?_page=${page}&_limit=${limit}`, { method: query.method });
        return {
            cars: (await resp.json()) as GetCarsContentResponse,
            count: Number(resp.headers.get('X-Total-Count')),
        };
        //return (await (await resp).json()) as GetCarsContentResponse;
    }

    async getResp(query: { url: string; method: string }) {
        const resp = await fetch(`${query.url}`, { method: query.method });
        // return {
        //     cars: (await resp.json()) as GetCarsContentResponse,
        //     count: Number(resp.headers.get('X-Total-Count')),
        // };
        return (await (await resp).json()) as GetCarsContentResponse;
    }

    async createRespOneCar(query: {
        url: string;
        method: string;
        header: { 'Content-Type': 'application/json' };
        body: string;
    }) {
        const resp = fetch(query.url, { method: query.method, headers: query.header, body: query.body });
        return await (await resp).json();
    }

    async deleteRespCar(query: { url: string; method: string }) {
        const resp = await fetch(query.url, { method: query.method });
        //const jsonResp = await resp.json();
        //return jsonResp;
        if (resp.ok) {
            const jsonResp = await resp.json();
            return jsonResp;
        } else {
            alert('Ошибка HTTP: ' + resp.status);
        }
    }

    async getRespOneCar(query: { url: string; method: string }) {
        const resp = await fetch(query.url, { method: query.method });
        if (resp.ok) {
            const jsonResp = await resp.json();
            return jsonResp;
        } else {
            return undefined;
            //console.log('Ошибка HTTP: ' + resp.status);
        }
    }

    async getRespOneWinner(query: { url: string; method: string }) {
        const res = await fetch(query.url, { method: query.method })
            .then((resp) => resp.json())
            .catch((resp) => {
                if (resp.status === 404) {
                    console.log('ошибка 404');
                    return undefined;
                }
            });
        return await res;
    }

    async updateCar(query: {
        url: string;
        method: string;
        header: { 'Content-Type': 'application/json' };
        body: string;
    }) {
        const resp = fetch(query.url, { method: query.method, headers: query.header, body: query.body });
        return (await (await resp).json()) as UpdateCarContentResponse | UpdateWinnerResponse;
    }

    async getStartStop(query: { url: string; method: string }) {
        const resp = await fetch(query.url, { method: query.method });
        // if (resp.ok) {
        //     return (await resp.json()) as StartStopEngineResponse;
        // } else {
        //     alert('Ошибка HTTP: ' + resp.status);
        // }
        return (await resp.json()) as StartStopEngineResponse;
    }

    async getDrive(query: { url: string; method: string }) {
        //const controller = new AbortController();
        //const signal = controller.signal;
        const resp = await fetch(query.url, { method: query.method });
        if (resp.ok) {
            return (await resp.json()) as DriveResponse;
        } else {
            //controller.abort();
            console.log('Ошибка HTTP: ' + resp.status);
        }
    }

    async getRespWinsPage(query: { url: string; method: string }) {
        const resp = await fetch(`${query.url}`, { method: query.method });
        //return (await resp.json()) as GetWinnersResponse;
        return {
            carsWin: (await resp.json()) as GetWinnersResponse,
            countWin: Number(resp.headers.get('X-Total-Count')),
        };
    }

    async getRespWins(query: { url: string; method: string }) {
        const resp = await fetch(`${query.url}`, { method: query.method });
        return (await resp.json()) as GetWinnersResponse;
    }
}

export default Loader;
