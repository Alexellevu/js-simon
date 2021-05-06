//Un alert() espone 5 numeri generati casualmente.

function getrandom(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}


var numeriRandom = [];
for ( var i = 0; i < 5; i++){
numeriRandom.push(getrandom(1, 6));
}
console.log(numeriRandom);
alert(numeriRandom);



//Da li parte un timer di 30 secondi.
 setTimeout(ricordaNumeri, 3000);
 //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        function ricordaNumeri(){
            var numeriUtente = [];
            for( var j = 0; j < 5; j++ )
            {
            numeriUtente.push(prompt('inserisci uno per volta i numeri visualizzati in precedenza'));
            var counter =0;
            var numIndovinati = [];
            if(numeriUtente.includes(numeriRandom[j])){
                counter++;
                numIndovinati.push(numeriUtente[j]);
            }
                
        }
            console.log(numIndovinati);
            console.log(counter);
            console.log(numeriUtente);
            return numeriUtente;
    }  
        

//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
