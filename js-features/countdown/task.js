const nowSecondsContainer = document.getElementById('timer');
let nowSeconds = ('00:' + nowSecondsContainer.textContent).split(':');
let interval;


const timer = () => {
    
        nowSeconds[1] -= 1;
        nowSecondsContainer.textContent = nowSeconds.join(':');
        if (nowSecondsContainer.textContent == '00:0') {
            alert('Вы победили в конкурсе!');
            clearInterval(interval);
            return;
        }
        
}
(() => interval = setInterval(timer, 1000))();



