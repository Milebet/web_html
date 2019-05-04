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