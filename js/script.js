// console prova
console.log('prova prova, sa sa prova ')

// creo delle variabili per definire il mio container 
// che sarà uguale a 10 x 10 = 100 celle
let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;

// estrapolo il contenitore delle celle
const celleWrapperElement = document.querySelector('.container');

// creo un CICLO che mi genera progressivamente cella + num

for (let i = 0; i < numeroCelle; i++) {

    const cella = getSquareElement();
    cella.innerHTML = i + 1;
    // appendo il contenuto al mio contenitore di celle
    celleWrapperElement.append(cella);
}
// FUNZIONE CHE CREA LE MIE CELLE + classe
function getSquareElement() {
    // creo un elemento div
    const square = document.createElement('div');
    // aggiungo la classe delle mie celle
    square.classList.add('cell');
}
