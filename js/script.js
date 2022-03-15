/*Criando os arbustos*/
const NUM_BUSHES = 50;

function createBushes(){
    for(let i = 0; i < NUM_BUSHES; i++){
        const div = document.createElement('div');
        div.classList.add('bush');
        div.style.left = Math.random() * 100 + '%';
        div.style.top = Math.random() * 100 + '%';
        document.body.appendChild(div);
    }
}


function init(){
    createBushes();
}

init();