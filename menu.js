$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});
	// $('sub_menu').click(function(){
	// 	$(this).children('.children2').slideToggle();
	// });

	// Mostar submenu
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
};