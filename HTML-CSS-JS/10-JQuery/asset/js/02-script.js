/* -------------------------
    Les Selecteurs jQuery
---------------------------*/

// -- Format : $('selecteur)
// -- En jQuery , tous les sélecteurs CSS sont disponibles...

$(function(){
  // -- les flemards.js
  function l(e){
    console.log(e);
    }
    // -- selectionner les balises span : 
    
        //-- version en Javascript :
        l("SPAN via js")
        l(document.getElementsByTagName('span'));
    
        // -- version en JQuery
        l("SPAN via JQ")
        l($("span"));

    //-- sélectionner mon menu
    
        // -- version en Javascript :
        l("ID via JS :")
        l(document.getElementById("menu"))
    
        // -- version en JQuery
        l("ID via JQ")
        l($("#menu"));
    
     //-- sélectionner une classe
    
        // -- version en Javascript :
        l("classe via js :")
        l(document.getElementsByClassName("MaClasse"))
    
        // -- version en JQuery
        l("classe via JQ")
        l($(".MaClasse"));
    
    //-- sélectionner un attribut
    
        l('par attribut :')
        l($("[href='http://www.google.fr']"))
        l($("[href]"))
    
    
    /*remarquez que jquery me permet de sélectionner des éléments 
    de facon beaucoup plus simple que javascript.*/
        
});