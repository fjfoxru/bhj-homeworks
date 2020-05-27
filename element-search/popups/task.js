const modal = document.getElementById('modal_main');
modal.className = 'modal modal_active';


const modalClose = Array.from(document.querySelectorAll('.modal .modal__close'));
modalClose.forEach( close => {
    close.onclick = () => {
        let modalToClose = close.closest('.modal_active');
        modalToClose.classList.remove('modal_active');
    }
});




const showSuccess = document.querySelector('.show-success');

showSuccess.onclick = () => {
    let modalSuccess = document.getElementById('modal_success');
    modalSuccess.classList.add('modal_active');
    modal.classList.remove('modal_active');
}


