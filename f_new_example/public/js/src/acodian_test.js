// acodion_test.js

/* (function($){
  const menuV = $('.acodian_test')
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');

  menuDd.eq(0).show();

  menuDt.contents().wrap('<a href="#"></a>');
  const menuDtLink = menuDt.find('a');

  menuDtLink.css({'display':'block','width':'100%','color':'inherit'});

  menuDt.on('click',function(){
    let i = $(this).index() /2;
    menuDd.eq(i).siblings('dd').stop().slideUp();
    menuDd.eq(i).stop().slideToggle();
  });

  const addC   = function() { $(this).addClass('action');    };
  const remove = function() { $(this).removeClass('action'); };

  menuDtLink.on({"focus":addC,"blur":removeC});


})(jQuery); */


(function($){
  const menuV = $('.acodion_test')
  const menuDt = menuV.find('dt');
  const menuDd = menuV.find('dd');
  
  menuDd.eq(0).show();

  menuDt.contents().wrap('<a href="#"></a>'); 
  const menuDtLink = menuDt.find('a');

  menuDtLink.css({'display':'block','width':'100%','color':'inherit'});
  
  
  menuDt.on('click',function(){
    let i = $(this).index() /2;
    menuDd.eq(i).siblings('dd').stop().slideUp();
    menuDd.eq(i).stop().slideToggle();
  });
  
  const addC   = function() { $(this).addClass('action');    };
  const remove = function() { $(this).removeClass('action'); };

  menuDtLink.on({"focus":addC,"blur":removeC});

/*   const ulNews = $('.new_list');
  ulNews.wrap('<div id="news"></div>');
  for(let i=0; i<5; i++){
    ulNews.append('<li>list value0' + (i+1) +'생성하기</li>')
    // ulNews.children('li').eq(i).text()
  } */


 })(jQuery);