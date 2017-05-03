/* ----------------------------------------------
        Les Selecteurs d'enfant jQuery(pretres)
------------------------------------------------*/


//-- initialisation de jquery
$(function(){
    //-- ici commence mon code jquery
    //-- les flemmards.js
    function l(e){
        console.log(e);
    }


// -- je souhaite selectionner toutes mes sections 
l($('section'));

// -- je souhaite selectionner mon header
l($('header'));

// -- je souhaite tous les éléments ( descendants direct (enfants)) qui sont dans "header"
l($('header').children());

// -- je souhaite parmis mes descendant direct , uniquement les éléments de ma navigation (ul).
l($('header').children('ul'));

// -- je souhaite recuperer tous les éléments "li de mon "ul"
l($('header').children('ul').find('li'));

// -- je souhaite recuperer uniquement le 2eme elements de mes "li"
l($('header').children('ul').find('li').eq(1));

//-- je souhaite connaitre le voisin immédiat de "header" ?
l($('header').next());
l($('header').next().next()); // -- le voisin du voisin

// --  LES PARENTS
l($('header').parent());
    
});
