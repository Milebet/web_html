/*****************************
	SERVICES
******************************/
$(function() {
	new WOW().init();
});
/*****************************
	Work
******************************/
$(function() {
	$("#work").magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});
});
/*****************************
	TEAM
******************************/
$(function() {
	$("#team-members").owlCarousel({
		items: 4,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoPlayHoverPause: true
	});
});
/*****************************
	CUSTOMERS TESTIMNIALS
******************************/
$(function() {
	$("#customers-testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 700,
		loop: true
	});
});
/*****************************
	STATS
******************************/
$(function(){
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*****************************
	CLIENTS TESTIMNIALS
******************************/
$(function() {
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: true,
		smartSpeed: 700,
		loop: true
	});
});
/*****************************
	SCROLL SPY
******************************/
$('body').scrollspy({ target: '.appaware-top-nav' });