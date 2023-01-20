$(function () {
	gnb();
	function gnb() {
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
	}

	var current = 0; //current
	var prev = null; //prev
	var next = null; //next
	var mainInterval; //setIntervalID
	var speed = 2000; //반복시간
	var pause_css = $(".pause_css").css("display");
	var slides = $(".slide_cover ul li");
	var obj = {
		btn: $(".slide_btn ul li"),
		btn_ani: $(".color"),
		left: $(".cursor_left"),
		right: $(".cursor_right"),
		wbox: $(".white_box"),
		cbox: $(".box"),
		logo: $(".img_logo"),
		text: $(".img_text"),
		reset: $(".reset"),
		pause: $(".pause_btn"),
		play: $(".play_btn"),
		remove: function (x) {
			x.removeClass("on");
		},
		add: function (x) {
			x.addClass("on");
		},
	};

	/**
	 * 시간마다 인덱스 계산, slide함수 호출함
	 * * */
	//timer();
	function timer() {
		mainInterval = setInterval(function () {
			current++; //	0(1)=0+1
			prev = current - 1; //null(0)=1-1
			if (current == 3) {
				current = 0;
			}
			slide();
		}, speed);
	}

	function slide() {
		obj.btn.off("click");
		obj.left.off("click");
		obj.right.off("click");
		obj.reset.off("click", reset);
		clearInterval(mainInterval);

		slides
			.find(obj.wbox)
			.css("left", "-100%")
			.stop()
			.animate({ left: "0%" }, 1000, function () {
				obj.wbox.stop().animate({ left: "100%" }, 1000);
				//obj.remove()
				//obj.add()
				obj.add(slides.eq(current)); //1
				obj.remove(slides.eq(prev)); //0
				//모든 애니메이트 요소 삭제
				obj.remove(obj.btn_ani);
				obj.remove(obj.logo);
				obj.remove(obj.text);
				obj.remove(obj.cbox);

				obj.add(obj.btn.eq(current).find(obj.btn_ani)); //1
				obj.add(slides.eq(current).find(obj.logo));
				obj.add(slides.eq(current).find(obj.text));
				obj.add(slides.eq(current).find(obj.cbox));
				obj.remove(slides.find("a img"));
				obj.add(slides.eq(current).find("a img"));
			});
		//1초후 한번 	클릭이벤트 실행
		setTimeout(function () {
			//trigger
			slides.on("click", click_slide);
			obj.left.on("click", left_click);
			obj.right.on("click", right_click);

			if (pause_css == "none") {
				clearInterval(mainInterval);
				obj.remove(obj.btn_ani)
				//$(".color").removeClass("on");
			} else {
				timer();
				obj.add(obj.btn.eq(current).find(obj.btn_ani))
			}
		}, 1000);
		next = current;//1
	}

	/**
	 * click_slide
	 * pager 함수
	 *
	 * **/
	function click_slide() {
		current = $(this).index();
		if (current == next) return;
		prev = next;
		slide();
		obj.remove(obj.btn_ani)
		//$(".color").removeClass("on");
	}

	/**
	 * left_click
	 * left 커서함수
	 *
	 * **/
	function left_click() {
		current--;
		if (current == -1) current = 2;
		if (current == next) return;
		prev = next;
		slide();
		obj.remove(obj.btn_ani)
	
	}

	/**
	 * right_click
	 * right 커서함수
	 *
	 * ***/
	function right_click() {
		current++;
		if (current == 3) current = 0;
		if (current == next) return;
		prev = next;
		slide();
		obj.remove(obj.btn_ani)
	}

	/**
	 * reset
	 * play,stop
	 *
	 * ***/
	/* 비동기 함수 */
	function reset() {
		if (pause_css == "none") {
			clearInterval(mainInterval);
			obj.remove(obj.btn_ani)
		} else {
			timer();
			obj.add(obj.btn.eq(current).find(obj.btn_ani))
		}
	}

	/**이벤트 핸들러 */
	obj.reset.click(function () {
		reset();
	});
	obj.pause.click(function () {
		obj.pause.css("display", "none");
		obj.play.css("display", "block");
	});
	obj.play.click(function () {
		obj.pause.css("display", "block");
		obj.play.css("display", "none");
	});

	obj.btn.on("click", click_slide);
	obj.left.on("click", left_click);
	obj.right.on("click", right_click);

	$(".main_cursor").mousemove(function (e) {
		var x = e.clientX;
		var y = e.clientY - 80;
		$(".cursor").css({
			left: x,
			top: y,
		});
	});

	/***
	 * Resize
	 * * */

	$(window).resize(function () {
		var w_width = $(window).width();
		var img_height = $(".slide_cover ul li img.pc").height();
		var img_height_mo = $(".slide_cover ul li img.mo").height();
		if (w_width > 1330) {
			$("#main_slide .slide_cover,#main_slide").height(img_height);
		} else {
			$("#main_slide .slide_cover,#main_slide").height(img_height_mo);
			$(".slide_cover ul li img.pc").css("display", "none");
			$(".slide_cover ul li img.mo").css("display", "block");
		}
	});

	$(window).trigger("resize");
}); //jQuery
