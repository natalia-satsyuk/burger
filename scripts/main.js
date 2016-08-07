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



// gallery
$(function() {
	$('#dg-container').gallery();
});
