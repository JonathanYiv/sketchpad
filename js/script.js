$(document).ready(function() {

	// Adds the initial Table to the Container
	$(".container").append('<table class="table"></table>');

	// Creates a Function that can be called to create a Grid of size X by X
	function createGrid(x) {

		$(".container").find('.table').remove();
		$(".container").append('<table class="table"></table>');

		for(var i = 0; i < x; i++) {
			$(".table").append('<tr></tr>');
		}

		for(var j = 0; j < x; j++) {
			$("tr").append('<td></td>');
		}

		activateHover();
	}

	// Creates a Function that activates the Drawing Mechanism
	function activateHover() {
		$("td").hover(function() {

			$(this).addClass("changeColor");

		});
	}

	// Creates the Default Grid Size of 16 x 16
	createGrid(16);

	
	
	// Clears the Grid when clicked and prompts for a new size Grid
	$('.clear').on('click', function() {

		$('td').removeClass("changeColor");

		var gridSize = parseInt(prompt("What size box do you want?", "16"));

		if(gridSize === parseInt(gridSize, 10)) {
			createGrid(gridSize);
		} else {
			alert("That is not an acceptable value!");
		}

	});

	


});