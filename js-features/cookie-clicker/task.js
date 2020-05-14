let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeesCounter = document.getElementById('clicker__speed__counter');
let lastClick;
let newClick;
let timeLeft;
let clickSpeed;

cookie.onclick = function() {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
    clickerCounter.textContent % 2 == 0 ? cookie.width = 300 : cookie.width = 100;

    
    if (clickerCounter.textContent == 1) {
    newClick = new Date;
    lastClick = newClick;
    } else {
    newClick = new Date;
    timeLeft = newClick.getTime() - lastClick.getTime();
    clickSpeed = (1 / (timeLeft / 1000)).toFixed(2);
    clickerSpeesCounter.textContent = clickSpeed;
    lastClick = newClick;

    }
};