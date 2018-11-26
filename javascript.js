$(document).ready(function(){
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