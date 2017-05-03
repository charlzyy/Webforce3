/* ------------------------------
------LES CONDITIONS-------------
--------------------------------*/

/*var MajoriteLegaleFR = 18;

if(MajoriteLegaleFR >= 19) {
    alert("bienvenu !");
} else {
    alert("google ...");
}*/

/* exercice 
créer une fonction permettant de verifier l'age d'un visiteur . s'il a la majorité legale , alors je lui souhaite la bienvenue , sinon , je fais une redirection sur google apres lui avoir signalé le soucis . */

//1 -- declarer la majorité légale 
var MajoriteLegaleFR = 18;


//2 -- créer une fonction pour demander son age
function VerifierAge() {
    // -- demande l'age de mon visiteur et le retourner.
    return parseInt(prompt("bonjour, quel age avec-vous ?","<saisissez votre age>"));
}


//3 -- une condition pour verifier si l'age de l'utilisatieur est superieur oou egale a la majoritéFR

if(VerifierAge() >= MajoriteLegaleFR) {
    //-- j'affiche un message de bienvenu
    alert("bienvenu sur mon site internet pour les majeurs...");
} else {
    //-- j'affiche une alerte
    alert("Attention !!! vous devez etre majeur pour acceder a ce site !");
}