
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');


function getHole( index ) {
    return index.id;
}


for (i = 0; i < holes.length; i++) {
    
    let hole = getHole(holes[i]);
    let holeForClick = document.getElementById(hole);
    holeForClick.onclick = () => {
        holeForClick.className.includes('hole_has-mole') ? dead.textContent = +dead.textContent + 1 : lost.textContent = +lost.textContent + 1;
        if (dead.textContent == 10) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent == 5) {
            alert('Вы поиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}




    






