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
                console.log(node);

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
    }

    //btn_add for ALL cards
    card_add() {
        document.querySelectorAll('.add').forEach((elem) => {
            elem.addEventListener('click', () => {
                const name_card = elem.parentNode?.childNodes[1].textContent;
                load.getData().then((data) => {
                    const cardFilter = data.filter((item: Options) => {
                        if (name_card === item.name) {
                            return item;
                        }
                    });
                    cart.add(cardFilter[0]);
                    elem.classList.add('added');
                });
            });
        });
    }

    delete() {
        document.querySelectorAll('.card').forEach((elem) => {
            elem.remove();
        });
    }
}

export default Card;
