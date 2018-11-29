$(document).ready(function(){
	// Create the sliders.
	createPersonSlider();
	createChallengeSlider();

	// Randomizer button.
	$('.spinner').click(function(e) {
		e.preventDefault();
		randomizeSlider('#person-slider');
    randomizeSlider('#challenge-slider');
 });

});

function createPersonSlider() {
  // Use sheetrock library to read Google sheet data.
  // See https://chriszarate.github.io/sheetrock/#documentation
  sheetrock({
    url: 'https://docs.google.com/spreadsheets/d/1UqB5lLEIRCANtXF358dVEWJ60e7vsYoaQJIlvgazUmU/edit#gid=0',
    callback: function (error, options, response) {
      //console.log(response.rows);
			response.rows.forEach(function(element) {
				console.log(element.cells.Title);
        // Skip header row.
        if (element.cells.Title != 'Title')
        {
          $('#person-slider').append('<div><h3>The Person: ' + element.cells.Title + '</h3><p>' + element.cells.Description + '</p></div>');
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

function createChallengeSlider() {
  // Use sheetrock library to read Google sheet data.
  // See https://chriszarate.github.io/sheetrock/#documentation
  sheetrock({
    url: 'https://docs.google.com/spreadsheets/d/1EK_bVgSEZpcmgtDvtheQD9nfAyIObjyuTSCOCl-n_8s/edit#gid=0',
    callback: function (error, options, response) {
      //console.log(response.rows);
			response.rows.forEach(function(element) {
				console.log(element.cells.Title);
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
      $("#spinner-container").css('visibility', 'visible');

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