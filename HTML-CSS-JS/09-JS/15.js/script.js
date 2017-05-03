    
    
var membres = [
          {'pseudo':'Hugo',     'age':26,   'email':'wf3@hl-media.fr',      'mdp':'wf3'},
          {'pseudo':'Rodrigue', 'age':56,   'email':'rodrigue@hl-media.fr', 'mdp':'roro'},
          {'pseudo':'James',    'age':78,   'email':'james@hl-media.fr',    'mdp':'james8862'},
          {'pseudo':'Emilio',   'age':18,   'email':'milio@hl-media.fr',    'mdp':'milioDu62'}
        ];

        // -- Vérifier le tableau de membres
        console.log(membres);

        // -- Initialisation des Variables
        var NombreDeMembres = membres.length;
        var MajoriteLegaleSite = 18;

        // -- Récupération des différents éléments
        var pseudo      = document.getElementById("pseudo");
        var submit      = document.getElementById("submit");
        var Bienvenue   = document.getElementById("Bienvenue");
        var age         = document.getElementById("age");
        var form        = document.getElementById("form");
        var email       = document.getElementById("email");
        var mdp         = document.getElementById("mdp");
        
        // --
        var pseudoError = document.getElementsByClassName("pseudoError")[0];
        var ageError    = document.getElementsByClassName("ageError")[0];
        

        // -- ETAPE 1 & 3
        pseudo.addEventListener("keyup", function() {

            // -- Je vérifie que l'évènement se déclenche correctement.
            console.log(pseudo.value);

            // -- A. Parcourir mon tableau de membre
            for(i = 0 ; i < NombreDeMembres ; i++) {
                
                //console.log(membres[i].pseudo);
                //console.log("---");

                // -- B. Si la saisie d'un pseudo en cours par mon utilisateur, correspond à un pseudo dans mon tableau de membres, alors ma condition s'applique.

                // -- NB : La boucle vérifie la saisie de mon utilisateur pour tous les membres du tableau.

                if(pseudo.value == membres[i].pseudo) {
                    
                    // -- C. Ici, je doit déclencher des alertes parce que le pseudo saisi par mon utilisateur est déjà présent dans mon tableau de membres.
                    pseudoError.style.display = "block";
                    submit.disabled = true;
                    Bienvenue.textContent = "";
                    // --
                    break;

                } else {
                    pseudoError.style.display = "none";
                    submit.disabled = false;
                    // --
                    Bienvenue.textContent = "Bienvenue " + pseudo.value + " !";
                }

            }
        });
            

                    /*  ETAPE 2 */

age.addEventListener("change" , function(){
  if(age.value < MajoriteLegaleSite) {
    ageError.style.display = "block"; 
    submit.disabled = true;
  } else {
      ageError.style.display = "none";
    submit.disabled = false ;
  }
});

                    /* ETAPE 4 */


form.addEventListener("submit", function(e){
    //-- arreter l'action par defaut du submit
    //-- bloquer la redirection de la page
    e.preventDefault();
});

//-- créer un objet qui contiendra les informations de mon membre qui souhaite s'inscrire .

    var membre = {};
membre.pseudo = pseudo.value;
membre.age = age.value;
membre.email = email.value;
membre.mdp = mdp.value;

// -- ajotue le membre au membres
membres.push(membre);

//-- je met a jour le nombres de membres du tableau
NombreDeMembres = membres.length;

// etape 4b

function executeList (){
    var p = document.createElement("p");
    p.innerHTML = "merci " + pseudo.value + "!<br><strong> tu es maintenant inscrit . </strong><br><br><u> Voici la liste de nos membres </u>";
    
    document.body.appendChild(p);
    
    //-- generer ma liste de membre 
    var ul = document.createElement("ul");
    for(i = 0 ; i <NombreDeMembres ; i++){
        
        //-- a chaque iteration de ma boucle , je créer un élément li avec le pseudo et l'age de mon membre puis je l'integre dans le ul.
        var li = document.createElement("li");
        var liste = membres[i].pseudo + " : " + membres[i].age + "ans";
        li.textContent = liste;
        ul.appendChild(li);
    }
}

//-- a la fin de ma boucle , tous les li ont ete crée . je peux maintenant envoyer mon ul pour affichage 
document.body.appendChild(ul);





    



     /*-- 
        CONSIGNE : 

Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.

---------

ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.

Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.

A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.

---------

ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.

Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.

Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.

---------

ETAPE 3 : 
   
Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.
  
---------
  
  ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.
  
  En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :
  
      A. L'ajout de l'utilisateur dans le tableau.
      B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.
      
      Ex. Merci Hugo ! Tu es maintenant inscrit.
      Voici la liste de nos Membres :
      
          Hugo : 26ans
          Rodrigue : 56ans
          ...
          
      NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.

    --> */



