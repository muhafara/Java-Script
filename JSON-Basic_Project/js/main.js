//JSON.stringify()
function clicktosee(){
    var obj ={"name" : "John", "Age" : 30, "City" : "New York"};
    var myJson = JSON.stringify(obj);
    document.getElementById("demo").innerHTML = myJson;
    }
    
    //JSON.parse()
    function clicktoseeone(){
        var ebj ={"name" : "John", "Age" : 30, "City" : "New York"};
        var myJson = JSON.parse(ebj);
        document.getElementById("demo_parse").innerHTML = myJson.name;
        }