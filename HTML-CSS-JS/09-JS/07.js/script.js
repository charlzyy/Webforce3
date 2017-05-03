/*   -saisir son prénom dans un prompt
-retourner a lutilisateur : bonjour hugo , quel age as tu ?
-saisir son age
-retourner a lutilisateur : tu est donc né en 1980
afficher ensuite un recapitulatif dans la page 
Bonjour hugo tu as 37 ans.  */


// 1 - initialisation des variables 
var DateDuJour = new Date();

// 2 - création de la fonction 
function Hello(){
    //2.a je demande a l'utilisateur son prénom 
    prenom = prompt("hello ! what is your name ?","<saisissez votre nom>");
    
    //2.b je lui demande son age
    age = parseInt(prompt("hello " + prenom + "! how old are you ?" , "<saisir votre age>" ));

    //2.c j'affiche une alert avec son année de naissance! 
    alert("AMAZING ! so you're born in " + (DateDuJour.getFullYear() - age) + "!"); 
    
    //2.d affichage dans ma page html
    document.write("hello " + prenom + "it's AMAZING ! you're " + age + "years old ! ")
    
}

   // 3- execution de ma fonction 

    Hello();
    
    
    




