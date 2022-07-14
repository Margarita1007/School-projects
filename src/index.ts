import './style.css';
import './style-popup.css';
import { Data, Options } from '../src/types/types';
import DataLoader from './data-loader';
import Popup from './popup';
import Card from './card';
import Cart from './cart';

const load = new DataLoader({});
const cards = new Card();

load.getData()
    .then((data) => cards.createCard(data))
    .then(() => {
        document.querySelectorAll('.card').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                const $currentTarget = event.currentTarget;
                // выведем значения в консоль
                let inText;
                if ($currentTarget != null) {
                    inText = ($currentTarget as HTMLElement).textContent;
                }
                const nameText = inText?.trim().split('  ')[0].trim();
                //console.log(event.target);

                load.getData().then((data) => {
                    const cardFilter = data.filter((item: Options) => {
                        if (nameText === item.name) {
                            return item;
                        }
                    });
                    //console.log(cardFilter[0].article);
                    const popup = new Popup();
                    popup.createPopup(cardFilter[0]);
                    document.body.classList.add('scroll-off');
                    const BTN_CLOSE = document.querySelector('.modal-close');
                    const modalWinow = document.querySelector('.modal-window');
                    if (modalWinow != null) {
                        document.addEventListener('click', (event) => {
                            //console.log(event.target);
                            if (event.target === modalWinow) {
                                popup.destroy();
                            }
                        });
                    }
                    if (BTN_CLOSE != null) {
                        BTN_CLOSE.addEventListener('click', popup.destroy);
                    }
                });
            });
        });
    })
    .then(() => {
        document.querySelectorAll('.modal-add').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                console.log(event.target);
            });
        });
    });
