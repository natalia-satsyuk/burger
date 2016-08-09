
// menu
$(".header-menu-bars").click(function() {
	if ($(document).width() > 768) {
		$(".list").fadeToggle(400);
	} else {
		$(".list").slideToggle(400);
	}
});

$(".header-menu-search").click(function() {
	$("form").fadeToggle(400);
});


// gallery 3 pictures
$(function() {
	$('#dg-container').gallery();
});


// gallery picture + text
$('.container-person').slick({
	dots: false,
	// prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
	// nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
});



// 