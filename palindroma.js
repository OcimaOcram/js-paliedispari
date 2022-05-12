let parola = prompt("inserisci parola");
let parolaInversa;
console.log(parola);

function testPalidromo () {
    let parolaSplit = parola.split('');
    console.log(parolaSplit)
    let invertimento = parolaSplit.reverse();
    console.log(invertimento);
    parolaInversa = invertimento.join('')
    console.log(parolaInversa);
    if (parolaInversa === parola) {
        console.log("la tua parola è palindroma")
    } else {
        console.log("la tua parola non è palindroma");
    }
    return parolaInversa;
}

testPalidromo();


