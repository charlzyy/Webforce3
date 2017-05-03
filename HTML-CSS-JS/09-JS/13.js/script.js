/* La Manipulation des Contenus */

function l(e){
    console.log(e);
}

// je souhaite recuperer mon lien ; comment proceder ?
var google = document.getElementById("google");
l(google);

// maintenant je souhaite acceder aux informations de ce lien, par exemple :

// --A : le lien vers lequel pointe la balise
l('le lien vers lequel pointe la balise');
l(google.href);

// --B : L'ID de la balise 
l('L/ID de la balise:');
l(google.id);

//--C : la classe de la balise
l('la classe de la balise:');
l(google.className);

//--D : le texte de la balise (l'élément)
l('le texte de la balise');
l(google.textContent);

// -- Maintenant , je souhaite modifier le contenu de mon lien
// -- comme une variable classique , je vais simplement venir affecter une nouvelle valeur.
google.textContent = "mon lien vers google";

/*--------------------------------------
     AJOUTER UN ELEMENT DANS MA PAGE
--------------------------------------*/

// -- nous allons utiliser 2 méthodes : 

//-- 1 : la fonction document.createElement() va permettre de generer un nouvel element dans le DOMM ; que je pourrais par la suite modifier avec les methodes que nous venons de voir .

// PS : ce nouvel élément est placé en mémoire.

// -- Définition de mon element
var span = document.createElement('span');

//-- si je souhaite lui donner un id
span.id = "monspan";

//-- s ije souhaite lui attribuer du contenu
span.textContent = "mon beau texte en JS";

//-- 2 : la fonction appendChild() va me permettre de rajouter un enfant a un élément du DOM.

google.appendChild(span);

/*-----------------------------------

EXERCICE

en partant du travail deja realisé sur la page 
créez directement dans la page une balise <h1></h1> ayant comme contenu : "titre de mon article".
Dans cette balise , vous créerez un lien vers une url de votre choix.

Bonus : ce lien sera de couleur rouge et non souligné.

---------------------------------------*/
//-- creation de la balise h1
var H1 = document.createElement('H1');
//-- creation de la balise a
var a = document.createElement("a");

//appendchild()
//-- je met mon lien(a) dans mon h1
H1.appendChild(a);

//-- je met mon h1 dans ma page, dans mon body
document.body.appendChild(H1);

//-- correction du bonus 
a.textContent = "titre de mon article";
a.href = "#";
//-- je veux que mon lien soit de couleur rouge et souligné
a.style.color = "red";
a.style.textDecoration = "none";


