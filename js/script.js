// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// 1. generazione bombe
var bombe = [];
var numeroBombe = 16;
var numerimassimi = 100;

// finchè il contenitore delle bombe non è popolato di 16 elementi
while(bombe.length < numeroBombe) {

    var numeroGenerato = generaBomba(numerimassimi);

    if (bombe.includes(numeroGenerato) == false) {

        bombe.push(numeroGenerato);
    }
}

function generaBomba(max) {

    return Math.floor(Math.random() * max) + 1;
}

// le bombe generate
console.log(bombe);

// 2. chiediamo i numeri all'utente
// condizioni : tutti numeri esatti, non sbaglia

// Creare un array vuoto
var numeriInseriti = [];

// Chiedere un numero all'utente con un ciclo while fino a che la lunghezza dell'array non è 84 o fino a che non trova un numero bomba (and)
var bombaTrovata = false;

while(numeriInseriti.length < (numerimassimi - numeroBombe) && bombaTrovata == false) {
    var numero = parseInt(prompt('Inserisci un numero da 1 a 100'));

    // Con una variabile flag verificare se il numero inserito è presente nell'array numeriBomba, se è una bomba cambiare la variabile flag altrimenti fare push
}
