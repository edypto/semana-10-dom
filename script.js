'use strict';




const btnModal = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function(){
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}


btnModal.forEach(modals =>{
    modals.addEventListener('click', openModal);
})


const closeModal = function(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function(e){

    
    console.log(e)

    if(e.key === 'Escape' &&!modal.classList.contains('hidden')){
        
            closeModal();
        
    }
})








// const openModals = function (){
//     overlay.classList.remove('hidden');
//     modal.classList.remove('hidden');
// }

// for(let i = 0; i < btnModal.length; i++){
//     console.log(i)

//     btnModal[i].addEventListener('click', openModals);
// }

// const closeModals = function (){

//         overlay.classList.add('hidden');
//         modal.classList.add('hidden');
// }

// btnClose.addEventListener('click', closeModals);

// overlay.addEventListener('click', closeModals);

// document.addEventListener('keydown', function (e){
//     console.log(e.key);

//     if(e.key === 'Escape' && !modal.classList.contains('hidden')){
//         closeModals();
//     }
// })



















// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModals = document.querySelectorAll('.show-modal');

// const openModal = function (){
    
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');

// }

// for(let i = 0; i < btnsOpenModals.length; i++){

//     btnsOpenModals[i].addEventListener('click', openModal); 
// }

// const closeModal = function (){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// btnCloseModal.addEventListener('click', closeModal); 

// overlay.addEventListener('click', closeModal);
    
// document.addEventListener('keydown', function (e){
//     if(e,key === 'Escape'){

//     }

// console.log(e.key)
// })