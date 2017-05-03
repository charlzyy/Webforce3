// -- initialisation de jquery
$(function(){
    // -- déclaration de variables
    var contact = [];


/*-------------------------------------------------------------------
                    Déclaration des Fonctions
-------------------------------------------------------------------*/
// -- fonction ajoutercontact(): ajouter un contact dans le tableau des contact.
    // Puis mettre a jour le tableau HTML , reinitialisé le formulaire et affiché une notification.
    function ajoutercontact(contact) {
        
    }
    
    // -- fonction réinitialisationDuFormulaire():apres l'ajout d'un contact , on remet le formulaire a 0 !
    function reinitialisationDuFormulaire(){
        
    }
    
    //-- generation d'une notification 
    function AfficheUneNotification(){
        
    }
    
    // -- verification de la presence d'un contact dans contact
    function EstCeQunContactEstPresent(contact){
        
    }
    
    //  -- verification de la validité d'un email
    function ValidateEmail(email) {
        
    }
    
    function validateEmail(email){
	    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	    var valid = emailReg.test(email);

	       if(!valid) {
            return false;
            }else {
    	   return true;
            }
        }
    /* ------------------------------------------
    |        traitement de mon formulaire
    --------------------------------------------*/
    
    // -- detection de la soumission de mon formulaire
     $('#contact').on('submit', function(a){
    
        // -- arret de la propagation du submit
         
         a.preventDefault();
         
        // -- récuperation des champs a verifier
         var nom, prenom, email, tel;
            nom = $('#nom');
            prenom = $('#prenom');
            email = $('#email');
            telephone = $('#tel');
         
        // -- verification des informations
         var mesInformationsSontValides = true;
            // -- verification du nom
         if(nom.val().length == 0) {
            mesInformationsSontValides = false;
         }
            // -- verification du prenom
         if(prenom.val().length == 0) {
            mesInformationsSontValides = false;
         }
            // -- verification du téléphone
         if(tel.val().length == 0) {
            mesInformationsSontValides = false;
         }
            // -- verification de l'email
        if(!validateEmail(email.val())){
            mesInformationsSontValides = false;
        }
        
        if(mesInformationsSontValides) {
            var contact = {
                'nom'   : nom.val(),
                'prenom': prenom.val(),
                'email' : email.val(),
                'tel'   : tel.val(),
            }
            
            // --
            
            
        }else {
             alert("Attention \nVeuillez bien remplir tous les champs manquant.")
        }
         
 
        });
  
});