function ternaryOperator(){
    get_Age = document.getElementById("get_Age").value;
    var show_Result = (get_Age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("show_Result").innerHTML = "Result: " + show_Result;
}