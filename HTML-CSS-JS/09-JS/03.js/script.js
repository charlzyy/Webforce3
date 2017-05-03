/* ---------------------
    LA CONCATENATION    
------------------------*/

var DebutDePhrase       = "Aujourd'hui ";
var DateDuJour          = new Date();
var SuiteDePhrase       = ", sont présents : ";
var NombreDeStagiaires  = 11;
var FinDePhrase         = " stagiaires.<br>";

// -- Nous souhaitons maintenant , grace a la concatenation , afficher tout ce petit monde , en un seul morceau !

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaires + FinDePhrase);

/*----------------------------------------------------------
                        EXERCICES
    créez une concatenation a partir des elements suivants :
------------------------------------------------------------*/

var phrase1 = "je m'appelle ";
var phrase2 = "charles et j'ai ";
var age     = 22;
var phrase3 = " ans !";

document.write( phrase1 + phrase2 + age + phrase3);