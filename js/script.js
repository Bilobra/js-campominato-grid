// console prova
console.log('prova prova, sa sa prova ')

// creo delle variabili per definire il mio container 
// che sarà uguale a 10 x 10 = 100 celle
let dimensioneGriglia = 10;
let numeroCelle = dimensioneGriglia ** 2;

// estrapolo il contenitore delle celle
const celleWrapperElement = document.querySelector('.container');

// estrapolo il bottone play 
const playButtonElement = document.getElementById('button-play');
// collego al mio button un event listener che farà apparire la mia griglia 
playButtonElement.addEventListener('click', function(){
    // creo un CICLO che mi genera progressivamente cella + num
    
    for (let i = 0; i < numeroCelle; i++) {
    
        const cella = getSquareElement();
        cella.innerHTML = i + 1;
        // appendo il contenuto al mio contenitore di celle
        celleWrapperElement.append(cella);
    }

})

// FUNZIONE CHE CREA LE MIE CELLE + classe
function getSquareElement() {
    // creo un elemento div
    const square = document.createElement('div');
    // aggiungo la classe delle mie celle
    square.classList.add('cell');
    square.addEventListener('click', clickHandler) // ---> senza () quando è dentro una funzione e non vogliamo che riporti nessun valore 
    return square;
}

// FUNZIONE PER RIEMPIRE LA CELLA AL CLICK

function clickHandler(){
    const square = this ;
    // THIS in questo contesto in cui la funzione è legata 
    // ad un event Listener, corrisponde al mio elemento agganciato al Listener nel dom (div cell)
    square.classList.toggle('clicked');

    // ora aggangio la mia funzione alla funzione che genera le mie celle + classe
    // PRIMA DEL RETURN !!!!!

    square.removeEventListener('click',clickHandler);
    // per togliere l'evento dopo aver cliccato una sola volta 
    // quindi non si toglie la classe clicked

    console.log(this);
}