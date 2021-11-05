/*===========================================================================
Animal Dictionary
============================================================================*/

function animal_Dictionary(){
    var Animal = {
        Goat : "herbivore" ,
        Bear : "Omnivour",
        Tiger : "carnivour",
    }
    document.getElementById("anm_Dic").innerHTML =  " Tiger is a " + Animal.Tiger + " animal";
}

/*===========================================================================
Animal Dictionary deleting entry
============================================================================*/
function animal_Dictionary_Del(){
    var Animal = {
        Goat : "herbivore" ,
        Bear : "Omnivour",
        Tiger : "carnivour",
        Cat : "carnivour"
    }
    delete Animal.Cat;
    document.getElementById("anm_Dic_del").innerHTML =  " Cat is an" + Animal.Cat + " animal";
}