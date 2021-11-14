//Function to check vote eligibility using ternanry operator, nested function
function ternaryOperator(){
    var get_Age = document.getElementById("get_Age").value;
    document.getElementById("show_Result").innerHTML = show_Result();
    //nested function
   function show_Result(show_result){
   var show_result = (get_Age < 18) ? "You are not old enough to vote" : "You can vote!";
   return show_result;
}
}