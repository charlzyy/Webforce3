$(function(){
   // 1ere facon de faire
    $.ajax('http://geoip.nekudo.com/api/').done(function(resultat){
        console.log(resultat);
    });
        
        
    // 2eme facon de faire avec getJSON, JSONP et callback
        $.getJSON('http://ip-api.com/json/?callback=', function(resultat){
                  console.log(resultat);

                  
        
        
        // -- affichage sur ma page
        $('<p>Votre ip est surveillée :' + resultat.query + ' ' + resultat.isp + ' </p>').css(
        {'background':'yellow','color':'red'}).appendTo($('form'));
    });
});

/* consigne : avec l'aide de jQUERY, vous devrez :

1. définir une structure HTML5 & CSS3 pour afficher les articles.

2.afficher une liste d'articles a partir de l'api :
https://jsonplaceholder.typicode.com/posts

3. BONUS : afficher uniquement les 10 premiers articles.

4. BONUS : mettre en place markjs.io afin de surligner des mots dans les differents article a l'aide d'un champs input.*/