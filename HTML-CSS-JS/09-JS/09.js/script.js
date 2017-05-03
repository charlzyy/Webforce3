/* Les Boucles */

// -- la Boucle FOR

// --pour i = 1 ; tant que i<= (strictement inferieur ou egale) 10; alors , j'incremente i de +1;

/*
for(var i = 1 , i <=10 ; i++){
    document.write("<p>instruction executée :<strong>" + i + "</strong></p>")
}
*/
/*
// -- subtilité 
var i = 40;
i++ // affiche 40(est a 40 car l'incrementation+1 ce fait apres le i donc apres le console.log)
++i // affiche 41 (affiche directement le resultat)

// -- la boucle while : tant que 
*/
/*
var j = 1;
while(j <= 10) {
    document.write("<p> instruction executée : <strong>" + j + "</strong</p>")
    j++;
} */

/* exercice ---------*/

// -- supposons , le tableau suivant : 
var Prenoms = ['hugo', 'jean', 'mathieu', 'luc', 'pierre' ,'marc'];

// -- consigne : grace a une boucle FOR , afficher la liste des prenoms du tableau suivants dans la console ou sur votre page.


//--Premiere facon de faire
for(var i = 0 ; i <6 ; i++){
    console.log(Prenoms[i]);
    document.write("<p><strong>" + Prenoms + "</strong></p>")
}


//-- deuxieme facon de faire avec "length"
var NbElementsDansMonTableau = Prenoms.length;
for(var i = 0 ; i < NbElementsDansMonTableau ; i++) {
    console.log(Prenoms[i]);
}

// -- boucle while 
var j = 0;
while(j < Prenoms.length){
    console.log(Prenoms[j]);
    j++;
}

// -- autre facon de parcourir mon tableau
// -- attention ici a la performance

Prenoms.forEACH(affichePrenoms);

function affichePrenoms (Prenom, index) {
    console.log(prenom);
}




