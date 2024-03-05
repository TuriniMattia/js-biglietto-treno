// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

// 1-verificare eta del passeggero
    let customersAge = parseFloat(prompt("Inserisci l'età"))//string
    console.log("età", customersAge)
// 2-verificare numero di kilometri
    let customersKm = parseFloat(prompt("Inserisci km tratta"))
    console.log("tratta", customersKm) //string
// 3-calcolare prezzo del biglietto in base ai km (0,21 euro/km)
    let ticketCost = customersKm * 0.21
    console.log("Totale:", ticketCost)
    ticketCost
    
// 4-SE (IF) età passeggero < 18 === sconto 20%
    if(customersAge < 18){
        sconto = ticketCost - (ticketCost * 0.2)
    }
    
// 5-ALTRIMENTI SE (EVEN IF) età  del passeggero > 65 === sconto 40%
    else if(customersAge > 65){
        sconto = ticketCost - (ticketCost * 0,4) 
    }
// 6-ALtrimenti età passeggero età passeggero >= 18 e <65 prezzo pieno