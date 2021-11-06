/*function ternaryOperator(){
    get_Age = document.getElementById("get_Age").value;
    var show_Result = (get_Age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("show_Result").innerHTML = "Result: " + show_Result;
}*/

function ternaryOperator(){
     get_Age = 17;
     document.getElementById("get_Age").innerHTML = show_Result();
   
    function show_Result(){
    var show_result = (get_Age < 18) ? "You are not old enough to vote" : "You can vote!";
    return show_result;
}
}