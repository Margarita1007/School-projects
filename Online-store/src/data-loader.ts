import { Data, Options } from '../src/types/types';

class DataLoader {
    options: Options;
    cardJSON: Array<Data> = [
        {
            article: 'card1',
            name: 'Light misty forest',
            theme: 'Nature',
            modules: 3,
            width: 180,
            height: 120,
            imgsrc: '././img/card1.jpeg',
            price: 49.99,
            stock: 3,
        },
        {
            article: 'card2',
            name: 'Wolfs',
            theme: 'Nature',
            modules: 3,
            width: 210,
            height: 140,
            imgsrc: './img/card2.jpg',
            price: 59.99,
            stock: 0,
        },
        {
            article: 'card3',
            name: 'Deer on the lake',
            theme: 'Animals',
            modules: 3,
            width: 180,
            height: 120,
            imgsrc: './img/card3.jpg',
            price: 42.99,
            stock: 1,
        },
        {
            article: 'card4',
            name: 'Deer figures',
            theme: 'Animals',
            modules: 1,
            width: 180,
            height: 60,
            imgsrc: './img/card4.jpg',
            price: 42.99,
            stock: 0,
        },
        {
            article: 'card5',
            name: 'Сoniferous forest',
            theme: 'Nature',
            modules: 1,
            width: 240,
            height: 60,
            imgsrc: './img/card5.jpg',
            price: 53.99,
            stock: 3,
        },
        {
            article: 'card6',
            name: 'Foggy forest',
            theme: 'Nature',
            modules: 3,
            width: 240,
            height: 120,
            imgsrc: './img/card6.jpeg',
            price: 57.99,
            stock: 3,
        },
        {
            article: 'card7',
            name: 'Spruce forest',
            theme: 'Nature',
            modules: 2,
            width: 180,
            height: 150,
            imgsrc: './img/card7.jpeg',
            price: 54.99,
            stock: 3,
        },
        {
            article: 'card8',
            name: 'Light mistery forest',
            theme: 'Nature',
            modules: 3,
            width: 180,
            height: 120,
            imgsrc: './img/card8.jpg',
            price: 49.99,
            stock: 3,
        },
        {
            article: 'card9',
            name: 'The road in the forest',
            theme: 'Nature',
            modules: 1,
            width: 60,
            height: 100,
            imgsrc: './img/card9.jpg',
            price: 34.99,
            stock: 3,
        },
        {
            article: 'card10',
            name: 'Animals',
            theme: 'Animals',
            modules: 3,
            width: 180,
            height: 100,
            imgsrc: './img/card10.jpg',
            price: 38.99,
            stock: 3,
        },
        {
            article: 'card11',
            name: 'Minimalism',
            theme: 'Minimalism',
            modules: 5,
            width: 120,
            height: 60,
            imgsrc: './img/card11.jpg',
            price: 35.99,
            stock: 3,
        },
        {
            article: 'card12',
            name: 'Green plants',
            theme: 'Minimalism',
            modules: 5,
            width: 180,
            height: 100,
            imgsrc: './img/card12.jpg',
            price: 37.99,
            stock: 3,
        },
        {
            article: 'card13',
            name: 'Travel',
            theme: 'Travel',
            modules: 5,
            width: 150,
            height: 90,
            imgsrc: './img/card13.jpg',
            price: 41.99,
            stock: 3,
        },
        {
            article: 'card14',
            name: 'Greyness',
            theme: 'Minimalism',
            modules: 3,
            width: 180,
            height: 90,
            imgsrc: './img/card14.jpeg',
            price: 42.99,
            stock: 3,
        },
        {
            article: 'card15',
            name: 'Abstraction',
            theme: 'Minimalism',
            modules: 3,
            width: 120,
            height: 60,
            imgsrc: './img/card15.jpg',
            price: 33.99,
            stock: 3,
        },
        {
            article: 'card16',
            name: 'The outline of a deer',
            theme: 'Minimalism',
            modules: 1,
            width: 60,
            height: 90,
            imgsrc: './img/card16.jpg',
            price: 29.99,
            stock: 3,
        },
        {
            article: 'card17',
            name: 'The outline of an owl',
            theme: 'Minimalism',
            modules: 1,
            width: 60,
            height: 90,
            imgsrc: './img/card17.jpeg',
            price: 29.99,
            stock: 3,
        },
        {
            article: 'card18',
            name: 'Dark forest',
            theme: 'Nature',
            modules: 2,
            width: 120,
            height: 90,
            imgsrc: './img/card18.jpg',
            price: 45.99,
            stock: 3,
        },
    ];
    cardObj: { [key: string]: string }[] = [
        {
            article: 'card1',
            name: 'Light misty forest',
            theme: 'Nature',
            modules: '3',
            width: '180',
            height: '120',
            imgsrc: '././img/card1.jpeg',
            price: '49.99',
            stock: '3',
        },
        {
            article: 'card2',
            name: 'Wolfs',
            theme: 'Nature',
            modules: '3',
            width: '210',
            height: '140',
            imgsrc: './img/card2.jpg',
            price: '59.99',
            stock: '0',
        },
        {
            article: 'card3',
            name: 'Deer on the lake',
            theme: 'Animals',
            modules: '3',
            width: '180',
            height: '120',
            imgsrc: './img/card3.jpg',
            price: '42.99',
            stock: '1',
        },
        {
            article: 'card4',
            name: 'Deer figures',
            theme: 'Animals',
            modules: '1',
            width: '180',
            height: '60',
            imgsrc: './img/card4.jpg',
            price: '42.99',
            stock: '0',
        },
        {
            article: 'card5',
            name: 'Сoniferous forest',
            theme: 'Nature',
            modules: '1',
            width: '240',
            height: '60',
            imgsrc: './img/card5.jpg',
            price: '53.99',
            stock: '3',
        },
        {
            article: 'card6',
            name: 'Foggy forest',
            theme: 'Nature',
            modules: '3',
            width: '240',
            height: '120',
            imgsrc: './img/card6.jpeg',
            price: '57.99',
            stock: '3',
        },
        {
            article: 'card7',
            name: 'Spruce forest',
            theme: 'Nature',
            modules: '2',
            width: '180',
            height: '150',
            imgsrc: './img/card7.jpeg',
            price: '54.99',
            stock: '3',
        },
        {
            article: 'card8',
            name: 'Light mistery forest',
            theme: 'Nature',
            modules: '3',
            width: '180',
            height: '120',
            imgsrc: './img/card8.jpg',
            price: '49.99',
            stock: '3',
        },
        {
            article: 'card9',
            name: 'The road in the forest',
            theme: 'Nature',
            modules: '1',
            width: '60',
            height: '100',
            imgsrc: './img/card9.jpg',
            price: '34.99',
            stock: '3',
        },
        {
            article: 'card10',
            name: 'Animals',
            theme: 'Animals',
            modules: '3',
            width: '180',
            height: '100',
            imgsrc: './img/card10.jpg',
            price: '38.99',
            stock: '3',
        },
        {
            article: 'card11',
            name: 'Minimalism',
            theme: 'Minimalism',
            modules: '5',
            width: '120',
            height: '60',
            imgsrc: './img/card11.jpg',
            price: '35.99',
            stock: '3',
        },
        {
            article: 'card12',
            name: 'Green plants',
            theme: 'Minimalism',
            modules: '5',
            width: '180',
            height: '100',
            imgsrc: './img/card12.jpg',
            price: '37.99',
            stock: '3',
        },
        {
            article: 'card13',
            name: 'Travel',
            theme: 'Travel',
            modules: '5',
            width: '150',
            height: '90',
            imgsrc: './img/card13.jpg',
            price: '41.99',
            stock: '3',
        },
        {
            article: 'card14',
            name: 'Greyness',
            theme: 'Minimalism',
            modules: '3',
            width: '180',
            height: '90',
            imgsrc: './img/card14.jpeg',
            price: '42.99',
            stock: '3',
        },
        {
            article: 'card15',
            name: 'Abstraction',
            theme: 'Minimalism',
            modules: '3',
            width: '120',
            height: '60',
            imgsrc: './img/card15.jpg',
            price: '33.99',
            stock: '3',
        },
        {
            article: 'card16',
            name: 'The outline of a deer',
            theme: 'Minimalism',
            modules: '1',
            width: '60',
            height: '90',
            imgsrc: './img/card16.jpg',
            price: '29.99',
            stock: '3',
        },
        {
            article: 'card17',
            name: 'The outline of an owl',
            theme: 'Minimalism',
            modules: '1',
            width: '60',
            height: '90',
            imgsrc: './img/card17.jpeg',
            price: '29.99',
            stock: '3',
        },
        {
            article: 'card18',
            name: 'Dark forest',
            theme: 'Nature',
            modules: '2',
            width: '120',
            height: '90',
            imgsrc: './img/card18.jpg',
            price: '45.99',
            stock: '3',
        },
    ];

    constructor(options: Options) {
        this.options = options;
    }

    getData() {
        return this.cardJSON;
    }

    getDataObj() {
        return this.cardObj;
    }

    getDataLS() {
        const dataLS = localStorage.getItem('filter');
        if (dataLS && dataLS !== '[]') {
            const data = JSON.parse(dataLS);
            return data;
        } else {
            return this.cardObj;
        }
    }

    getDataFilter() {
        const dataLS = localStorage.getItem('filter');
        if (dataLS != null) {
            const filter = JSON.parse(dataLS);
            return filter;
        }
    }
}

export default DataLoader;
