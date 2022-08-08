import { StateInterface } from '../types/types';

export const state: StateInterface = {
    pageGarage: 1,
    limit: 7,
    //constants.defaultGaragePage,
    pageWinners: 1,
    limitWin: 10,
    cars: [],
    carsWin: [],
    //winners: [],
    countCar: 0,
    generateCount: 100,
    countWinners: 0,
    view: 'garage',
    sort: 'time',
    sortOrder: 'ASC',
};
