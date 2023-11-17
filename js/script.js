// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca

// chiedo i km da percorrere
const userKm = parseInt(prompt("quanti km deve percorrere?"));
console.log(userKm);

// chiedo L'età del passeggero
const userEta = parseInt(prompt("quale è la tua età?"));
console.log(userEta);

// prezzo al km
const prezzoKm = (userKm * 0.21);
console.log(prezzoKm);

// calcolo in base all'età dell'user
if (userEta >= 18){
    sconto =  ((prezzoKm * 20) / 100);
    risultato = prezzoKm - sconto ;
    risultato = risultato.toFixed(2);
}else if (userEta >= 65){
    sconto = ((prezzoKm * 40) / 100);
    risultato = prezzoKm - sconto ;
    risultao = risultato.toFixed(2);
} else{
    risultato = (userKm * 0.21);
    risultao = risultato.toFixed(2);
}

console.log(risultato);

// risultato
document.getElementById("risultato").innerHTML = "il prezzo finale del tuo biglietto è: " + risultato + "€";