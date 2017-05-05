
// -- initialisation de jQuery

$(function(){
   
    // -- ecouter a quel moment est soumi notre formulaire
    // -- a la soumission de mon formulaire ,je vais executer ma fonction anonyme ci-dessous pour ecouter l'evenement.
    $('#contact').on('submit', function(event){
        // -- Event : correspond a notre evenement submit
        // -- arreter la propagation du submit (redirection)
        event.preventDefault();
        
        // -- reinitialisation des erreurs 
        // -- je cible tout les elements qui contiennent la classe "has-error" puis je supprime la classe "has-error" pour tout les élément qui ont cette classe.
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert').remove();
        // -- déclaration des variables (champs a verifier).
         var nom, prenom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');
        
        // -- maintenant je passe a la verification de chaque champs..
        
            // -- 1. verification du nom
            if(nom.val().length == 0) {
                // -- si le champs "nom" est vide , alors j'ajoute a son parent , la classe has-error
                nom.parent().addClass('has-error');
                // -- et je rajoute une indication texte.
                // -- je rajoute a l'element "p" une classe text-danger et saisit directement le texte a l'interieur de ma parenthese puis je cible son parent.
                $("<p class='text-danger'>N'oubliez pas de saisir votre nom </p>").appendTo(nom.parent());
            }
        
            // -- 2. verification du prenom
            if(prenom.val().length == 0){
                nom.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre prenom </p>").appendTo(prenom.parent());
            }
        
            // -- 3. verification de l'email
            function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
            var valid = emailReg.test(email);

            if(!valid) {
                return false;
            } else {
                return true;
            }
            }
            if(email.val().length == 0){
                email.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre email </p>").appendTo(email.parent());
            }
        c
            // -- 4. verification du tel
            if(tel.val().length == 0 || $.isNumeric(tel.val()) == false){
                tel.parent().addClass('has-error');
                $("<p class='text-danger'>N'oubliez pas de saisir votre telephone </p>").appendTo(tel.parent());
            }
        
        // -- je recherche dans mon formulaire #contact s'il y a des élements qui ont pour classe : 'has-error'. s'il n'y a pas d'éléments , c'est a dire length == 0 alors je procede a la validation , sinon j'affiche une notification.
        if($(this).find('.has-error').length == 0){
            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! nous vous répondrons dans les meuilleurs délais.</div>');
        } else {
            $(this).prepend("<div class='alert alert-danger'>Nous n'avons pas été en mesure de valider votre demande. Vérifiez vos informations. </div>");
        }
            

    });
});