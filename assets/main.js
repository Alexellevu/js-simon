

//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Un alert() espone 5 numeri generati casualmente.

function getrandom(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}


var numeriRandom = [];
for ( var i = 0; i < 5; i++){
numeriRandom.push(getrandom(1, 6));
alert(numeriRandom[i]);
console.log(numeriRandom[i]);
}


//Da li parte un timer di 30 secondi.
/* setTimeout(tempoiniziale, 2000);
    function tempoiniziale(){
        
    }
 */

