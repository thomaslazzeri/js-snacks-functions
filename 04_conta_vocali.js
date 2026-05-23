/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numberVocals(str) {
    let count = 0;
    const vowels = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
            vowels.push(str[i]);
        }
    }
    return vowels;
}
// Invoca la funzione qui e stampa il risultato in console
const pippo = numberVocals(word);
console.log(pippo.length, pippo);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// Esercizio con arrow function
const numberVocals2 = (str) => {
    let count = 0;
    const vowels = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
            vowels.push(str[i]);
        }
    }
    return vowels;
}
const pippo2 = numberVocals2(word);
console.log(pippo2.length, pippo2);