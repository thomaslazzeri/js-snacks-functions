/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greeting(person) {
    const hour = 0;
    if (hour < 13) {
        return "Buongiorno " + person + ".";
    } else if (hour < 17) {
        return "Buon pomeriggio " + person + ".";
    } else {
        return "Buonasera " + person + ".";
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greeting(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

// Esercizio con arrow function
const greeting2 = (person) => {
    const hour2 = 0;
    if (hour2 < 13) {
        return "Buongiorno " + person + ".";
    }
    else if (hour2 < 17) {
        return "Buon pomeriggio " + person + ".";
    }
    else {
        return "Buonasera " + person + ".";
    }
}
console.log(greeting2(name));