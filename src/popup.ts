import { Options } from '../src/types/types';

class Popup {
    createPopup(selectCard: Options) {
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
                        <button class="modal-add" data-id="1">Buy</button>
                    </div>
                </div>
                </div>
            </div>`
        );
        document.body.appendChild(modal);
        return modal;
    }
    destroy() {
        const popup = document.querySelector('.vmodal');
        document.body.classList.remove('scroll-off');
        popup?.remove();
    }
}

export default Popup;
