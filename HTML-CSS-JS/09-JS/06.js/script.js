/* ------------------------------------
LES FONCTIONS
-------------------------------------*/

// -- déclarer une fonction 
// -- cette fonction ne retourne aucune valeur
function DitBonjour(){
    // -- lors de l'appel de la fonction , les instructions ci-dessous seront executées.
    alert("bonjour !");
}

DitBonjour();

// -- déclarer une fonction qui prend une variable en parametre 

function Bonjour(prenom){
    //-- ici prenom est une variable a portée locale . cette variable ne sera accessible que dans cette fonction!
    document.write("<p>Hello <strong>" + prenom + "</strong> ! </p>");
    
}

//-- appeler , utiliser une fonctio navec un parametre 
Bonjour("hugo");

/* ---------------------------------
exercice :
creez une fonction permettant d'effecture l'addition de deux nombres passés en parametre.
---------------------------------------------*/

function addition (nb1 , nb2) {
    // -- le mot clé "return" permet de renvoyer une valeur de sortie
    var resultat = nb1 + nb2;
    return resultat;
}

var resultat = addition(10 , 5);
document.write("<p>" + resultat + "</p>");