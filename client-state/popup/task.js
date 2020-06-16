const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close');
const getCookie = (name) => {
    const value= "; "+ document.cookie;
    let parts = value.split("; "+ name+ "=");
    if (parts.length=== 2) {
        return parts
                .pop()
                .split(";")
                .shift();
    }
}
if (getCookie('modal') !== 'close') {
    modal.classList.add('modal_active');
}
closeModal.addEventListener('click', (event) => {
    closeModal.closest('.modal').classList.remove('modal_active');
    document.cookie = 'modal=close';
});