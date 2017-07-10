$(document).ready(function() {
	// $(window).stellar();
	var windowsHei = $(window).height();
	if($(window).width() > 780){
		$(".bannerTopo").css('height',windowsHei -150);		
	}
	if($(window).width() < 468){
		$("#bannerTopo").css('height',windowsHei -80);		
	}
});

function abreFechaMenu(){
	var hamburger = document.getElementById("hamburger");
	var menuItems = document.getElementById("menu-Items");
	if (hasClass(hamburger, "is-active")){
		//verifica se esta com o menu aberto, caso sim, retira a classe "is-active"
		hamburger.className -= " is-active";
		hamburger.className += " nav-toggle";
		menuItems.style.color = "white";
	} else{
		hamburger.className += " is-active";
		hamburger.setAttribute("color", "black");
		menuItems.style.color = "black";
	}
	var menu = document.getElementById("menu");
	if (hasClass(menu, "is-active")){
		//verifica se esta com o menu aberto, caso sim, retira a classe "is-active"
		menu.className -= " is-active";
		menu.className += " nav-right nav-menu";
	} else{
		menu.className += " is-active";
	}
	
	
}

function hasClass(element, cls) {
return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// <![CDATA[
	$(document).ready(function() {
		function filterPath(string) {
			return string
				.replace(/^\//,'')
				.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
				.replace(/\/$/,'');
				}
					$('a[href*=#]').each(function() {
					if ( filterPath(location.pathname) == filterPath(this.pathname)
					&& location.hostname == this.hostname
					&& this.hash.replace(/#/,'') ) {
					var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
					var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
					if ($target) {
					var targetOffset = $target.offset().top;
					$(this).click(function() {
						//define o tempo da animação de transição.
					$('html, body').animate({scrollTop: targetOffset}, 1500);
						return false;
					});
				}
			}
		});
	});
	// ]]>

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: false,
	  focusOnSelect: true,
	  arrows: false
	});