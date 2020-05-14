const nowSeconds = document.getElementById('timer');
const timeNow = new Date;


let interval;


const timer = () => {
    if (nowSeconds.textContent == '0') {
        alert('Вы победили в конкурсе!');
        clearInterval(interval);
        return;
    }
        nowSeconds.textContent -= 1;
    
}
(() => interval = setInterval(timer, 1000))();



