import { Options, Data } from '../src/types/types';

class Popup {
    createPopup1(selectCard: Options) {
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        modal.insertAdjacentHTML(
            'afterbegin',
            `<div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-body">
                    <button class="modal-close">
                    &times;
                    </button>  
            
                    <img class="modal__img" src=${selectCard.imgsrc} alt="${selectCard.article}">
                    <div class="modal__content" id='picture'>
                        <h1 class='modal__content_name'>${selectCard.name}</h1>
                        <h3> Price: $${selectCard.price}</h3>
                        <h5> <b>Theme:</b> ${selectCard.theme} </h5> 
                        <h5> <b>Number of modules:</b> ${selectCard.modules} </h5>
                        <h5> <b>Width: </b> ${selectCard.width} cm </h5>
                        <h5> <b>Height: </b> ${selectCard.height} cm </h5>
                        <h5> <b>Stock availability: </b> ${selectCard.stock}</h5>
                    </div>
                </div>
                </div>
            </div>`
        );
        document.body.appendChild(modal);
        return modal;
    }

    createPopup(selectCard: Data) {
        const fragment = document.createDocumentFragment();
        const modal = document.createElement('div');
        modal.classList.add('vmodal');
        document.body.appendChild(modal);
        const popupTempl = document.querySelector<HTMLTemplateElement>('#templ-popup');
        if (popupTempl != null) {
            const popupClone = <Element>popupTempl.content.cloneNode(true);
            const popupPhoto = popupClone.querySelector('.modal__img') as HTMLImageElement | null;
            const popupName = popupClone.querySelector('.modal__content_name');
            const popupPrice = popupClone.querySelector('.popup_price');
            const popupTheme = popupClone.querySelector('.popup_theme');
            const popupModules = popupClone.querySelector('.popup_modules');
            const popupWidth = popupClone.querySelector('.popup_width');
            const popupHeight = popupClone.querySelector('.popup_height');
            const popupStock = popupClone.querySelector('.popup_stock');
            //const cartAdd = cardClone.querySelector('.add');

            if (popupPhoto != null) {
                popupPhoto.src = selectCard.imgsrc;
                popupPhoto.alt = selectCard.article;
            }
            if (popupName != null) {
                popupName.textContent = selectCard.name;
            }
            if (popupPrice != null) {
                popupPrice.textContent = `Price: $${selectCard.price}`;
            }
            if (popupTheme != null) {
                popupTheme.textContent = `Theme: ${selectCard.theme}`;
            }
            if (popupModules != null) {
                popupModules.textContent = `Modules: ${selectCard.modules}`;
            }
            if (popupWidth != null) {
                popupWidth.textContent = `Width: ${selectCard.width} cm`;
            }
            if (popupHeight != null) {
                popupHeight.textContent = `Height: ${selectCard.height} cm`;
            }
            if (popupStock != null) {
                popupStock.textContent = `Stock availability:: ${selectCard.stock}`;
            }

            fragment.append(popupClone);
        }

        //const modal = document.querySelector('.main-cards');

        modal.append(fragment);
    }

    destroy() {
        const popup = document.querySelector('.vmodal');
        document.body.classList.remove('scroll-off');
        popup?.remove();
    }
}

export default Popup;
