const loginForm = document.getElementById('signin__form');
loginForm.closest('.signin').classList.add('signin_active');



loginForm.addEventListener('submit', (event) => {
    let formData = new FormData(loginForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.responseText.success) {
                const userId = document.getElementById('user_id');
                welcom.closest('.welcome').listClass.add('welcome_active');
                userId.innerText(`${xhr.responseText.id}`);
                localStorage.setItem('userId', 'xhr.responseText.id');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    xhr.send(formData);
    event.preventDefault();
});