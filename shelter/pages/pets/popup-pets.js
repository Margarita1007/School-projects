const $ = {};
/*
function _createModal(options) {

  let options = {name: dataPetsFilter[0].name,
    img: dataPetsFilter[0].img,
    type: dataPetsFilter[0].type,
    breed: dataPetsFilter[0].breed,
    description: dataPetsFilter[0].description,
    age: dataPetsFilter[0].age,
    inoculations: dataPetsFilter[0].inoculations,
    diseases: dataPetsFilter[0].diseases,
    parasites: dataPetsFilter[0].parasites,

}

  console.log(options.img)
    const modal = document.createElement ('div');
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',    `
    <div class="modal-overlay">
      <div class="modal-window">
        <div class="modal-body">
           <button class="modal-close">
             &times;
           </button>  
    
            <img class="modal-img" src='../../assets/images/pets-jennifer.png' alt="Jennifer">
            <div class="modal-content" id='pet'>
                 <h1 id='name'>Jennifer</h1>
                     <h3> Dog - Labrador </h3>
                        <p> Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. 
                            This girl really enjoys being able to go outside to run and play, 
                            but won't hesitate to play up a storm in the house if she has all of her favorite toys. 
                        </p>
                 <ul>
                   <li><h5> <b>Age:</b> 2 months </h5> </li>
                   <li><h5> <b>Inoculations:</b> none </h5></li>
                   <li><h5> <b>Diseases: </b> none </h5></li>
                   <li><h5> <b>Parasites: </b> none </h5></li>
                 </ul>
            </div>
        </div>
       </div>
     </div> `
     )

     
     /*var name = event.target.closest('.name-pets')

name.addEventListener('click', modalPetName);
function modalPetName() {

    for (value of dataPets) {
        if (dataPets.name == event.target.innerText) {
        console.log(event.target.innerText)}
    }

} 
document.querySelectorAll(".block-pets").forEach(elem =>  elem.addEventListener("click", event  => {

    const $target = event.target;
    const $currentTarget = event.currentTarget;
    // выведем значения в консоль
    const inText=$currentTarget.innerText;
    const nameText = inText.split(' ')[0];
    console.log(nameText);


    const dataPetsFilter = dataPets.filter(item => {
      if (nameText.includes(item["name"])) {
        return item;
        
      }
    })




let options = {name: dataPetsFilter[0].name,
               img: dataPetsFilter[0].img,
               type: dataPetsFilter[0].type,
               breed: dataPetsFilter[0].breed,
               description: dataPetsFilter[0].description,
               age: dataPetsFilter[0].age,
               inoculations: dataPetsFilter[0].inoculations,
               diseases: dataPetsFilter[0].diseases,
               parasites: dataPetsFilter[0].parasites,

}


console.log(dataPetsFilter[0].img)
}))
     
  document.body.appendChild(modal);

  return modal;
}

$.modal = function(options) {
    const $modal = _createModal(options)
    
    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')

        },
        destroy() {}
    }
}


const modal = $.modal() 

    const BTN_CLOSE = document.querySelector(".modal-close");
    const BTN_OPEN = document.querySelectorAll(".block-pets");
    const modal_overlay = document.querySelector(".modal-overlay");
    

    const openModal = () => {

        modal.open();
        document.body.classList.add('scroll-off');
    }
    
  
  const closeModal = () => {
    modal.close();
    document.body.classList.remove('scroll-off');
      }

  BTN_OPEN.forEach(elem =>  elem.addEventListener("click", openModal));
  BTN_CLOSE.addEventListener("click", closeModal);
  modal_overlay.addEventListener("click", closeModal)
  
  */

  ////////////////////////////////////////

  function _createModal(options) {
      const modal = document.createElement ('div');
      modal.classList.add('vmodal')
      modal.insertAdjacentHTML('afterbegin',    `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-body">
             <button class="modal-close">
               &times;
             </button>  
      
              <img class="modal-img" src=${options.img} alt="${options.name}">
              <div class="modal-content" id='pet'>
                   <h1 id='name'>${options.name}</h1>
                       <h3> ${options.type} - ${options.breed} </h3>
                          <p> ${options.description} 
                          </p>
                   <ul>
                     <li><h5> <b>Age:</b> ${options.age} </h5> </li>
                     <li><h5> <b>Inoculations:</b> ${options.inoculations} </h5></li>
                     <li><h5> <b>Diseases: </b> ${options.diseases} </h5></li>
                     <li><h5> <b>Parasites: </b> ${options.parasites} </h5></li>
                   </ul>
              </div>
          </div>
         </div>
       </div> `
       )       
    document.body.appendChild(modal); 
    return modal;
  }

  $.modal = function(options) {
    const $modal = _createModal(options)
    
    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')

        },
        destroy() {
          $modal.parentNode.removeChild($modal)
        }
    }
}