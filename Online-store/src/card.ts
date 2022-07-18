import { Data, Options } from '../src/types/types';
import DataLoader from './data-loader';
import Popup from './popup';

const load = new DataLoader({});
const cart = new Cart();
import Cart from './cart';

class Card {
    //creane ONE card
    createCard(item: Data) {
        const fragment = document.createDocumentFragment();
        const cardTempl = document.querySelector<HTMLTemplateElement>('#templ-card');
        if (cardTempl != null) {
            const cardClone = <Element>cardTempl.content.cloneNode(true);
            const cardPhoto = cardClone.querySelector('.card__photo_img') as HTMLImageElement | null;
            const cardName = cardClone.querySelector('.card__description_name');
            const cardPrice = cardClone.querySelector('.card__description_price');
            const cartAdd = cardClone.querySelector('.add');

            if (cardPhoto != null) {
                cardPhoto.src = `${item.imgsrc}`;
            }
            if (cardName != null) {
                cardName.textContent = item.name;
            }
            if (cardPrice != null) {
                if (item.stock != 0) {
                    cardPrice.textContent = `Price: $${item.price}`;
                } else {
                    cardPrice.textContent = `Sorry, we're out of stock`;
                    cartAdd?.classList.add('hidden');
                }
            }

            fragment.append(cardClone);
        }

        const card = document.querySelector('.main-cards');

        if (card != null) {
            card.append(fragment);
        }
    }

    //more_info for ALL cards
    card_more() {
        document.querySelectorAll('.card__description_more').forEach((elem) => {
            elem.addEventListener('click', (event) => {
                const $currentTarget = event.currentTarget as HTMLElement;
                const node = $currentTarget.parentNode?.childNodes[1];
                // выведем значения в консоль
                let inText;
                if (node != null) {
                    inText = (node as HTMLElement).textContent;
                }
                const nameText = inText?.trim().split('  ')[0].trim();
                //console.log(node);

                const data = load.getData();
                //console.log(data);
                const cardFilter = data.filter((item: Options) => {
                    if (nameText === item.name) {
                        return item;
                    }
                });
                //console.log(cardFilter);
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
    }

    //btn_add for ALL cards
    card_add() {
        document.querySelectorAll('.add').forEach((elem) => {
            elem.addEventListener('click', () => {
                const name_card = elem.parentNode?.childNodes[1].textContent;
                const data = load.getData();
                const cardFilter = data.filter((item: Options) => {
                    if (name_card === item.name) {
                        return item;
                    }
                });
                cart.add(cardFilter[0]);
                elem.parentElement?.classList.add('added');
                //const number_item = document.createElement('input');
                //number_item.value = '1';
                //elem.append(number_item);
            });
        });
    }

    card_filter() {
        //let dataFilterCheck: { [key: string]: string }[];
        //let dataFilterCheckArr;
        //const data = dataJSON as { [key: string]: string | number }[];
        //type data = { [key: string]: string }[];
        //const data = dataJSON as Array<object>;
        //const cardsName = document.querySelectorAll('.card__description_name');
        const checkboxes = document.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
        const checkboxObj: { [key: string]: string[] } = {};
        const data: { [key: string]: string }[] = load.getDataObj();
        //const checkboxValues = [];
        checkboxes.forEach((box) => {
            box.addEventListener('change', () => {
                //const data: { [key: string]: string }[] = load.getDataObj();
                const keyObj = box.name;
                const boxValue = box.id.split('-')[0];
                if (box.checked === true) {
                    localStorage.setItem(box.id, box.checked.toString());
                    if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === false) checkboxObj[keyObj] = [];
                    checkboxObj[keyObj].push(boxValue);
                } else {
                    localStorage.removeItem(box.id);
                    if (Object.prototype.hasOwnProperty.call(checkboxObj, keyObj) === true) {
                        checkboxObj[keyObj].splice(checkboxObj[keyObj].indexOf(boxValue), 1);
                        if (checkboxObj[keyObj].length === 0) {
                            delete checkboxObj[keyObj];
                        }
                    }
                }
                const checkboxKeys = Object.keys(checkboxObj);
                const filtered = data.filter((product) => {
                    return checkboxKeys.every((key) => {
                        if (checkboxObj[key].length === 0) {
                            console.log('a');
                        }
                        if (Array.isArray(checkboxObj[key])) {
                            //console.log(product[key]);
                            return checkboxObj[key].includes(product[key].toLowerCase());
                            //filtered.push(product);
                        }
                        return checkboxObj[key].includes(product[key].toLowerCase());
                    });
                });

                localStorage.setItem('filter', JSON.stringify(filtered));
                //localStorage.setItem('filter', JSON.stringify(filtered));
                //console.log('datafilterckeck', dataFilterCheck)
                /* else {
                    const dataStorage: { [key: string]: string }[] = load.getDataFilter();
                    const filtered = dataStorage.filter((product) => {
                        return checkboxKeys.every((key) => {
                            if (checkboxObj[key].length === 0) {
                                console.log('a');
                            }
                            if (Array.isArray(checkboxObj[key])) {
                                //console.log(product[key]);
                                return checkboxObj[key].includes(product[key].toLowerCase());
                                //filtered.push(product);
                            }
                            return checkboxObj[key].includes(product[key].toLowerCase());
                        });
                    });
                    localStorage.removeItem('filter');
                    localStorage.setItem('filter', JSON.stringify(filtered));
                }*/
            });
        });

        /*const radioStock = document.getElementById('stock') as HTMLInputElement;
        const radioAll = document.getElementById('all') as HTMLInputElement;
        radioStock.addEventListener('change', () => {
            //console.log('input');
            localStorage.removeItem(radioAll.id);
            localStorage.setItem(radioStock.id, radioStock.checked.toString());
            const data: { [key: string]: string }[] = load.getDataLS();
            const filtered = data.filter((item) => {
                if (item.stock != '0') return item;
            });
            localStorage.setItem('data', JSON.stringify(filtered));
        });
        radioAll.addEventListener('change', () => {
            //console.log('input');
            localStorage.removeItem(radioStock.id);
            localStorage.setItem(radioAll.id, radioAll.checked.toString());
            const data: { [key: string]: string }[] = load.getDataLS();
            const filtered = data.filter((item) => {
                return item;
            });
            localStorage.setItem('data', JSON.stringify(filtered));
        });
        */
    }

    delete() {
        document.querySelectorAll('.card').forEach((elem) => {
            elem.remove();
        });
    }
}

export default Card;
