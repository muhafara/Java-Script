/* this function gets the task from input*/
function get_todos(){
    /*this create an array pf task thats are input*/
    var todos = new Array;
     /*this pull the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /* if the input is not null then JSON.parse will communicate with the web browser memory*/
    if(todos_str !==null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*this function adds the inputed task to the get_toodos function array*/
function add(){
    /*This takes the inputed task to the get_todos function array*/
    var task = document.getElementById('task').value;
    var todos = get_todos();
    /*this adds a new task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}

/*this function keeos the tasl=k permanently displayed on the screen*/
function show(){
    /*this sets the task that was retrived as a variable*/
    var todos = get_todos();
    var html ='<ul>';
    /*thid display a task to the list in the order than it is inputed*/
    for(var i=0; i<todos.length; i++){
        /*this also display thr task as a list and create the button with "x"*/
        html+= '<li>' + todos[i] + '<button class="remove" id="' + i +'">x</button></li>';
    };
    html += '</ul>';
    /*This display the inputed task as a list*/
    document.getElementById('todos').innerHTML = html;
    }
    /* this display the inputed task when the add item is clicked*/
    document.getElementById('add').addEventListener('click', add);
    /*this will kep the input displayed permanently on the screen*/
    show();
