const formFile = document.getElementById('form');
const nowProgress = document.getElementById('progress');


formFile.addEventListener('submit', (event) => {
    let formFileData = new FormData(formFile);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.addEventListener('loadstart', () => {
        nowProgress.value = 0.3
    });
    xhr.addEventListener('load', () => {
        nowProgress.value = 0.6
    });
    xhr.addEventListener('loadend', () => {
        nowProgress.value = 1.0
    });
    xhr.send(formFileData);
    event.preventDefault();
});





