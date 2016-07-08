$(function () {
	$dropdown = $('.item--dropdown');
	$itemSubmenu = $('.sub-menu__item');

	$dropdown.on('click', function () {
		$dropdown.css('background', 'transparent');
		$(this).css('background-color', '#f2f2f2');
		$('.sub-menu__main').css('display', 'none');
		$(this).children('.sub-menu__main').slideToggle(400);
	})
	$itemSubmenu.hover(function () {
		$('sub-menu__item ul').css('display', 'none');
		$(this).children('.sub-menu').slideToggle(400);
	})
})