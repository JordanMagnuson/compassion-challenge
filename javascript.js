$(document).ready(function(){
	var challengeList = loadChallengeList();
		console.log(challengeList);

	console.log( "ready!" );
 $('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
		dots: true,
   focusOnSelect: true,
 });
 $('.spinner a').click(function(e) {
   e.preventDefault();
	 var personCount = $(".person-slider").slick("getSlick").slideCount;
	 var currentPerson = $(".person-slider").slick("getSlick").currentSlide;
	 var challengeCount = $(".challenge-slider").slick("getSlick").slideCount;
	 var currentChallenge = $(".challenge-slider").slick("getSlick").currentSlide;
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


   $('.person-slider').slick('slickGoTo', randPerso);
	 $('.challenge-slider').slick('slickGoTo', randChallenge);

 });

});

function loadChallengeList() {
		var data;
		Papa.parse('challenge_list.csv', {
			header: true,
			download: true,
			dynamicTyping: true,
			complete: function(results) {
				console.log(results);
				data = results.data;
			}
		});
		return data;
}