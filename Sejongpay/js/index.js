	$(function(e){

/*�ܹ��� �޴� ��������*/
			$("div.ham_bar").click(function(){
				$("nav.open").css("display","block");
				$("nav.open").find("div.nav_con").stop().animate({left:"20%"});
				$("div.bg").stop().animate({opacity:"1"});
				$("#nav_menu").css("display","none");
			});

			$("div.btn_off").click(function(){
			$("div.nav_con").stop().animate({left:"100%"});
			$("div.bg").stop().animate({opacity:"0"});
			$("#nav_menu").css("display","block");
		    $("nav.open").css("display","none");
			});


			/*���� 3�� �������� */
			$(".btn_box_1 ul").click(function(){
				var i=$(this).index();
				$(".btn_img_1 ul").find(">li").css("opacity","0");
				$(".btn_img_1 ul").find(">li").eq(i).css("opacity","1");
				$(".btn_box_1 ul").find("li").removeClass("text_on");
				$(this).find(">li:nth-child(1)").addClass("text_on");
				$(".btn_box_1 ul").find("li").removeClass("arrow_on");
				$(this).find(">li.img").addClass("arrow_on");
				$(".btn_box_1 ul").find("em.under_bar").removeClass("under_line");
				$(this).find("em.under_bar").addClass("under_line")
			});

			/*���� 3_2�� �������� */
			$(".btn_box_2 ul").find("li.img").addClass("arrow_off");
			$(".btn_box_2 ul").click(function(){
				var i=$(this).index();
				$(".btn_img_2 ul").find(">li").css("opacity","0");
				$(".btn_img_2 ul").find(">li").eq(i).css("opacity","1");
				$(".btn_box_2 ul").find("li").removeClass("text_on");
				$(this).find(">li:nth-child(1)").addClass("text_on");
				$(".btn_box_2 ul").find("li").removeClass("arrow_on");
				$(this).find(">li.img").addClass("arrow_on");
				$(".btn_box_2 ul").find("em.under_bar").removeClass("under_line");
				$(this).find("em.under_bar").addClass("under_line")



			});


		/*���� ��ũ�� �� ��������*/
		$("ul.pos_menu_tab > li").click(function(){
			var i =$(this).index();
			var section=$(".pppp").eq(i);
			var tt =section.offset().top;
			var tg=$(this);

			$("ul.pos_menu_tab > li").find(">a").removeClass("menu_tab");
			$(this).find(">a").addClass("menu_tab");

			$("html").stop().animate({scrollTop:tt});

			return false;
	});
		$(window).scroll(function(){

				var sct=$(window).scrollTop();

				$(".window_tap").each(function(){
					var tg=$(this);
					var i=tg.index();
					if(tg.offset().top<=sct){
						$("ul.pos_menu_tab > li").find(">a").removeClass("menu_tab");
						$("ul.pos_menu_tab > li").eq(i).find(">a").addClass("menu_tab");


					}return false;
			});

		});




});
// 팝업 스크립트




$(function() {

  var contents = $(".ppppp");
  var pop = $(".pop_close");
  var pop2 = $(".pop_close2");



  /**************************************************************************************
  햄버거 메뉴 제이쿼리
  *************************************************************************************/
  $("div.ham_bar").click(function() {
    $("nav.open").css("display", "block");
    $("nav.open").find("div.nav_con").stop().animate({
      left: "20%"
    });
    $("div.bg").stop().animate({
      opacity: "1"
    });
    $("#nav_menu").css("display", "none");
  });

  $("div.btn_off").click(function() {
    $("div.nav_con").stop().animate({
      left: "100%"
    });
    $("div.bg").stop().animate({
      opacity: "0"
    });
    $("#nav_menu").css("display", "block");
    $("nav.open").css("display", "none");
  });




  /**************************************************************************************
  고정스크롤바 제이쿼리
  *************************************************************************************/
  $("ul.pos_menu_tab > li").click(function() {
    var i = $(this).index();
    var section = $(".pppp").eq(i);
    var tt = section.offset().top;
    var tg = $(this);

    $("ul.pos_menu_tab > li").find(">a").removeClass("menu_tab");
    $(this).find(">a").addClass("menu_tab");

    $("html, body").stop().animate({
      scrollTop: tt
    });

    return false;
  });

  /**************************************************************************************
  해더 메뉴 제이쿼리
  *************************************************************************************/
  $(window).scroll(function() {

    if ($(document).scrollTop() > 10) {
      $('header').css('background', 'white');
      $('header #top_menu').css('background', 'white');
      $('header #top_menu').css('border-bottom', '1px solid lightgray');
      $('nav a').css('color', 'black');
      $('.ham_bar span').css('background', 'black');
      $('#util_menu a').css('color', 'black');
      $('	#util_menu > ul > li:nth-child(3) a').css('color', 'red');
      $('	nav > ul > li:nth-child(1) a').css('color', 'red');
      $('#nav_menu > h1').get(0).style.cssText = '    background: url(https://www.sejongpay.co.kr/main.sjt/../images/common/logo_b.png) 0 0 no-repeat;     background-size: 12.5rem, 2.875rem; 	width:12.5rem; 	height:3rem;  transition: 0.2s;	text-indent:-9999px; position:relative; top:18px; '
      $('#util_menu > ul > li:nth-child(2) a').get(0).style.cssText = '   background: url(https://www.sejongpay.co.kr/images/common/icon_faq_b.png) 0 0 no-repeat; width:100%; height:100%;  transition: 0.2s; color:black;'




    } else if ($(document).scrollTop() < 10) {
      $('header').css('background', 'none');
      $('.ham_bar span').css('background', 'white');
      $('nav a').css('color', 'white');
      $('header #top_menu').css('background', 'rgba(0, 0, 0, 0.2)');
      $('header #top_menu').css('border-bottom', 'none');
      $('nav > ul > li:nth-child(1) a').css('color', 'red');
      $('#util_menu a').css('color', 'white');
      $('	#util_menu > ul > li:nth-child(3) a').css('color', 'red');
      $('#nav_menu > h1').get(0).style.cssText = '    background: url(https://www.sejongpay.co.kr/main.sjt/../images/common/logo_w.png) 0 0 no-repeat;     background-size: 12.5rem, 2.875rem; 	width:12.5rem; 	height:3rem;     transition: 0.2s;	text-indent:-9999px; position:relative; top:18px; '
      $('#util_menu > ul > li:nth-child(2) a').get(0).style.cssText = '   background: url(https://www.sejongpay.co.kr/images/common/icon_faq_w.png) 0 0 no-repeat; width:100%; height:100%;  transition: 0.2s; color:white;'

    }
  });
  /**************************************************************************************
  마우스 휠 제이쿼리
  *************************************************************************************/
	window.onload = function () {
	            $("#wrap  .pppp").each(function () {
	                // 개별적으로 Wheel 이벤트 적용
	                $(this).on("mousewheel DOMMouseScroll", function (e) {
	                    e.preventDefault();
	                    var delta = 0;
	                   var moveTop = null;
	                    if (!event) event = window.event;
	                    if (event.wheelDelta) {
	                        delta = event.wheelDelta / 120;
	                        if (window.opera) delta = -delta;
	                    } else if (event.detail) delta = -event.detail / 3;
	                 
	                    // 마우스휠을 위에서 아래로
	                    if (delta < 0) {
	                        if ($(this).next() != undefined) {
	                            moveTop = $(this).next().offset().top -10;
	                        }
	                    // 마우스휠을 아래에서 위로
	                    } else {
	                        if ($(this).prev() != undefined) {
	                            moveTop = $(this).prev().offset().top -10 ;
	console.log(moveTop)                        }
	                    }
	                    // 화면 이동 0.8초(800)
	                    $("html,body").stop().animate({
	                        scrollTop: moveTop + 'px'
	                    }, {
	                        duration: 500, complete: function () {
	                        }
	                    });
	                });
	            });
	        }


  /**************************************************************************************
  마우스 휠 - 포스메뉴 제이쿼리
  *************************************************************************************/
  $(document).scroll(function() {


    var half = ($(".p_2").offset().top - $(".p_1").offset().top) / 2;
    var scroll_1 = 0;
    var scroll_2 = $(".p_2").offset().top - half;
    var scroll_3 = $(".p_3").offset().top - half;
    var scroll_4 = $(".p_3_2").offset().top - half;
    var scroll_5 = $(".p_4").offset().top - half;
    var scroll_6 = $(".p_5").offset().top - half;

    if ($(document).scrollTop() >= scroll_1 && $(document).scrollTop() <= scroll_2) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(1)").find("a").addClass("menu_tab");
    } else if ($(document).scrollTop() >= scroll_2 && $(document).scrollTop() <= scroll_3) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(2)").find("a").addClass("menu_tab");
    } else if ($(document).scrollTop() >= scroll_3 && $(document).scrollTop() <= scroll_4) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(3)").find("a").addClass("menu_tab");

    } else if ($(document).scrollTop() >= scroll_4 && $(document).scrollTop() <= scroll_5) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(4)").find("a").addClass("menu_tab");

    } else if ($(document).scrollTop() >= scroll_5 && $(document).scrollTop() <= scroll_6) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(5)").find("a").addClass("menu_tab");

    } else if ($(document).scrollTop() >= scroll_6) {
      $("ul.pos_menu_tab li").find("a").removeClass("menu_tab");
      $("ul.pos_menu_tab li:nth-child(6)").find("a").addClass("menu_tab");

    }
  });

  /**************************************************************************************
  스크롤 버튼 제이쿼리
  *************************************************************************************/
	$(function(){
   	var btn = $("#btn_scroll");
    var contents = $('#contents > div')


		btn.on('click',function(){
			event.preventDefault
		var tg = $(this)
		var i = tg.index();

		var section = contents.eq(i);
		var tt = section. offset().top+153; // 가로 안붙음



			btn.removeClass('on');
			$(this).addClass('on');   // $ 지우고 tg.eq(i)
			$('html,body').stop().animate({scrollTop:tt})
	});

		$(window).scroll(function(){
			var sct = $(window).scrollTop();

			contents.each(function(){
				var tg = $(this);
				var i = tg.index();
				  if(tg.offset().top <= sct){
					btn.removeClass('on');
					btn.eq(i).addClass('on');
				  }
			})
		})
});


  /**************************************************************************************
  팝업창 제이쿼리
  *************************************************************************************/

  pop2.on('click', function() {
    $('#pop_left').css('display', 'none');
  });
  pop.on('click', function() {
    $('#pop_right').css('display', 'none');
  });

  /**************************************************************************************
  햄버거메뉴 제이쿼리
  *************************************************************************************/
  $("div.ham_bar").click(function() {
    $("nav.open").css("display", "block");
    $("nav.open").find("div.nav_con").stop().animate({
      left: "20%"
    });
    $("div.bg").stop().animate({
      opacity: "1"
    });
    $("#nav_menu").css("display", "none");
  });

  $("div.btn_off").click(function() {
    $("div.nav_con").stop().animate({
      left: "100%"
    });
    $("div.bg").stop().animate({
      opacity: "0"
    });
    $("#nav_menu").css("display", "block");
    $("nav.open").css("display", "none");
  });

  /**************************************************************************************
  섹션 3번 제이쿼리
  *************************************************************************************/
  $(".btn_box_1 ul").click(function() {
    var i = $(this).index();
    $(".btn_img_1 ul").find(">li").css("opacity", "0");
    $(".btn_img_1 ul").find(">li").eq(i).css("opacity", "1");
    $(".btn_box_1 ul").find("li").removeClass("text_on");
    $(this).find(">li:nth-child(1)").addClass("text_on");
    $(".btn_box_1 ul").find("li").removeClass("arrow_on");
    $(this).find(">li.img").addClass("arrow_on");
    $(".btn_box_1 ul").find("em.under_bar").removeClass("under_line");
    $(this).find("em.under_bar").addClass("under_line")
  });

  /**************************************************************************************
  섹션 3_2번 제이쿼리
  *************************************************************************************/
  $(".btn_box_2 ul").find("li.img").addClass("arrow_off");
  $(".btn_box_2 ul").click(function() {
    var i = $(this).index();
    $(".btn_img_2 ul").find(">li").css("opacity", "0");
    $(".btn_img_2 ul").find(">li").eq(i).css("opacity", "1");
    $(".btn_box_2 ul").find("li").removeClass("text_on");
    $(this).find(">li:nth-child(1)").addClass("text_on");
    $(".btn_box_2 ul").find("li").removeClass("arrow_on");
    $(this).find(">li.img").addClass("arrow_on");
    $(".btn_box_2 ul").find("em.under_bar").removeClass("under_line");
    $(this).find("em.under_bar").addClass("under_line")



  });

  $('.img_con_m').flexslider({
    animation: "slide",
    slideshow: true,
    slideshowSpeed: 5000
  });
});
