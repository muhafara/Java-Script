/*========================================================================
Local variable
======================================================================*/

function local_Variable(){
    var first_Num =2;
    var second_Num = 4;
    var get_Local_Var =first_Num + second_Num;
    document.getElementById("local_var").innerHTML = "Result of local variable " + get_Local_Var;
}

/*========================================================================
Defining a global variable
======================================================================*/
var get_global_Var;

/*========================================================================
Defining a function for global variable
======================================================================*/

function global_Variable(){
    var first_Num = 4;
    var second_Num = 8;
    var get_global_Var =first_Num + second_Num;
    document.getElementById("global_var").innerHTML = "Result of Global variable " + get_global_Var;
}


/*========================================================================
Intentionally writing a function to dubug with console
======================================================================*/

function debug_Function(){
    var first_Num;
    console.log(first_Num); 
    var second_Num = 8;
    console.log(second_Num)
    var get_global_Var =first_Num + second_Num;
    document.getElementById("debug_func").innerHTML = "Result of Global variable " + get_global_Var;
}

/*========================================================================
get Date and using if
======================================================================*/

function get_date(){
    console.log( new Date().getHours());
    if(new Date().getHours > 12){
        document.getElementById("get_date").innerHTML = "Good Morning ";
    }else{
        document.getElementById("get_date").innerHTML ="Good Afternoon!";
    }
}

/*========================================================================
else -if
======================================================================*/
function Time_function(){
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply ="It is morning!"
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is afternoon!"
    }
    else{
        Reply = "It is evening!"
    }
    document.getElementById("else-if").innerHTML = Reply;
}
