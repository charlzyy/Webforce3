/* -------------------------
    le chainage de methodes
---------------------------*/


$(function(){
    // -- je souhaite cacher toutes les div de ma page HTML
    $('div').hide('slow', function(){
        // -- une fois que la methode hide() est terminée , mon alerte peux s'executer.
        alert('fin du HIDE');
        
        // -- nota bene : la fonction s'executera pour l'ensemble des éléments du selecteur.
        $('div').css("background","yellow");
        $('div').css("color","red");
        
        // -- je fait réapparaitre mes DIV
        $('div').show();
        
        // -- en utilisant le chainage de méthode , vous pouvez faire s'enchainer plusieurs fonctions les unes apres les autres, ...
        $('p').hide(2000).css('color','blue').css('font-size','20px').delay(2000).show(500);
        
        // -- Mais , c'est encore trop long !!!!!!!!!!!!!!
        $('p').hide().css({'color':'blue','font-size':'20px'}).delay(2000).show();
        
    });
    
});