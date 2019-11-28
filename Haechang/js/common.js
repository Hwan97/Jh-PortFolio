

$(function(){
  var menuDiv = $(".menuDiv");
  	var menuBtn = $(".menubt");
  	var menuClose = $(".btn_off");
  	var black = $(".dimdBg");


  	menuDiv.css({"right":"-320px"});

  	menuBtn.click(function(){
  		menuDiv.stop().animate({"right":"0px"});
      menuDiv.css('display','block')
  		black.css({"display":"block","opacity":"0"}).stop().animate({"opacity":"0.8"},300);
      $(".navbar-brand").stop().animate({"opacity":"0"},500);
      $('.bod_top').animate({left:"-101%"},500)
  	});

  	menuClose.click(function(){
  		menuDiv.stop().animate({"right":"-320px"});
  		black.hide();
      $(".navbar-brand").stop().animate({"opacity":"1"},500);
      $('.bod_top').stop().animate({left:"0%"},500)
  	});

  	black.click(function(){
  		menuDiv.stop().animate({"right":"-320px"});
  		black.hide();
  	});
  });
  $(window).scroll(function() {

    if ($(document).scrollTop() > 10) {
      $(".top_call_box").stop().animate().css('padding','5px')
      }
    else if ($(document).scrollTop() < 10) {
        $(".top_call_box").stop().animate().css('padding','10px')
        }

        if ($(document).scrollTop() > 1100) {
          $("#po").animate({
            opacity: "1",
            right:"0%"
          }, 1000)

        }
        if ($(document).scrollTop() > 800) {
          $("#target").animate({
            opacity: "1",
            top:"0"
          }, 1000)
        }
});
      function test(){
         	jQuery.scrollSpeed(150, 900);
      }
      $(test);
      // ie scroll attachment
      if(navigator.userAgent.match(/Trident\/7\./)) {
         $('body').on("mousewheel", function () {
             event.preventDefault();

             var wheelDelta = event.wheelDelta;

             var currentScrollPosition = window.pageYOffset;
             window.scrollTo(0, currentScrollPosition - wheelDelta);
         }, );

         $('body').keydown(function (e) {
             e.preventDefault(); // prevent the default action (scroll / move caret)
             var currentScrollPosition = window.pageYOffset;

             switch (e.which) {

                 case 38: // up
                     window.scrollTo(0, currentScrollPosition - 120);
                     break;

                 case 40: // down
                     window.scrollTo(0, currentScrollPosition + 120);
                     break;

                 default: return; // exit this handler for other keys
             }
         });
     }

     
    