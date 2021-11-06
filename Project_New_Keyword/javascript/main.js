class Vehicle{ /*Defining a class*/

     Vehicle(Make, Model, Year, Color){ /*Constructor*/
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }

    /*creating an object using new keyword*/
     Jack = new Vehicle("MERCEDES", "A35", 2020, "RED");

 myFunction(){
    document.getElementById("keyandcon").innerHTML = "Jack Drives a " + Jack.Vehicle_Make    
     + " Model " + Jack.Vehicle_Model +" Year of Make "+ Jack.Vehicle_Year + "Colour "
    + Jack.Vehicle_Color;; 
 }

}


/*===================================================================
i'm getting this error 

Uncaught ReferenceError: myFunction is not defined
    at HTMLParagraphElement.onclick (index.html:10)
onclick @ index.html:10

my First question is:
whyen I create a class if I write function myFunction(){

} it gives an error 
Unexpected token. A constructor, method, accessor, or property was expected.ts(1068)

but if remove function keywords its work.

==========================================================*/
