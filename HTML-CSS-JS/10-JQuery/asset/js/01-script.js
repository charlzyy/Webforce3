/* -----------------------
    Disponibilité du dom
-------------------------*/

/* 

DOM : ensemble de l'arborescence(de ma page)

a partir du moment ou mon DOM est chargé 
c'est a dire l'ensemble de l'arborescence de ma
page est completement chargé , je peux commencer
a utiliser jQuery.

Pour commencer a utiliser jquery , je vais 
mettre l'ensemble de mon code dans une 
fonction.

Cette fonction est appelé AUTOMATIQUEMENT par Jquery lorsque le DOM est entierement defini.


Il y a 3 facons de faire : */

jQuery(document).ready(function(){
    //ici , le dom est entierement chargé , je peux proceder a mon code JS.
});

// -- 2eme possibilité

$(document).ready(function(){
    //ici , le dom est entierement chargé , je peux proceder a mon code JS.
});

// -- 3eme possibilité , sans le (document).ready

$(function(){
    //ici , le dom est entierement chargé , je peux proceder a mon code JS.
    alert("Hello World !");
    
    //-- en jquery:
    $("#TexteEnJQuery").html("Mon texte en JQ");
    
    //-- en JS:
    document.getElementById("TexteEnJQuery").innerHTML= " mon texte en js";
});