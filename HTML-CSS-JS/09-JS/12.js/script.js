/* -------------------------------------------------|
-----------------------Le Dom-----------------------
----------------------------------------------------
Le Dom , est une interface de developpement en js 
, pour HTML.Grace au Dom je vais etre en mesure
d'acceder ou encore de modifié mon html.

L'objet "document" : c'est le point d'entrée vers 
mon contenu HTML!

Chaque page chargée dans mon navigateur a un objet 
"document"

----------------------------------------------------*/

// Allons faire un tour dans notre HTML.
/* de retour dans notr JS : comment puis-je faire pour recuperer 
les diffenrentes informations de ma page html?*/

/* -------------------------------------------------|
--------------document.getElementsById---------------
----------------------------------------------------

document.getElementsbyId() : c'est une fonction qui va 
permettre de recuperer un élément HTML a partir de son 
identifiant unique : ID.*/

var bonjour = document.getElementById("bonjour");
console.log(bonjour); // <p id="bonjour">Paragraphe</p>

/* -------------------------------------------------|
----------document.getElementsByClassName------------
----------------------------------------------------

document.getElementsbyClassName() : c'est une fonction qui va 
permettre de recuperer un ou plusieurs élément(une liste) HTML 
a partir de leur classe.*/

var contenu = document.getElementsByClassName("contenu");
console.log(contenu);
/* me renvoi : un tableau JS avec mes éléments HTML , ou 
encore autrement dit , une collection d'elements HTML.


/* -------------------------------------------------|
----------document.getElementsByTagName------------
----------------------------------------------------

document.getElementsbyTagName() : c'est une fonction qui va 
permettre de recuperer un ou plusieurs élément(une liste) HTML 
a partir de leur * nom de balise */

var span = document.getElementsByTagName("span");
console.log(span);










