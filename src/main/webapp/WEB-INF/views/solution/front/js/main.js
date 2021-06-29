$(function(){
	$('.mobile-place-tab button').on('click',function () {
		const $target = $(this).attr('data-aim');
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents('.place-pop_container').find('.'+$target).addClass('show').siblings().removeClass('show');
	})
	$(window).resize( function(){
		funcThisSize();
	} );
	funcThisSize();
	//-----Work 정렬
	var $grid = $('.works-wrap').isotope({
		itemSelector : '.item',
		columnWidth : '.item',
		percentPosition : true,
		transitionDuration : '0.8s',
		masonry: {
		columnWidth: 4
		}
	});


    $('.filter a').on('click',function(e){
		$('.filter a').removeClass('on');
		e.preventDefault();
		var sort = $(this).attr('href');
		$grid.isotope({filter:sort});
		$(this).addClass('on');
  });
  //-----Work 정렬 끝

  	//-----추천 Place 정렬

	var buttonFilters = {};
	var buttonFilter;
	var qsRegex;

	// init Isotope
	var $place = $('.place-wrap').isotope({
		itemSelector : '.item',
		columnWidth : '.item',
		percentPosition : true,
		transitionDuration : '0.8s',
		layoutMode: 'fitRows',
		filter: function() {
			var $this = $(this);
			var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
			var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
			return searchResult && buttonResult;
		},
	});

	$('.filters').on( 'click', '.button', function() {
		var $this = $(this);
		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		buttonFilters[ filterGroup ] = $this.attr('data-filter');
		buttonFilter = concatValues( buttonFilters );
		$place.isotope();
	});

	var $quicksearch = $('.quicksearch').keyup( debounce( function(e) {
		if(e.keyCode == 13){
			qsRegex = new RegExp( $quicksearch.val(), 'gi' );
			$place.isotope();
			// $('.result').css('display','flex');
			// $('.button-group').css('display','none');
		}

	}) );

	$('.search button').click( debounce( function(e) {
			qsRegex = new RegExp( $quicksearch.val(), 'gi' );
			$place.isotope();
			// $('.result').css('display','flex');
			// $('.button-group').css('display','none');

	}) );
	$('.go-filters').on('click',function(){
		$('.result').css('display','none');
		$('.button-group').css('display','block');
		qsRegex = new RegExp( $quicksearch.val(''), 'gi' );
		$place.isotope();


	});

	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

	function concatValues( obj ) {
		var value = '';
		for ( var prop in obj ) {
			value += obj[ prop ];
		}
		return value;
	}

	function debounce( fn, threshold ) {
		var timeout;
		threshold = threshold || 100;
		return function debounced() {
			clearTimeout( timeout );
			var args = arguments;
			var _this = this;
			function delayed() {
			fn.apply( _this, args );
			}
			timeout = setTimeout( delayed, threshold );
		};
	}
  //-----추천 Place 정렬 끝






  //-----햄버거메뉴
	var burger = $('.menu-trigger');
	burger.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$('html').css('overflow', 'hidden');
		}else{
			$('html').css('overflow', 'auto');
		}
	});
	//-----햄버거메뉴 끝

	 //-----헤더 hover
	$(".nav-menu li, .header-layer").on('mouseover', function(e){
		e.preventDefault();
		$(".header-layer").addClass('active');
		$(".header-top").addClass('active');
		$('html').css('overflow', 'hidden');
	});

	$(".header-layer").on('mouseleave, mouseout ', function(e){
		if( !$('.menu-trigger').hasClass('active')){
			e.preventDefault();
			$(".header-layer").removeClass('active');
			$(".header-top").removeClass('active');
			$('html').css('overflow', 'auto');
		}
	})



	$(".menu-trigger").on('click', function(e){
		if( $(this).hasClass('active')){
			e.preventDefault();
			$(".header-layer").addClass('active');
			$(".header-top").addClass('active');
			burger.addClass('active');
		} else {
			e.preventDefault();
			$(".header-layer").removeClass('active');
			$(".header-top").removeClass('active');
			burger.removeClass('active');

			if( $(window).width() < 1240){
				$(".header-layer-wrap p").removeClass('active');
			}

		}
	 })
	//-----헤더 hover 끝



	$('.select-wrap select').niceSelect();




	//nav 아코디언 메뉴
    $(".header-layer-wrap p").on('click',function(){
		if( $(window).width() < 1240){
        	$(this).toggleClass('active');
		}else{
			$(this).removeClass('active');
		}

    });


	// 탭 메뉴
	$('.tab-ul li').click(function() {
		var activeTab = $(this).attr('data-tab');
		$('.tab-ul li').removeClass('current');
		$('.tabcont').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	})

	//popup
	$( ".pop-close" ).click(function () {
        $(this).parents('.popup').removeClass('show');
		if($(this).parents('.popup').hasClass('video-pop')){
			var vid= $(".popup").find("video").get(0)
			vid.pause();
			vid.currentTime = 0;
			if($(this).hasClass("youtubeplayer")){
				stopVideo();
			}
		}
    })

    $( "[data-pop]" ).click(function () {
		$('.'+$("[data-pop]").attr('data-pop')).removeClass('show');
		var target = $(this).attr('data-pop')
		$('.'+target).addClass('show');


		if(target.substring(0,5) =="video"){
			if($('.'+target).find("video").length != 0){
				var vid= $('.'+target).find("video").get(0)
				vid.play();
			}

			// if($(".popup").find("video").length >= 1){
			// 	var vid= $(".popup").find("video").get(0)
			// 	vid.play();
			// }
		}


	}) ;


	//notice 팝업 오늘하루안보기
	$("#layer1 .pop_check_close").click(function () {
		if($("#layer1 .checkbox-wrap input:checkbox[name=chk]").is(":checked") == true) {
			setCookieMobile( "todayCookie", "done" , 1);
		}
		$("#layer1").hide();
	});





	//스크롤 TOP
	var topEle = $('#topBtn');
	topEle.hide(); // 탑 버튼 숨

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { // 스크롤 내릴 표시
			topEle.fadeIn();
			var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
			if(scrollBottom < 292){
				$('#topBtn').addClass('footertop');
			}else{
				$('#topBtn').removeClass('footertop');
			}
			if(scrollBottom < 195){
				$('#topBtn').css("bottom","230px");
				$('#topBtn').css("position","absolute");
			}else{

				$('#topBtn').css("bottom","40px");
				$('#topBtn').css("position","fixed");
			}
			if( $(window).width() < 1025){
				if(scrollBottom < 410){
					$('#topBtn').addClass('footertop');
				}else{
					$('#topBtn').removeClass('footertop');
				}
			}
			if( $(window).width() < 769){
				if(scrollBottom < 346){
					$('#topBtn').addClass('footertop');
				}else{
					$('#topBtn').removeClass('footertop');
				}
			}

		} else {
			topEle.fadeOut();
		}
	});

	var delay = 500;
	topEle.on('click', function() {
	$('html, body').stop().animate({scrollTop: 0}, delay);
	});
	//스크롤탑 끝


})




function funcThisSize() {

	if( $(window).width() < 1025){
		$(".accordion input[type='checkbox']").prop("checked", false);
		$(".accordion input[type='checkbox']").prop("disabled", false);

	}else{
		$(".accordion input[type='checkbox']").prop("checked", true);
		$(".accordion input[type='checkbox']").prop("disabled", true);
	}

}

