// -- 1 : attente que le dom soit chargé

$(function(){
   //-- 2 : attaché l'événement "submit" du formulaire
    $('#monFormulaire').on('submit', function(a){
        //-- 3: stopper l'envoie du formulaire
        a.preventDefault();
        //-- 4: recuperation des informations 
            fullname = $('#fullname').val()
            email = $('#email').val()
            tel = $('#tel').val()
            sujet = $('#sujet').val()
            message = $('#message').val()
        //-- 5:
        $(this).replaceWith('<p> bonjour <strong> ' + fullname + "</strong><em>(" + email + ") </em><br><br> vous nous avez contacté au sujet de : <strong> " + sujet + "</strong>.<br> nous reviendrons vers vous dans les plus bref delais au <strong>" tel + "</strong>. <br><br><u> ci dessous votre message : </u><br>" + message +' !</p>' );
    });
});
