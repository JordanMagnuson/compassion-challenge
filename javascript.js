$(document).ready(function(){
	// Create the sliders.
	createPersonSlider();
	createChallengeSlider();

	// Randomizer button.
	$('#spinner a').click(function(e) {
		e.preventDefault();
		randomizeSlider('#person-slider');
    randomizeSlider('#challenge-slider');
 });

});

function createPersonSlider() {
	var data;
	// Use Papa Parse library to read csv file.
	Papa.parse('person_list.csv', {
		header: true,
		download: true,
		dynamicTyping: true,
		complete: function(results) {
			// Insert html.
			data = results.data;
			data.forEach(function(element) {
				console.log(element);
        if (element.Title != null)
        {
          $('#person-slider').append('<div><h3>' + element.Title + '</h3><p>' + element.Description + '</p></div>');
        }
			});

			// Create the actual slider now using the Slick Slider library.
			$('#person-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				focusOnSelect: true,
			});

      // Randomize to begin.
      randomizeSlider('#person-slider');
		}
	});
}

function createChallengeSlider() {
  var data;
	// Use Papa Parse library to read csv file.
	Papa.parse('challenge_list.csv', {
    header: true,
		download: true,
		dynamicTyping: true,
		complete: function(results) {
			// Insert html.
			data = results.data;
			data.forEach(function(element) {
				console.log(element);
        if (element.Title != null)
        {
          $('#challenge-slider').append('<div><h3>' + element.Title + '</h3><p>' + element.Description + '</p></div>');
        }
			});

			// Create the actual slider now using the Slick Slider library.
			$('#challenge-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				focusOnSelect: true,
			});

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