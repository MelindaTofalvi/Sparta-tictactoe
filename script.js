var table= $("table");
var r2 = Math.floor((Math.random() * 3) + 1);

myTurn();

function myTurn(){
	$(table).on("click", "td", function (event){
	$(this).text("X");
	$(".playerTurn").text("It is Y's turn");
	// checkWinner();
	setTimeout(computersTurn, 1000);
  });
}

function computersTurn(){
	var r = Math.floor((Math.random() * 9) + 1);
	if($( "td" ).eq( r ).text()){
		computersTurn();
	} else{
		$( "td" ).eq( r ).text("0");
	}
	// checkWinner();
	$(".playerTurn").text("It is X's turn");
	
}

$("#reset").on("click", reset);


function reset(){
	$("table td").empty();
}


function checkWinner(){
	
}
