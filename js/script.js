/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo due caselle di input e almeno un bottone per inviare i dati in pagina, in cui l’utente potrà inserire i dati e poi visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

/*
function getRndNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

//Button per calcolo
const btnCalc = document.getElementById('calcola');
console.dir(btnCalc);

//Button per cancellare
const btnCanc = document.getElementById('cancella');
console.dir(btnCanc);

const userInput = document.getElementById('username');
const kmInput = document.getElementById('distance');
const ageInput = document.getElementById('age');
const ticket = document.getElementById('ticket')

btnCalc.addEventListener('click',
    function () {
        resetTicket()
        const priceKm = 0.21;
        const juniorDiscount = 0.20;
        const seniorDiscount = 0.40;
        const carrozza = getRndNumber(1, 9);
        const codiceP = getRndNumber(11111, 99999);
        let discount = 0;

        const userName = userInput.value.trim;
        const km = paseInt(kmInput.value);
        const ageRange = ageInput.value;

        if (!(km && userName)) {
            document.querySelector('.alert').classList.remove('d-none');
            return;
        }

        const basePrice = km * priceKm;

        switch (ageRange) {
            case 'minorenne':
                discount = basePrice * juniorDiscount
                break;
            case 'over65':
                discount = basePrice * seniorDiscount;
                break;
            default:
                discount = 0;
        }
        console.log(discount);
        const finalPrice = basePrice - (basePrice * discount);
        ticket.innerHTML = finalPrice.toFixed(2);
        ticket.classList.remove('d-none');
    });

function resetTicket() {
    document.querySelector('.alert').classList.remove('d-none');
    ticket.innerHTML = '';
    ticket.classList.add('d-none');
}

btnCanc.addEventListener('click',
    function () {
        userInput.value = '';
        kmInput.value = '';
        ageInput.value = '';
        resetTicket();
    });