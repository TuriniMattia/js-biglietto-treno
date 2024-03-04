// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

// 1-verificare eta del passeggero
    let customersAge = prompt("Inserisci l'età") //string
// 2-verificare numero di kilometri
    let customersKm = prompt("Inserisci km tratta") //string
// 3-calcolare prezzo del biglietto in base ai km (0,21 euro/km)
    let ticketCost = (customersKm * 0,21)
    ticketCost.toFixed(2);
    console.log("Total:", ticketCost)
    
// 4-SE (IF) età passeggero < 18 === sconto 20%
    
// 5-ALTRIMENTI SE (EVEN IF) età  del passeggero > 65 === sconto 40%
// 6-ALtrimenti età passeggero età passeggero >= 18 e <65 prezzo pieno