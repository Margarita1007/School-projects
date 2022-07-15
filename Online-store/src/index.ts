import './style.css';
import './style-popup.css';
//import { Options } from '../src/types/types';
import DataLoader from './data-loader';
//import Popup from './popup';
import Card from './card';

const load = new DataLoader({});
const cards = new Card();

load.getData().then((data) => {
    for (let i = 0; i < 6; i++) {
        cards.createCard(data[i]);
    }
    cards.card_more();
    cards.card_add();
    const btn_load_all = document.createElement('button');
    btn_load_all.className = 'load_all';
    btn_load_all.innerText = 'LOAD ALL';
    document.querySelector('.load')?.append(btn_load_all);
    document.querySelector('.load_all')?.addEventListener('click', () => {
        //cards.delete();
        btn_load_all.classList.add('hidden');
        for (let i = 6; i < data.length; i++) {
            cards.createCard(data[i]);
        }
        cards.card_more();
        cards.card_add();
    });
});
