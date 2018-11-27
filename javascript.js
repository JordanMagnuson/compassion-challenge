$(document).ready(function(){
	// Create the sliders.
	createPersonSlider();
	createChallengeSlider();
 
	// Randomizer button.
	$('#spinner a').click(function(e) {
		e.preventDefault();
		randomizeSliders();
 });

});

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
				$('#challenge-slider').append('<div><h3>' + element.Title + '</h3></div>');
				
			});

			// Create the actual slider now using the Slick Slider library.
			$('#challenge-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true,
				focusOnSelect: true,
			});
		}
	});
}

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
				$('#person-slider').append('<div><h3>' + element.Title + '</h3></div>');
				
			});

			// Create the actual slider now using the Slick Slider library.
			$('#person-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: true,
				focusOnSelect: true,
			});
		}
	});
}

function randomizeSliders() {
	// Get slide counts and current slide.
	var personCount = $("#person-slider").slick("getSlick").slideCount;
	var currentPerson = $("#person-slider").slick("getSlick").currentSlide;
	var challengeCount = $("#challenge-slider").slick("getSlick").slideCount;
	var currentChallenge = $("#challenge-slider").slick("getSlick").currentSlide;

	// Prevent randomizing to current selection.
	do
	{
		var randPerso = Math.floor(Math.random() * personCount);
	}
	while (randPerso == currentPerson);
	do
	{
		var randChallenge = Math.floor(Math.random() * challengeCount);
	}
	while (randChallenge == currentChallenge);

	// Now go to the new slides.
	$('#person-slider').slick('slickGoTo', randPerso);
	$('#challenge-slider').slick('slickGoTo', randChallenge);
}