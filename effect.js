$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();

        // --- BACKGROUND IMAGE LOGIC START ---
        var currentBg = 1;
        var totalBg = 9;

        function changeBackground() {
            // Note: Ensure your images are .jpg and in the 'images' folder
            var imagePath = 'bg' + currentBg + '.jpg';
            
            $('body').css({
                'background-image': 'url("' + imagePath + '")',
                'background-size': 'cover',
                'background-position': 'center',
                'background-attachment': 'fixed'
            });

            // This overrides the 'peach' background color so the image is visible
            $('body').removeClass('peach').addClass('peach-after');

            currentBg++;
            if (currentBg > totalBg) {
                currentBg = 1;
            }
        }

        changeBackground(); // Load first image immediately
        setInterval(changeBackground, 5000); // Change image every 5 seconds
        // --- BACKGROUND IMAGE LOGIC END ---

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloons').css('opacity','0.9');
		$('.balloons').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').removeClass('balloons-rotate-behaviour-one');
		$('.balloons').addClass('balloons-rotate-behaviour-two');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		$(this).fadeOut('slow').promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast');
		$('.message p:nth-child(1)').fadeIn('slow').delay(5000).promise().done(function(){
			typeWrite($('.message p:nth-child(2)'));
		});
		
		function typeWrite(el){
			var text = el.text();
			el.text('');
			el.show();
			var i = 0;
			var timer = setInterval(function(){
				if(i < text.length){
					el.append(text.charAt(i));
					i++;
				}else{
					clearInterval(timer);
					el.delay(3000).fadeOut('slow',function(){
						if(el.next().length > 0){
							typeWrite(el.next());
						}else{
							$('.cake').fadeIn('slow');
						}
					});
				}
			}, 100);
		}
	});
});