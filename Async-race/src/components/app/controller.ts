import { ControllerInterface, RaceWinnerType, WinnerDataType } from '../types/types';
import App from './app';
const app = new App();

class Controller implements ControllerInterface {
    addListener(elements: NodeList | HTMLElement, event: string, callback: () => void) {
        if (elements instanceof NodeList) {
            elements.forEach((element) => {
                element.addEventListener(event, callback);
            });
        } else {
            elements.addEventListener(event, callback);
        }
    }

    readOptionsForCreateQuery() {
        const createName = (<HTMLInputElement>document.getElementById('create__name')) as HTMLInputElement;
        const createColor = (<HTMLInputElement>document.getElementById('create__color')) as HTMLInputElement;
        return {
            url: 'garage' as const,
            method: 'POST' as const,
            header: { 'Content-Type': 'application/json' } as const,
            data: {
                name: createName.value,
                color: createColor.value,
            },
        };
    }

    readOptionsForUpdateQuery(id: number) {
        const updateName = (<HTMLInputElement>document.getElementById('update__name')) as HTMLInputElement;
        const updateColor = (<HTMLInputElement>document.getElementById('update__color')) as HTMLInputElement;
        return {
            url: 'garage' as const,
            method: 'PUT' as const,
            header: { 'Content-Type': 'application/json' } as const,
            data: {
                name: updateName.value,
                color: updateColor.value,
                id: id,
            },
        };
    }

    lockUnlockElement(element: HTMLElement | HTMLButtonElement) {
        if (element.classList.contains('disabled')) {
            element.classList.remove('disabled');
        } else {
            element.classList.add('disabled');
        }
    }

    generateCars(count: number) {
        const brands = [
            'Lada',
            'Nissan',
            'Ford',
            'Subaru',
            'Kia',
            'Mazda',
            'Toyota',
            'Suzuki',
            'Renault',
            'Hyunday',
            'Honda',
            'Volvo',
            'UAZ',
            'Skoda',
        ];
        const models = [
            'Kalina',
            'Jimny',
            'Pathfinder',
            'Explorer',
            'Civic',
            'Solaris',
            'Accord',
            'Patriot',
            'XC70',
            'Impreza',
            'Camry',
            'Land Rover',
            'Discovery',
            'Sandero',
            'Priora',
            'Rio',
            'Cerato',
            'Getz',
            'Picanto',
            'Optima',
            'Rapid',
        ];
        function generateName() {
            return `${brands[Math.floor(Math.random() * brands.length)]} ${
                models[Math.floor(Math.random() * models.length)]
            }`;
        }
        function generateColor() {
            return '#' + ('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
        }
        // const generateCar = { name: generateName, color: generateColor };
        // const generateButton = document.querySelector('.main__buttons__race-generate') as HTMLButtonElement;
        return new Array(count).fill(0).map(() => ({ name: generateName(), color: generateColor() }));
    }

    async getdataWins() {
        const dataWins = await app.getWinners();
        const dataCar = await app.getGarage();
        const winData: WinnerDataType[] = [];
        dataWins.forEach((win) => {
            dataCar.forEach((car) => {
                if (car.id === win.id) {
                    const elem = Object.assign({}, car, win);
                    winData.push(elem);
                }
            });
        });
        console.log('dataWin', dataWins);
        console.log('dataCar', dataCar);
        return winData;
    }

    async NumberWins(winner: RaceWinnerType) {
        if (winner.id && winner.time) {
            //const getWin = await app.getWinner(winner.id);
            const getWins = await app.getWinners();
            const foundWin = getWins.find((win) => win.id === winner.id);
            if (foundWin === undefined) {
                const dataWin = {
                    id: winner.id,
                    wins: 1,
                    time: winner.time,
                };
                await app.createWinner(dataWin);
            } else {
                if (winner.time < foundWin.time) {
                    const dataWin = {
                        id: winner.id,
                        wins: (foundWin.wins += 1),
                        time: winner.time,
                    };
                    await app.updateWinner(dataWin);
                } else {
                    const dataWin = {
                        id: winner.id,
                        wins: (foundWin.wins += 1),
                        time: foundWin.time,
                    };
                    await app.updateWinner(dataWin);
                }
            }
        }
    }
}

export default Controller;

/*
 GetWinnersResponse = {
    id: number;
    wins: number;
    time: number;
}[];

GetCarsContentResponse = {
        name: string;
        color: string;
        id: number;
}[];
*/
