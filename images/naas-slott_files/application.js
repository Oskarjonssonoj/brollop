	
	$(document).ready(function() {
	
		// FIRST - LAST - ODD - EVEN
		$(".row:first-child, .row .cols:first-child, .item:first-child, ul li:first-child, dl dt:first-child, dl dd:first-child, table thead tr th:first-child, table tfoot tr td:first-child").addClass("first");
		$(".row:last-child, .row .cols:last-child, .item:last-child, ul li:last-child, dl dt:last-child, dl dd:last-child, table thead tr th:last-child, table tfoot tr td:last-child").addClass("last");
		$(".item:nth-child(odd), ul li:nth-child(odd), dl dt:nth-child(odd), dl dd:nth-child(odd), tr:nth-child(odd)").addClass("odd");
		$(".item:nth-child(even), ul li:nth-child(even), dl dt:nth-child(even), dl dd:nth-child(even), tr:nth-child(even)").addClass("even");
	
		// GALLERY
		$("#mid_col .gallery .item:nth-child(2n+2)").addClass("bookend-right");
		$("#mid_col .gallery .item:nth-child(2n+1)").addClass("bookend-left");
		$("#left_col .gallery .item:nth-child(3n+3), #right_col .gallery .item:nth-child(3n+3)").addClass("bookend-right");
		$("#left_col .gallery .item:nth-child(3n+1), #right_col .gallery .item:nth-child(3n+1)").addClass("bookend-left");
		$("#wide_col .gallery .item:nth-child(4n+4)").addClass("bookend-right");
		$("#wide_col .gallery .item:nth-child(4n+1)").addClass("bookend-left");
		
		// PROMO PODS
		$(".promo_pods.wide .item:nth-child(3n+3)").addClass("bookend-right");
		$(".promo_pods.wide .item:nth-child(3n+1)").addClass("bookend-left");
		
		// LISTINGS - GRID
		$("#mid_col .listing.grid .item:nth-child(2n+2)").addClass("bookend-right");
		$("#mid_col .listing.grid .item:nth-child(2n+1)").addClass("bookend-left");
		$("#left_col .listing.grid .item:nth-child(2n+2), #right_col .listing.grid .item:nth-child(2n+2)").addClass("bookend-right");
		$("#left_col .listing.grid .item:nth-child(2n+1), #right_col .listing.grid .item:nth-child(2n+1)").addClass("bookend-left");
		$("#wide_col .listing.grid .item:nth-child(3n+3)").addClass("bookend-right");
		$("#wide_col .listing.grid .item:nth-child(3n+1)").addClass("bookend-left");

		// DROP DOWN
		$("nav.main ul li").hover(
			function(){ $(this).addClass("hover"); },
			function(){ $(this).removeClass("hover"); }
		);

		// EXPAND NAV - MOBILE  
		$(".navigation a.expand").click(function(){
			if ($(".navigation .reveal").length ) { 
				$(".navigation a.expand").toggleClass('active');
				$(".navigation a.expand em").text('Close');
				$("html").toggleClass('reveal_out');
			}
			else{
				$(".navigation a.expand").toggleClass('active');
				$(".navigation a.expand em").text('Menu');
				$("html").toggleClass('reveal_out');
			}
		});

		// EXPAND SEARCH - DESKTOP
		$(".navigation a.expand_search").click(function(){
			if ($(".navigation .search_reveal").length ) { 
				$(".navigation a.expand_search").toggleClass('active');
				$(".navigation a.expand_search span i").toggleClass('fa-times');
				$(".navigation .search_reveal").toggleClass('active');
			}
			else{
				$(".navigation a.expand_search").toggleClass('active');
				$(".navigation a.expand_search span i").toggleClass('fa-search');
				$(".navigation .search_reveal").toggleClass('active');
			}
		});
		$('.navigation a.expand_search').click(function() {
		     $('.navigation input').focus();
		});

		// SCROLL TO TOP
		$('a[href=#site]').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});  

		// GALLERY
		$("a.fancyimage").fancybox({
			'transitionIn'  :  'elastic',
			'transitionOut'  :  'elastic',
			'speedIn'    :   300, 
			'speedOut'    :   300, 
			'overlayShow'  :    true,
			'overlayOpacity':    0.7,
			'overlayColor'  :   "#000"
		});
		
		$("a.fancyyoutube").click(function() {
			$.fancybox({
				'padding': 0,
				'overlayShow'	:    true,
				'overlayOpacity': 	 0.7,
				'overlayColor'	: 	"#000",
				'autoScale': true,
				'transitionIn': 'elastic',
				'transitionOut': 'elastic',
				'speedIn': 300,
				'speedOut':300,
				'title': this.title,
				'width': 680,
				'height': 495,
				'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type': 'swf',
				'swf': {
					'wmode': 'transparent',
					'allowfullscreen': 'true'
				}
			});
	
			return false;
		});
	
		$("a.fancyvimeo").click(function() {
			$.fancybox({
				'padding': 0,
				'overlayShow'	:    true,
				'overlayOpacity': 	 0.7,
				'overlayColor'	: 	"#000",
				'autoScale': true,
				'transitionIn': 'elastic',
				'transitionOut': 'elastic',
				'speedIn': 300,
				'speedOut':300,
				'title': this.title,
				'width': 680,
				'height': 495,
				'href': this.href.replace(new RegExp("([0-9])", "i"), 'moogaloop.swf?clip_id=$1'),
				'type': 'swf'
			});
	
			return false;
		});

		// SLIDESHOWS
      	$(".banner .slides").slick({
			dots: false,
			infinite: true,
  			adaptiveHeight: true,
			fade: true,
			 autoplay: true,
			 autoplaySpeed: 5000,
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-3x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-3x"></i>'
			//speed: 200
		});
      	$(".slideshow").slick({
			dots: false,
			infinite: true,
			speed: 200,
  			adaptiveHeight: true,
			prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left fa-2x"></i>',
			nextArrow: '<div class="slick-next"><i class="fa fa-angle-right fa-2x"></i>'
		});

		// ALERT BOX
		$(".alert_box").delegate("a.close", "click", function(event) {
			event.preventDefault();
			$(this).closest(".alert_box").fadeOut(function(event){
			$(this).remove();
			});
		});  
		
		// TABBED
	    $('.tabbed .panes .pane').hide();
	    $('.tabbed nav ul li a').on('click', function(e){
	        $('.tabbed nav ul li a.active').removeClass('active');
	        $('.tabbed .panes .pane:visible').hide();
	        $(this.hash).show();
	        $(this).addClass('active');
	        e.preventDefault();
	    }).filter(':first').click();
	
		// ACCORDION
		$('.accordion div.tab').on('click', function() {
			$(this).next().slideToggle();
		});
		$(".accordion div.tab a").on('click', function() {
			if ($(this).attr("class") == "active")
				$(this).removeClass("active");
			else 
				$(this).addClass("active");
		});

	});

