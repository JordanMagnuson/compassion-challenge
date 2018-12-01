$(document).ready(function(){
	// Create the sliders.
	createPersonSlider();
	createMeditationSlider();
	createChallengeSlider();

	// Randomizer button.
	$('.spinner').click(function(e) {
		e.preventDefault();
		randomizeSlider('#person-slider');
		randomizeSlider('#meditation-slider');
    	randomizeSlider('#challenge-slider');
 	});

});

function createPersonSlider() {
	// Use sheetrock library to read Google sheet data.
  	// See https://chriszarate.github.io/sheetrock/#documentation
  	sheetrock({
	    url: 'https://docs.google.com/spreadsheets/d/1UqB5lLEIRCANtXF358dVEWJ60e7vsYoaQJIlvgazUmU/edit#gid=2134499488',
	    callback: function (error, options, response) {
	      	//console.log(response.rows);
			response.rows.forEach(function(element) {
				//console.log(element.cells.Title);
	        
		        // Skip header row.
		        if (element.cells.Title != 'Title')
		        {
		         	$('#person-slider').append('<div><h3>The Person: ' + element.cells.Title + '</h3><p>' + element.cells.Description + ' You can think of this person specifically, or imagine a fictional character based on this person.</p></div>');
		        }
			});

			// Create the actual slider now using the Slick Slider library.
			$('#person-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				focusOnSelect: false,
			});

	      // Show the slider once everything has loaded.
	      $("#person-container").css('visibility', 'visible');

	      // Randomize to begin.
	      randomizeSlider('#person-slider');
	    }
  	});
}

function createMeditationSlider() {
	// Use sheetrock library to read Google sheet data.
  	// See https://chriszarate.github.io/sheetrock/#documentation
  	sheetrock({
	    url: 'https://docs.google.com/spreadsheets/d/1UqB5lLEIRCANtXF358dVEWJ60e7vsYoaQJIlvgazUmU/edit#gid=1277014298',
	    callback: function (error, options, response) {
	      	//console.log(response.rows);
			response.rows.forEach(function(element) {
				//console.log(element.cells.Title);
	        
		        // Skip header row.
		        if (element.cells.Title != 'Title')
		        {
		         	$('#meditation-slider').append('<div><h3>The meditation: ' + element.cells.Title + '</h3><p>' + element.cells.Description + ' Fall back on a fictional representation of the person, as necessary.</p></div>');
		        }
			});

			// Create the actual slider now using the Slick Slider library.
			$('#meditation-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				focusOnSelect: false,
			});

	      // Show the slider once everything has loaded.
	      $("#meditation-container").css('visibility', 'visible');

	      // Randomize to begin.
	      randomizeSlider('#meditation-slider');
	    }
  	});
}

function createChallengeSlider() {
	// Use sheetrock library to read Google sheet data.
	// See https://chriszarate.github.io/sheetrock/#documentation
	sheetrock({
	    url: 'https://docs.google.com/spreadsheets/d/1UqB5lLEIRCANtXF358dVEWJ60e7vsYoaQJIlvgazUmU/edit#gid=101186216',
	    callback: function (error, options, response) {
	      	//console.log(response.rows);
			response.rows.forEach(function(element) {
				//console.log(element.cells.Title);
		        // Skip header row.
		        if (element.cells.Title != 'Title')
		        {
		          $('#challenge-slider').append('<div><h3>The Challenge: ' + element.cells.Title + '</h3><p>' + element.cells.Description + '</p></div>');
		        }
			});

			// Create the actual slider now using the Slick Slider library.
			$('#challenge-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				focusOnSelect: false,
			});

			// Show the slider once everything has loaded.
			$("#challenge-container").css('visibility', 'visible');
			$(".footer").css('visibility', 'visible');

			// Randomize to begin.
			randomizeSlider('#challenge-slider');
	    }
  	});
}

function randomizeSlider(selector) {
	// Get slide counts and current slide.
	var slideCount = $(selector).slick("getSlick").slideCount;
	var currentSlide = $(selector).slick("getSlick").currentSlide;

	// Prevent randomizing to current selection.
	do
	{
		var randomSlide = Math.floor(Math.random() * slideCount);
	}
	while (randomSlide == currentSlide);

	// Now go to the new slides.
	$(selector).slick('slickGoTo', randomSlide);
}