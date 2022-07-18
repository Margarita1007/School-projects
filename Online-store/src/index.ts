import './style.css';
import './style-popup.css';
import './style-filters.css';
//import { Options } from '../src/types/types';
import DataLoader from './data-loader';
//import Popup from './popup';
import Card from './card';
//import card_filter from './filters';

const load = new DataLoader({});
const cards = new Card();

const data = load.getDataLS();

for (let i = 0; i < data.length; i++) {
    cards.createCard(data[i]);
}
cards.card_more();
cards.card_add();
cards.card_filter();

const checkboxes = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
checkboxes.forEach((box) => {
    box.addEventListener('change', () => {
        cards.delete();
        //console.log('console indexts');
        const dataFilter = load.getDataFilter();
        //document.querySelector('.main-cards')?.removeChild(text);
        for (let i = 0; i < dataFilter.length; i++) {
            cards.createCard(dataFilter[i]);
        }
        cards.card_more();
        cards.card_add();
        cards.card_filter();
    });
    if (localStorage[box.id] != undefined) {
        box.checked = true;
    } else box.checked = false;
});

const clear_filters = document.querySelector('.clear_filters');
if (clear_filters != null) {
    clear_filters.addEventListener('click', () => {
        localStorage.removeItem('filter');
        localStorage.removeItem('data');
        const data = load.getData();
        checkboxes.forEach((box) => {
            const boxID = box.id;
            localStorage.removeItem(boxID);
        });
        cards.delete();
        for (let i = 0; i < data.length; i++) {
            cards.createCard(data[i]);
        }
        cards.card_more();
        cards.card_add();
        cards.card_filter();
        checkboxes.forEach((box) => {
            box.checked = false;
        });
    });
}

const cart_count = document.querySelector('.cart-counter') as HTMLInputElement;
const value = localStorage.getItem('cart_value');
if (value != null) {
    console.log('cart-value');
    cart_count.value = value;
}

const clear_cart = document.querySelector('.clear_cart');
if (clear_cart != null) {
    clear_cart.addEventListener('click', () => {
        localStorage.removeItem('cart');
        localStorage.removeItem('cart_value');
        cart_count.value = '0';
        document.querySelectorAll('.card__description').forEach((card) => {
            card.classList.remove('added');
        });
    });
}

const dataLS = localStorage.getItem('cart');
if (dataLS && dataLS !== '[]') {
    const data: { [key: string]: string }[] = JSON.parse(dataLS);
    document.querySelectorAll('.card__description').forEach((card) => {
        const card_name = card.childNodes[1].textContent;
        data.forEach((elem) => {
            if (elem.name === card_name) {
                card.classList.add('added');
            }
        });
    });
}

const clear_LS = document.querySelector('.clear_all');
if (clear_LS != null) {
    clear_LS.addEventListener('click', () => {
        localStorage.clear();
    });
}
