const loginForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('userId') !== null) {
    welcome.closest('.welcome').classList.add('welcome_active');
    userId.textContent = localStorage.userId;
} else {
    loginForm.closest('.signin').classList.add('signin_active');
    loginForm.addEventListener('submit', (event) => {
        let formData = new FormData(loginForm);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    userId.textContent = response.user_id;
                    welcome.closest('.welcome').classList.add('welcome_active');
                    localStorage.setItem('userId', response.user_id);
                    loginForm.closest('.signin').classList.remove('signin_active');
                } else {
                    alert('Неверный логин/пароль');
                }
            }
        });
        xhr.send(formData);
        event.preventDefault();
    });
}