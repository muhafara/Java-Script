
/*============================================================
Function for windows alert
======================================================*/
function windows_Alert_Function(){
    var my_Windows_Alert = "Hey, I,m using windows.Alert here....!";
    window.alert(my_Windows_Alert);
    var result;
    document.getElementsByClassName("windows_Alert_Function").innerHtml = result;
}


/*============================================================
String concatenation
======================================================*/
var my_String_one = "hello, I'm";
var my_String_two = " concatenating two string";
var result_Of_Concatenation = my_String_one + my_String_two;

/*============================================================
Changing font color of a concatenate string
======================================================*/
result_Of_Concatenation = result_Of_Concatenation.fontcolor("red");

/*============================================================
document.write()
======================================================*/

document.write(result_Of_Concatenation);

/*============================================================
Variable Assignment
======================================================*/
function variableAssignment(){
    var A = "This is a string";
    document.write(A);
}


/*============================================================
using backslash with string to shoe special character
======================================================*/
function backslash(){
    var A = "PM minister said; \"Every one should get vacinated\" before this year";
    document.write(A);
}

/*============================================================
Multiple Variable / varable font colour
======================================================*/
function multipleVar(){
    var A = "Car", B = "Bus", C = "Motorbike", D= "Cycle";
    B = B.fontcolor("blue");
    document.write("One of the variable from multiple  "+B);
}

/*============================================================
Writing an expresiion
======================================================*/
function writingExpression(){
    document.write("tHE RESULT OF AN EXPRESSION IS  "+3 + 3* 3)
}







