/* I. créer un tableau 3d "premier trimestre" contenant la moyenne d'un etudiant pour plusieur matieres.
nous auront donc pour un etudiant sa moyenne a plusieurs matieres.
Par exemple : Hugo liegeard : [francais : 12, math : 19, physique : 4.. etc]
vous allez creez au minimum 5 étudiants .

II afficher sur la page (a l'aide de document.write) pour chaque etudiant , la liste(ul et li) de sa moyenne a chaque matiere , puis sa moyenne generale. */


var listedeprenoms = ["hugo ","adrien ","patrick ","jean ","paul "];
var listedenoms = ["liegeard", "centonze", "isola", "isola", "deloclo"];

var PremierTrimestre = [
    {
        "prenom" : "Hugo",
        "nom" : "Liegeard",
        "moyenne" : {
            "francais" : "12",
            "math" : "14",
            "physique" : "16",
        }
    },
   



    {
        "prenom" : "adrien",
        "nom" : "centonze",
        "moyenne" : {
            "francais" : "15",
            "math" : "13",
            "physique" : "18",
        }
    },
   



    {
        "prenom" : "patrick",
        "nom" : "isola",
        "moyenne" : {
            "francais" : "10",
            "math" : "12",
            "physique" : "18",
        }
    },
   



    {
        "prenom" : "jean",
        "nom" : "isola",
        "moyenne" : {
            "francais" : "17",
            "math" : "14",
            "physique" : "11",
        }
    },
   



    {
        "prenom" : "paul",
        "nom" : "deloclo",
        "moyenne" : {
            "francais" : "19",
            "math" : "17",
            "physique" : "9",
        }
    }

]

document.write('<ol>')
// -- je souhaite afficher la liste de mes etudiants .
for(i = 0 ; i < PremierTrimestre.length ; i++) {
    
    var etudiant = PremierTrimestre[i];
    
    
    document.write("<li>")
        document.write(etudiant.prenom + " " + etudiant.nom);
    document.write("<ul>")
    for(var matiere in etudiant.moyenne){
        //1(etudiant.moyenne[matiere]);
        var NombreDeMatiere = 0, SommeDesNotes = 0;
        NombreDeMatiere++;
        SommeDesNotes += etudiant.moyenne[matiere];
        document.write("<li>")
            document.write(matiere + " : " + etudiant.moyenne[matiere]);
        document.write("</li>")
    }
    //-- affichage de la moyenne 
    document.write("<li>")
        document.write("<strong>Moyenne Générale : </strong> " + (Math.round(SommeDesNotes / NombreDeMatiere)));
    document.write("</li>")
    document.write("</ul>")
    document.write("</li>")
}
document.write('</ol>')    
     
    


