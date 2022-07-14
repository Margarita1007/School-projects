import { Data } from '../src/types/types';

class Card {
    createCard(data: Data) {
        const fragment = document.createDocumentFragment();
        const cardTempl = document.querySelector<HTMLTemplateElement>('#templ-card');

        data.forEach((item) => {
            if (cardTempl != null) {
                const cardClone = <Element>cardTempl.content.cloneNode(true);
                const cardPhoto = cardClone.querySelector('.card__photo_img') as HTMLImageElement | null;
                const cardName = cardClone.querySelector('.card__description_name');
                const cardPrice = cardClone.querySelector('.card__description_price');

                if (cardPhoto != null) {
                    cardPhoto.src = `${item.imgsrc}`;
                }
                if (cardName != null) {
                    cardName.textContent = item.name;
                }
                if (cardPrice != null) {
                    cardPrice.textContent = `Price: $${item.price}`;
                }

                fragment.append(cardClone);
            }
        });
        const card = document.querySelector('.main-cards');

        if (card != null) {
            card.append(fragment);
        }
    }
}

export default Card;
