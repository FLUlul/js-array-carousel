/* Consegna: Dati tre array contenenti: - una lista ordinata di 5 immagini, - una lista ordinata dei relativi 5 luoghi e - una lista di 5 news, creare un carosello come nella foto allegata.

Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi - titolo e - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

BONUS: Aggiungere il ciclo infinito del carosello.
Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso. */

const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


/*  -creo le due costanti relative ai contenitori di immagini e thumbnails
    -creo le due variabili con una stringa vuota
    -vado a creare con un ciclo
        - il pattern di html assegnandolo alle variabili con la stringa vuota per tot volte la durata degli elementi arrey
        -ad ogni elemento assegno l'indice degli array che gia ho
    -vado a stampare gli elementi nei contenitori
    -se clicco il pulsante next
        rimuovo dalla prima immagine la classe active
        aggiungo alla prossima immagine la classe active

        rimuovo alla prima thumb la classe active
        aggiungo alla prossima thumb la classe active
*/

const imagesMain = document.querySelector(".images");
const thumbsMain = document.querySelector(".thumbs");
const next = document.querySelector(".next");
const back = document.querySelector(".back");


let image = "";
let thumb = "";

for(i=0; i < items.length; i++){

    image += `
    <div class="image">

        <img src="${items[i]}" alt="${title[i]}">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>

    </div>`;

    thumb += `
    <div class="thumb">

        <img src="${items[i]}" alt="${title[i]}">

    </div>`

}

imagesMain.innerHTML = image;
document.getElementsByClassName("image")[0].classList.add("active");

thumbsMain.innerHTML = thumb;
document.getElementsByClassName("thumb")[0].classList.add("active");

let xn=0;

next.addEventListener("click",

    function(){   

        xn++;

        if(xn > 4 ) {
            xn=0;
        }

        // rimuovo la classe active dall'elemento (al momento iniziale solo da quello statico)
        document.querySelector(".image.active").classList.remove("active") 
         
        // aggiungo alla classe image all'indice "xn" dell'arrayClasse la classe active
        document.getElementsByClassName("image")[xn].classList.add("active");


        document.querySelector(".thumb.active").classList.remove("active")
        document.getElementsByClassName("thumb")[xn].classList.add("active");


    }

);

back.addEventListener("click",

    function(){   

        xn--;

        if(xn < 0 ) {
            xn=4;
        }

        document.querySelector(".image.active").classList.remove("active")
        document.getElementsByClassName("image")[xn].classList.add("active");


        document.querySelector(".thumb.active").classList.remove("active")
        document.getElementsByClassName("thumb")[xn].classList.add("active");


    }

);