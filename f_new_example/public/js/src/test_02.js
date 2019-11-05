(function(){
  const miniProduct = $('#miniProduct');
  const btn = miniProduct.children('.btn');
  const pro = miniProduct.children('.product');
  const myBtn = btn.find('button');
  const myUl = pro.find('ul');


  myBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();
    console.log( i);
    
  myBtn.removeClass('action');
  $(this).addClass('action');
  myUl.stop().animate({'left':-100 * i + '%'});





  });

})(jQuery);