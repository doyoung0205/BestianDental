	$(document).ready(function() {
		
		var menuBig = $('.sidebarMenu');
		
		$('#mobilemenu').on('click', function(e) {
			/* 기본동작 중지코드 ex) A태그 */
			e.preventDefault();
			/*  show - hide 반복 */
			
			$(this).toggleClass("active");
			
			if($(this).hasClass("active")){
				
				
				menuBig.css({
					right:0
				})
					
					
				$('.overlay92').fadeIn();
				
				$('html, body').css({'overflow': 'hidden', 'height': '100%'});
				
				
			}else{
				
				menuBig.css({
					right:-110+"%"
				});
				
			    $('.overlay92').fadeOut();
			    
			    $('html, body').css({'overflow': 'auto', 'height': '100%'});
			    
			    if($("#mainVisual")){
			    	visualModule($("#mainVisual > ul.visual_wrap > li.active").index());
			    }
			}
			
		});
		
		
		$('.overlay92').on('click', function () {
			
			$('#mobilemenu').removeClass("active");
			 
			menuBig.css({
				right:-110+"%"
			});
			
		    $('.overlay92').fadeOut();
		    
		    $('html, body').css({'overflow': 'auto', 'height': '100%'});
		    
		    if($("#mainVisual")){
		    	visualModule($("#mainVisual > ul.visual_wrap > li.active").index());
		    }
		    
		});
		
		$(".headerDoor").mouseover(function(){
			if(!$(".bannerBox").hasClass("active")){
				$(".bannerBox").addClass("active");
			}
		});
		
		$(".headerDoor").mouseleave (function(){
			if($(".bannerBox").hasClass("active")){
				$(".bannerBox").removeClass("active");
			}
		});
		
		/*ul 태그*/
        var $gnbList = $("ul.theory");
        var $gnbMenu = $gnbList.find("> li");
        /*span 태그*/
        var $gnbAcc = $(".liUnder");
        
        /* a 태그*/
        var menuGap = parseInt($gnbMenu.find("> a").css("paddingLeft"));
            
        $gnbMenu.on("mouseenter.hover focusin.hover", function(){
            var gnbAccPos = $(this).offset().left - $(".banner-container").offset().left; 
            var gnbWidth = $(this).find("a").width()*1;
            
            if( gnbAccPos === 0 ) {
                TweenMax.to( $gnbAcc, .1, { x : menuGap,width:gnbWidth } );
            } else {
                TweenMax.to( $gnbAcc, .1, { x : gnbAccPos+menuGap,width:gnbWidth } );
            }
        });
        
        var $uberSection =$(".uberSection");
        var $uberColumn =$uberSection.find(".uberColumn");
        
        $uberColumn.on("mouseenter.hover focusin.hover", function(){
        	
             var curIndex = $(this).index();
             
        	 var gnbAccPos = $gnbMenu.eq(curIndex).find("a").offset().left - $(".banner-container").offset().left; 
        	 var gnbWidth = $gnbMenu.eq(curIndex).find("a").width()*1;
        	
        	if( gnbAccPos === 0 ) {
        		TweenMax.to( $gnbAcc, .1, { x : menuGap,width:gnbWidth } );
        	} else {
        		TweenMax.to( $gnbAcc, .1, { x : gnbAccPos+menuGap,width:gnbWidth } );
        	}
        	
        });
		
	});
	 
	$(window).resize(function() {
		var widthMove = $(window).width();

		$("section.wideBanner").css({
			width : widthMove
		});

	});