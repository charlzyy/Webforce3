$('#MonFormulaire').on('submit', function(e){
    // -- j'annule l'action du submit
    e.preventDefault();
    $(this).replacewith('<p> Bonjour' + $("#nomcomplet").val() + ' !</p>');
});
    
