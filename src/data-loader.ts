import { Data, Options, CBGeneric } from '../src/types/types';

//  const card1 = new Card();
//getData().then((data) => card1.createCard(data[0]));

class DataLoader {
    options: Options;

    constructor(options: Options) {
        this.options = options;
    }

    async getData() {
        const response = await fetch('./json/info-cards.json');
        const data = await response.json();
        return data;
    }

    load(callback: CBGeneric<Data>) {
        this.getData().then((data: Data) => {
            callback(data);
        });
    }
}

export default DataLoader;
