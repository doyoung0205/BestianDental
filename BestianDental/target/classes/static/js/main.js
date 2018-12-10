	$(document).ready(function() {

		
		var menuBig = $('.sidebarMenu');

		
		$('#mobilemenu').on('click', function(e) {
			/* 기본동작 중지코드 ex) A태그 */
			e.preventDefault();
			/*  show - hide 반복 */
			
			$(this).toggleClass("active");
			
			if($(this).hasClass("active")){
				
				var exitWidth =$('.sidebarMenu').width();
				
				menuBig.css({
					right:0
				})
					
				$('.exit').css({
					right:exitWidth
				})
					
				$('.overlay92').fadeIn();
				
				$('html').css('overflow-y','hidden');
				
				
			}else{
				
				menuBig.css({
					right:-110+"%"
				});
				
				$('.exit').css({
					right:-110+"%"
				});
				
			    $('.overlay92').fadeOut();
			    $('html').css('overflow-y','auto');
			    
			}
			
		});
		
		
		$('.overlay92').on('click', function () {
			
			$('#mobilemenu').removeClass("active");
			 
			menuBig.css({
				right:-110+"%"
			});
			
			$('.exit').css({
				right:-110+"%"
			});
			
		    $('.overlay92').fadeOut();
		    $('html').css('overflow-y','auto');
		});
		
	});
	 
	$(window).resize(function() {
		var widthMove = $(window).width();

		$("section.wideBanner").css({
			width : widthMove
		})

	});