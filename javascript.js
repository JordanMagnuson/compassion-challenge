$(document).ready(function(){
	// Create the sliders.
	createMeditationSlider();
	createPersonSlider();
	createChallengeSlider();

	// Randomizer button.
	$('.spinner').click(function(e) {
		e.preventDefault();
		randomizeSlider('#meditation-slider');
		randomizeSlider('#person-slider');
    	randomizeSlider('#challenge-slider');
 	});

});

function createPersonSlider() {
	// Use sheetrock library to read Google sheet data.
  	// See https://chriszarate.github.io/sheetrock/#documentation
  	sheetrock({
	    url: 'https://docs.google.com/spreadsheets/d/1UqB5lLEIRCANtXF358dVEWJ60e7vsYoaQJIlvgazUmU/edit#gid=2134499488',
	    callback: function (error, options, response) {
	      	// console.log(response.rows);
	      	var endSentence = response.rows[1].cells.end_sentence;

			response.rows.forEach(function(element) {
				//console.log(element.cells.title);
	        
		        // Skip header row.
		        if (element.cells.title != 'title')
		        {
		         	$('#person-slider').append('<div><h3>The Person: ' + element.cells.title + '</h3><p>' + element.cells.description + ' ' +  endSentence + '</p></div>');
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
	      	var endSentence = response.rows[1].cells.end_sentence;

			response.rows.forEach(function(element) {
				//console.log(element.cells.title);
	        
		        // Skip header row.
		        if (element.cells.title != 'title')
		        {
		         	$('#meditation-slider').append('<div><h3>The Meditation: ' + element.cells.title + '</h3><p>' + element.cells.description + ' ' + endSentence + '</p></div>');
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
	      	var startingSentence = response.rows[1].cells.starting_sentence;
	      	var endSentence = response.rows[1].cells.end_sentence;

			response.rows.forEach(function(element) {
				//console.log(element.cells.title);
		        // Skip header row.
		        if (element.cells.title != 'title')
		        {
		          $('#challenge-slider').append('<div><h3>The Response: ' + element.cells.title + '</h3><p>' + startingSentence + '<br><br>Now: ' + element.cells.description + '<br><br><em>' + endSentence + '</em></p></div>');
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