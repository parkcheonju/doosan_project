document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});
/* 문서의 요소(태그)가 다 준비되면 실행해 */
/* $(값) <- 제이쿼리 객체 <- 제이쿼리 함수를 실행할수 있음  */
$(function () {
	$(".full_menu, .nav li").mouseover(function () {
		$(".full_menu").stop().slideDown(600);
	});
	$(".full_menu, .nav li").mouseleave(function () {
		$(".full_menu").stop().slideUp(600);
	});
	$(".full_cover>ul>li").mouseover(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "100%");
	});
	$(".full_cover>ul>li").mouseleave(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "0%");
	});
	$(".nav li").mouseover(function () {
		$(this).find(".line").css("width", "100%");
	});
	$(".nav li").mouseleave(function () {
		$(this).find(".line").css("width", "0%");
	});
	$("#header .mo").click(function () {
		$(".mo_menu").stop().slideToggle("fast");
		$("#header .mo").css("color", "red");
	});

	/**
	 * mainCarousel
	 * 시간마다 일시키는 timer
	 * 애니메이션효과를 갖고있는 slide
	 * * */
	var i = 0,
		k = null,
		repeat;
	timer();
	function timer() {
		setInterval(function () {
			i++;
			k = i - 1;
			if (i == 3) {
				i = 0;
			}
			slide();
		}, 2000);
	}

	function slide() {
    //-100% -> 0 -> 100%
		$(".white_box").css("left", "-100%").stop().animate({ left: "0%" }, 1000,function(){
      $(".white_box").stop().animate({left:"100%"},1000)
    });
		$(".slide_cover ul li").eq(i).addClass("on");
		$(".slide_cover ul li").eq(k).removeClass("on");
		$(".slide_cover ul li").eq(i).find(".img_logo").addClass("on");
		$(".slide_cover ul li").eq(i).find(".img_text").addClass("on");
		$(".slide_cover ul li").eq(i).find(".box").addClass("on");
		$(".slide_cover ul li").eq(i).find("a img").addClass("on");
		$(".slide_cover ul li a img").removeClass("on");		
	}
}); //jQuery




	/**
	 * mainCarousel
	 * 시간마다 일시키는 timer
	 * 애니메이션효과를 갖고있는 slide
	 * * */
   var i = 0,
   k = null,
   repeat;
 timer();
 function timer() {
   setInterval(function () {
     i++;
     k = i - 1;
     if (i == 3) {
       i = 0;
     }
     slide();
   }, 2000);
 }

 function slide() {
   //-100% -> 0 -> 100%
   $(".slide_cover ul li").eq(i).addClass("on");
   $(".slide_cover ul li").eq(k).removeClass("on");

 }