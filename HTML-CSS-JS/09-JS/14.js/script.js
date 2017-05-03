/*-----------------------------------------
-------------Les Evenements----------------
------------------------------------------*/

/* Les evenements , vont me permettre de declencher une fonction ,
c'est a dire : une serie d'instruction , suite a une action de
mon utilisateur.

Objectif : etre en mesure de capturer ces evenements , afin d'executer
une fonction .*/

//-- les evenements : mouse (souris)

    // click : au clic sur un element
    // mouseenter : la souris passe au dessus de la zone qu'occupe un element.
    // mouseleave : la souris sort de cette zone

//-- les evenements : KEYBOARD (clavier)

    //keydown : une touche du clavier est enfoncée
    //keyup : une touche a été relachée

//--les evenements : WINDOW (fenetre)

    //scroll : défilement de la fenetre
    //resize : redimensionnement de la fenetre

//--les evenements : form (formulaire)

    //change: pour les element <input>, <select> et <textarea>
    // submit : a l'envoie d'un formulaire

//--Les evenements : DOCUMENT

    //DOMContentLoaded : executé lorsque le document html est completement chargé sans attendre le css et les images .

/* --------------------------------------
---------LES ECOUTEURS DEVENEMENT--------
-----------------------------------------*/

/* pour attacher un evenement a un element , ou autrement dit , pour declarer un ecouteur 
d'evenement qui se chargera de lancer une action , c'est a dire une fonction pour un 
evenement donnée , je vais utiliser la synthaxe suivante :*/

var p = document.getElementById("monParagraphe");
console.log(p);

//-- je souhaite que mon paragraphe soit rouge au clic de la souris.

    //--1 : je defini une fonction chargée d'executer cette action.
function changeColorToRed(){
    p.style.color = "red";
}

    //--2 : je declare un écouteur qui se chargera d'appeller la fonction au declenchement de l'evenement.
p.addEventListener("click", changeColorToRed);

/*---------------------------------
 EXERCICE PRATIQUE     
 
 a l'aide de javascript , créez un champ
 "input" type text avec un id unique. 
 affichez ensuite dans une alerte , la 
 saisie de l'utilisateur.
 
 ----------------------------------*/


//creation du champs input
var input = document.createElement("input");
// atribution d'un attribut
input.setAttribute('type','text');
//creation d'un ID
input.id = "monInput";
//ajout de l'élément dans la page
document.body.appendChild(input);

// creation d'un ecouteur

input.addEventListener('change', afficheLaSaisieDeMonInput);

function afficheLaSaisieDeMonInput() {
    alert(input.value);
}



