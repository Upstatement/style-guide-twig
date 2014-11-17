$(document).ready(function() {

	$(".style-example").each(function(){
		var $this = $(this);
		var html = $this.html();
		var $code = $this.closest('.style-mod').find('.html-code'); 
		html = html.replace(/</g, "&lt;");
		html = html.replace(/>/g, "&gt;");
		html = html.trim();
		$code.html(html);
	}); 

	$("body").on("click", ".details-trigger", function(){
		var $this = $(this);
		var $mod = $this.closest(".style-mod"); // find the closest style mod
		var $mods = $(".style-guide-inner").contents().find(".style-mod"); 			// find all style mods
		var $verb = $this.find(".verb"); 		// find this verb
		var $verbs = $(".style-guide-inner").contents().find(".verb"); 				// find all verbs
		var $body = $(".style-guide-inner").contents().find('body');

		// If it's a standard detail trigger ...
		if ($this.hasClass("code-btn")) {
			// ... add the show command to the parent module
			if ($mod.hasClass("details-on")) {
				$verb.text("Show");
				$mod.removeClass("details-on").addClass("details-off");
			} else {
				$verb.text("Hide");
				$mod.removeClass("details-off").addClass("details-on");
			} 
		// Otherwise it's the show all code button ...  
		} else {
			// so add class to the body
			if ($body.hasClass("details-all-on")) {
				$verbs.text("Show");
				$body.removeClass("details-all-on");
				// Clean all mods with an active class, set them to on state
				$mods.removeClass("details-on details-off").addClass("details-off");
			} else {
				$verbs.text("Hide");
				$body.addClass("details-all-on");
				// Clean all mods with an active class, set them to off state
				$mods.removeClass("details-on details-off").addClass("details-on");
			} 
		}
	});

	var innerIframe = $(".style-guide-inner");
	$('.nav-trigger').click(function(){
			$('.style-bd-outer').toggleClass('nav-active');
		});

	$('.style-nav-link').click(function(){
			$('.style-bd-outer').toggleClass('nav-active');
		});

	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 80){
			$('body').addClass('sticky');
		} else {
			$('body').removeClass('sticky');
		}
	});

	// reset iframe sizes
	$('.size-a-large').click(function(e){
		e.preventDefault();
		$('body').addClass('large');
		$('body').removeClass('auto medium small');
	});

	$('.size-a-medium').click(function(e){
		e.preventDefault();
		$('body').addClass('medium');
		$('body').removeClass('auto large small');
	});

	$('.size-a-small').click(function(e){
		e.preventDefault();
		$('body').addClass('small');
		$('body').removeClass('auto large medium');
	});

	$('.size-a-auto').click(function(e){
		e.preventDefault();
		$('body').addClass('auto');
		$('body').removeClass('medium large small');
	});

});
	// var iframeHeight = $('.style-guide-inner').contents().find('.style-bd-inner').height();
	// $('.style-guide-inner').css('height', iframeHeight + 'px');
	// $(window).resize(function(){
	// 	console.log('iframeHeight = ' + iframeHeight);
		// $('.style-guide-inner').css('height', iframeHeight + 'px');
	// });