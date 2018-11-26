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
	 var slideCount = $(".slider").slick("getSlick").slideCount;
	 var currentSlide = $(".slider").slick("getSlick").currentSlide;
	 var randSlide = Math.floor(Math.random() * slideCount);

		do
		{
			var randSlide = Math.floor(Math.random() * slideCount);
		}
		while (randSlide == currentSlide);
   $('.slider').slick('slickGoTo', randSlide);
 });

});