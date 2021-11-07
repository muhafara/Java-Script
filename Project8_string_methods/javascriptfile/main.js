/*=============================================================================================================
String concat()
=============================================================================================================*/
function str_Concatination(){
var str_One= "Hello ,";
var str_Two = "I'm concatinating a string";
var str_Three =" using string concat method";
str_Final = str_One.concat(str_Two,str_Three);
document.getElementById("str_Concat").innerHTML = str_Final;
}
/*=============================================================================================================
String slice()
=============================================================================================================*/
function str_Slice(){
    var str_Sentence= "Hello , how are you doing today";
    str_get_Slice = str_Sentence.slice(11,17);
    document.getElementById("str_Slice").innerHTML = str_get_Slice;
    }

/*=============================================================================================================
String Touppercase()
=============================================================================================================*/
function str_toUpperCAse(){
    var str_Sentence= "Hello , how are you doing today";
    str_get_touppercase = str_Sentence.toUpperCase();
    document.getElementById("str_touppercase").innerHTML = str_get_touppercase;
    }

/*=============================================================================================================
String search()
=============================================================================================================*/
function str_Search(){
    var str_Sentence= "Hello , how are you doing today";
    str_get_Search = str_Sentence.search("how");
    document.getElementById("str_search").innerHTML = str_get_Search;
    }

/*=============================================================================================================
String toString()
=============================================================================================================*/
function str_toPrecision(){
    var x= "115425985412.265145145";
    document.getElementById("str_toPrecision").innerHTML = x.toPrecision(2);
}

/*=============================================================================================================
String toFixeds()
=============================================================================================================*/
function str_toFixed(){
    var num = 5.56789;
    var n = num.toFixed(10);
    document.getElementById("str_toPrecision").innerHTML = n;
}

/*=============================================================================================================
String value of()
=============================================================================================================*/
function str_valueof(s){
    var my_String = "Hello world";
    document.getElementById("str_valueof").innerHTML = my_String.valueOf();
}