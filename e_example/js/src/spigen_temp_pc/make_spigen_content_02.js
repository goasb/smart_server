// make_spigen_content_02.js

(function($){
  const conBox2 = $('#conBox2');
  const conBoxLink = conBox2.find('ul>li>a');
  // console.log(conBox2.offset().top);
  
  // .action
  conBoxLink.on('mouseenter focus',function(){
             $(this).addClass('action');
  })
            .on('mouseleave blur',function(){
             $(this).removeClass('action');
  });
// ============================================================
/** 스크롤바가 일저량 움직였을 경우에 .top_move_btn 생성되게 만들기
 * 사용된 이벤트는 scroll
 * scrollTop() : 스크롤바의 움직인 위치값을 파악
 * offset().top , offset().left :
 * mousewheel , DOMMouseScroll  :
 * 상단 네비게이션 js기능으로 처리 :
 */

 let conBoxOffset = conBox2.offset().top;
 const topBtn = $('.top_move_btn');
 const win = $(window);


 win.on('scroll',() => { // 화살표 함수는 function과 같다
  let scrollResult = $(this).scrollTop();
  if(scrollResult > conBoxOffset){
    topBtn.fadeIn();
  }else{
    topBtn.fadeOut();
  }
});

// 버튼클릭시 상위로 이동 ================================
  topBtn.on('click',(e) => {
    e.preventDefault();
    $('html,body').stop().animate({'scrollTop':0}, ()=>{
      $('h1 > a').focus();
    });
  });
// 버튼클릭시 상위로 이동 ================================


  /** 자주사용하는 이벤트1
   *  mouseenter , mouserleave
   * click , focus , blur
   * keyUp
   * ==============================
   * 자주사용하는 메소드
   * 선택자 (자식,부모,형제)
   * show/hide , addClass / removeClass
   * after , removeAttr
   * ===============================
   * 불러오거나 삽입하는 기능
   * text , append , prepend
   * load
   * ===============================
   * 자주사용하는 문법
   * 연산자
   * if , switch
   * for
   * function (){}
   * var , const , let
   */ 

})(jQuery);