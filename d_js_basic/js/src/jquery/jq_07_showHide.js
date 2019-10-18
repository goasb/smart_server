// jq_07_showHide.css
(function($){
  const showhide      = $('.showHide').children('li');
  const fade          = $('.fade').children('li');
  const slide         = $('.slide').children('li');
  const class_control = $('.class_control').children('li');

  const viewBox = $('.view_area');

  // show , hide , toggle
  showhide.eq(0).on('click',function(){ 
    viewBox.show(500);
  });
  showhide.eq(1).on('click',function(){ 
    viewBox.hide(500);
  });
  showhide.eq(2).on('click',function(){ 
    viewBox.toggle(500);
  });
  // ===================================================
  
  // fadeIn , fadeOut , fadeToggle
  fade.eq(0).on('click',function(){   viewBox.fadeIn(500);     });
  fade.eq(1).on('click',function(){   viewBox.fadeOut(500);    });
  fade.eq(2).on('click',function(){   viewBox.fadeToggle(500); });
  
  // ===================================================
  
  // slideDown , slideUp , slideToggle
  slide.eq(0).on('click',function(){ viewBox.slideDown();    });
  slide.eq(1).on('click',function(){ viewBox.slideUp();      });
  slide.eq(2).on('click',function(){ viewBox.slideToggle();  });

  // ===================================================
  
  // addClass , removeClass , toggleClass
  class_control.eq(0).on('click',function(){ 
    viewBox.removeAttr('style');
    viewBox.addClass('act');     
  });
  class_control.eq(1).on('click',function(){ 
    viewBox.removeAttr('style');
    viewBox.removeClass('act');  
  });
  class_control.eq(2).on('click',function(){ 
    viewBox.removeAttr('style');
    viewBox.toggleClass('act');  
  });
  
  // ===================================================

})(jQuery);