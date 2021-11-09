//This variable keeps track of who's turn it is.
let activePlayer='X';
//This array stores an array of moves. We use this to determine win conditions
let selectedSquares = [];
//This function is for placing an x or o in a square.
function placeXOrO (squareNumber) {
//This condition ensures a square hasn't be selected already.
//The. some 0 method is used to check each element of selectedsquare array to
//see if it contains the square number clicked on.
if (!selectedSquares. some (element => element.includes (squareNumber) )) {
//This variable retrieves the html element id that was clicked.
let select = document. getElementById (squareNumber);
//This condition checks who's turn it is.
if (activePlayer === 'X')
{
//If activePlayer is equal to 'X', the x.png is placed in HTML
select.style.backgroundImage = 'url ("images/x.png") ';
}
 else {
//If activePlayer is equal to 'O', the o.png is placed in HTML.
select.style.backgroundImage = 'url ("images/o.png")';
 }
//squareNumber and activePlayer are concatenated together and added to array.
selectedSquares.push (squareNumber + activePlayer);
//This calls a function to check for any win conditions.
checkWinConditions () ;
//This condition is for changing the active player.
if (activePlayer === 'X') {
//If active player is
//"X' change it to 'o'
activePlayer= 'O';
//If active player is anthing other than 'X'
} else {
//Change the activePlayer to 'X'
activePlayer = 'X';
}
//This function plays placement sound.
audio ('./media/place.mp31');
//This condition checks to see if it is computers turn.
if (activePlayer === 'O') {
//This function disables clicking for computer choice.
disableclick();
//This function waits 1 second before placing the image
//and enabling click.
setTimeout (function () { computersTurn () ; }, 1000);
//Returning true is needed for our computersTurn () function to work.
return true;
}

//This function results in a random square being selected.
function computersTurn() {
    //This boolean is needed for our while loop.
    let success = false;
    //This variable stores a random number 0-8
    let pickASquare;
    //This condition allows our while loop to keep
    //trying if a square is selected already.
    while (!success) {
    //A random number between 0 and 8 is selected
    pickASquare = String (Math. floor (Math. random () * 9));
    //If the random number evaluates returns true, the square hasn't been selected yet
    if (placeXOrO (pickASquare) ) {
    //This line calls the function.
    placeXOrO(pickASquare);
    //This changes our boolean and ends the loop.
    success = true;
};
}
}
}
}

//This function parses the selectedsquares array to search for win conditions
//drawWinline function is called to draw line if condition is met.
function checkWinConditions(){
// x 0, 1, 2 condition.
if (arrayIncludes ('Ox', '1x' ,'2X' )) { drawWinLine (50, 100, 558, 100) ; }

else if (arrayIncludes('3X','4X', '5x)) { drawwinLine (50, 304, 558, 304);}

else if (arrayIncludes("6X','7X','8X')) { drawwinLine (50, 508, 558, 508) ;}

else if (arrayIncludes ('Ox', '3x', '6X)) { drawwinline(100, 50, 100, 558) ;}

else if (arrayIncludes('1X','4X' , '7x')) { drawwinLine (304, 50, 304, 558) ;}
else if (arrayIncludes("2X',15x".'8x)) { drawwinline (508, 50, 508, 558) ;}
else if (arrayIncludes (' 6X' ,'4X' , '2X')) { drawwinLine (100, 508, 510, 90) ;
11 x 0,
4, 8 condition.
else if (arrayIncludes ('Ox' , 'Ax' , '8X')) f drawwinLine (100, 100, 520, 520) ;
// 0 0, 1, 2 condition.
else if (arrayIncludes ('00', '10', '20 )) ( drawwinLine (50, 100, 558, 100) ;
11 0 3, 4, 5 condition.
else if (arrayIncludes('30',
'40', '50')) ( drawwinline (50, 304, 558, 304) ;
11 0 6, 7, 8 condition
else if (arrayIncludes ('60', '70', '80')) ( drawwinLine (50, 508, 558, 508) ;
11 0 0, 3, 6 condition.
else if (arrayIncludes ('00', '30', '60')) ( drawwinline (100, 50, 100, 558) ;
11 01,
4, 7 condition.
else if (arrayIncludes ('10', '40', '70')) ( drawwinline (304, 50, 304, 558) ;
110 2,
5, 8 condition
else if (arrayIncludes ('20', '50', '80')) ( drawwinline (508, 50, 508, 558) ;
// 0 6, 4, 2 condition.
else if (arrayIncludes ('60', '40', '20 )) ( drawwinLine (100, 508, 510, 90) ;
11 0 0,
4, 8 condition
else if (arrayIncludes('00'
'801)) ( drawwinline (100, 100, 520, 520) ;
/ This condition checks for tie. If none of the above conditions register
//and 9 squares are selected, the code executes.
else if (selectedSquares.length >= 9)
//This function plays the tie game sound.
audio("./media/tie.mp3');
This function sets a
.3 second timer before the resetGame is called.
setTimeout (function () ( resetGame () ; 1, 1000) ;