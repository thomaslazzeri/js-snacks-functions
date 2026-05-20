/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterLetters(arr, letter) {
    const filterNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) {
            filterNames.push(arr[i]);
        }
    }
    return filterNames;
}
console.log(filterLetters(names, "A"));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// Esercizio con arrow function
const filterLetters2 = (arr, letter) => {
    const filterNames2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === letter) {
            filterNames2.push(arr[i]);
        }
    }
    return filterNames2;
}
console.log(filterLetters2(names, "A"));