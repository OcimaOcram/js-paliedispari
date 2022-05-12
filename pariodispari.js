let numeroComputer;
let numeroUtente;
let sceltaGiocatore;
let somma;
function generareNum () {
    numeroComputer = Math.floor(Math.random() * 5) + 1; 
    console.log (numeroComputer);
    return numeroComputer;
}
function chiVince () {
    if (somma % 2 == 0 && sceltaGiocatore == "pari") {
        console.log(" hai vinto è uscito pari");
    } else if ( somma % 2 == 0 && sceltaGiocatore == "dispari") {
        console.log(" hai perso è uscito pari");
    } else if ( somma % 2 !== 0 && sceltaGiocatore == "pari") {
        console.log ("hai perso è uscito dispari");
    } else {
        console.log("hai vinto è uscito dispari");
    }
    return;
}
numeroUtente = parseInt(prompt ("scegli un numero da 1 a 5"));
console.log (numeroUtente);
sceltaGiocatore = prompt ("pari o dispari?") 
generareNum ();
somma = numeroUtente + numeroComputer;
console.log (somma);
chiVince ();