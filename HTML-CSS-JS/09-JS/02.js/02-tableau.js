// -- déclarer un tableau numeerique
var monTableau = [];
var myArray = new Array;

// -- affecter des valeurs a un tableu numerique 
myArray[0] = "john";
myArray[1] = "rudy";
myArray[2] = "teva";
myArray[3] = "carole";

// -- afficher le contenu de mon tableau numerique dans la console.

console.log(myArray[2]); //--teva
console.log(myArray[0]); //--john
console.log(myArray); // affiche toutes les données

// -- déclarer et affecter des valeurs a un tableau numerique 

var nosPrenoms = ["nabila", "karim", "johrdane", "hanane"]
console.log(nosPrenoms);
console.log(typeof nosPrenoms);

//-- declarer et aaffecter des valeurs a un objet (pas de tableau associatif en js)

var coordonnee = {
    "prenom"  :  "hugo",
    "nom"     :  "liegeard",
    "age"     :  27 ,
}

console.log(coordonnee);
console.log(typeof coordonnee);

// -- comment créer et affecter des valeurs a un tableau de 2 dimensions.

//-- ici , il s'agit de tableaux numeriques
var listedenoms = ["LIEGEARD", "NOUEL", "ISOLA"];
var listedeprenom = ["hugo", "rodrigue", "patrick"];

//-- je vais créer un tableau a 2 dimensions a partir de mes 2 tableaux précédents
var annuaires = [listedeprenoms , listedenoms],
console.log(annuaires);
// afficher un nom et un prenom sur ma page html !

document.write(annuaires[0][1]);
document.write(" ");
document.write(annuaires[1][1]);


/* Exercice : 

créez un tableau a 2 dimensions appelé annuairedesstagiaires qui contiendra toutes les coordonnées pour chaque stagiaires .
ex: nom,prenom,tel. */

var annuairesdesstagiaires = [
    {"nom" : "natchitz" , "prenom" : "teva" , "tel" : "0662658595"},
    {"nom" : "bergheaud" , "prenom" : "charles" , "tel" : "0648859745"},
    {"nom" : "maidi" , "prenom" : "nabilla" , "tel" : "0154236654"},
    {"nom" : "ambert" , "prenom" : "carole" , "tel" : "0154698595"},
]

var noms = ["natchitz", "bergheaud", "maidi", "ambert"];
var prenoms = ["teva", "charles", "nabilla", "carole"];
var tel = ["0662658595", "0648859745","0154236654","0154698595"];

var annuairesdesstagiaires =[listedeprenoms , listedenoms , listedenumeros];


/* -----------------
AJOUTER UN ELEMENT
--------------------*/

var couleurs = ['bleu','jaune','rouge','vert'];

//-- si je souhaite ajouter un element dans mon tableau.
//-- je fait appel a la fonction push() qui me renvoi le nombre d'elements de mon tableau.

//-- NB : la fontction unshift() permet d'ajouter un ou plusieurs elements en debut de tableau.

couleurs.push("rouge");
console.log(couleurs);
console.log(nombreselementsdemontableau);

/*--------------------------
RECUPERER ET SORTIR LE DERNIER ELEMENT
-----------------------------------*/

// -- la fonction pop() me permet de supprimer le dernier element de mon tableu et d'en recuperer la valeur .

//-- je peux accesoirement recuperer cette valeur dans une variable.

var mondernierelement = couleur.pop();

//-- la meme chose est possible avec le premier element en utilisant la fonction shift();

//-- NB: la fonction splice() vous permet de faire sortir un ou plusieurs elements de votre tableau.


/* exemple 3d */

var contacts = [
    {
        "prenom" : "hugo",
        "nom" : "liegeard",
        "coordonnee" : {
                        "email"  : "wf3-media@hotmail.fr",
                        "tel"     : {
                            "fixe" : "01415154588",
                            "fax"  : "04165161351",
                            "port" : "56146464615",
                        },
                        "adresse" : {
                            
                        }
        }
    }
]
