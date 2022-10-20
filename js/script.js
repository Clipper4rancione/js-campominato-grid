/**
 * L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */

//SELEZIONO IL CONTAINER
const grid = document.getElementById('grid');
//QUANTI BOX CI SONO PER ROW
const boxPerRow = 10;

init(boxPerRow);

function init(nBox){
    const totalBox = Math.pow(nBox, 2);

    for(let i = 0; i < totalBox; i++){
        squareGenerator(i);
    };
};

function squareGenerator(boxID){
    const box = document.createElement('div');
    box.className = 'square';
    box.innerHTML = boxID + 1;
    box.addEventListener('click', clickBox);
    grid.append(box);
};

function clickBox(){
    this.classList.add('bg-azure')
};