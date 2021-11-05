/*================================================================================================
math function for addition
===============================================================================================*/
function math_Func(){
    var first_Number = 2;
    var second_NUmber = 5;
    var result = first_Number + second_NUmber;
    document.getElementById("Add").innerHTML = result;
}

/*================================================================================================
math function for substraction
===============================================================================================*/

function subs_Func(){
    var substraction = 5 -2;
    document.getElementById("Subs").innerHTML = "5 - 2 =" + substraction;
}

/*================================================================================================
math function for multilication
===============================================================================================*/

function mul_Func(){
    var mul = 4 * 6;
    document.getElementById("Multiply").innerHTML = "4 * 6 =  " + mul;
}

/*================================================================================================
math function for division
===============================================================================================*/

function div_Func(){
    var div = 48 / 6;
    document.getElementById("Division").innerHTML = "48 /* 6 =  " + div;
}

/*================================================================================================
math function for multile calculation
===============================================================================================*/

function multiple_Calculation(){
    var get_Result = 1 + 2 * 20 / 4;
    document.getElementById("mult_Cal").innerHTML = " Following DMAS rule of math " + get_Result;
}

/*================================================================================================
math function for modulus
===============================================================================================*/

function module_Operator(){
    var get_Modulus = 5 % 2;
    document.getElementById("mod_cal").innerHTML = " Remainder after  " + get_Modulus;
}

/*================================================================================================
math function for unary operator
===============================================================================================*/

function unary_Operator(){
    var get_Unary = 10;
    document.getElementById("una_cal").innerHTML = " Uninary operator  " + - get_Unary;
}

/*================================================================================================
math function for increment
===============================================================================================*/

function incr_Operator(){
    var get_Inc = 10;
    document.getElementById("inc_cal").innerHTML = " increment operator  " + ++ get_Inc;
}

/*================================================================================================
math function for decrement operator
===============================================================================================*/

function decr_Operator(){
    var get_Dec = 10;
    document.getElementById("dec_cal").innerHTML = " decrement operator  " + -- get_Dec;
}

/*================================================================================================
math function for random function
===============================================================================================*/

function rand_number(){
    var check_Random =Math.random();
    var get_Random = check_Random * 10 ;
    document.getElementById("rannum_cal").innerHTML = " Random number get by function is " +  check_Random + " Result is " + get_Random;
}