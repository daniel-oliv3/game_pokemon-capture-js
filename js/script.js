/*Criando os arbustos*/
const NUM_BUSHES = 50;
const NUM_BALLS = 5

function createBushes(){
    for(let i = 0; i < NUM_BUSHES; i++){
        const div = document.createElement('div');
        div.classList.add('bush');
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 100 + '%';
        document.body.appendChild(div);
    }
}

/*Criando as pokeball*/
function createBalls(){
    for(let i = 0; i < NUM_BALLS; i++){
        const div = document.createElement('div');
        div.classList.add('pokeball');
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 100 + '%';
        document.body.appendChild(div);
    }
}



function init(){
    createBushes();
    createBalls();
}

init();