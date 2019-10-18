// make_spigen_main_pc

(function($){
  // 1.#gnb영역 내부에 있는 ul의 내용을 .side_gnb_area에 복사해서 붙여넣기
  // clone() 메소드를 사용

  const gnb = $('#gnb');
  const sideGnbArea = $('.side_gnb_area');

  let gnbContents = gnb.contents().clone();
  // console.log(gnbContents);
  sideGnbArea.append(gnbContents);
  // ===================================================
  // 버튼 클릭시 .side_gnb_area 나타나게 만들기
  const openGnbBtn = $('.gnb_btn > button');
  const closeGnbBtn = $('.close_gnb_btn > button');
  const sideGnb = $ ('.side_gnb');
  let time = 600;

  openGnbBtn.on('click',function(e){
    e.preventDefault();
    sideGnb.fadeIn(time/2);
  });
  
  closeGnbBtn.on('click',function(e){
    e.preventDefault();
  sideGnb.fadeOut(time);
  });

  // #gnb에 마우스 올렸을 경우 dd를 나오게 만들기
  const gnbDd = gnb.find('dd');

  gnb.on('mouseenter',function(){
    gnbDd.stop().slideDown();
  });

  gnb.on('mouseleave',function(){
    gnbDd.stop().slideUp();
  });

  // #gnb dt에 focus 처리되면 dd가 나타나게 만들기
  // 포커스가 끝난후 블러처리
  const gnbDt = gnb.find('dt');
  // a , button , form(input,textarea,select)
  const gnbTitleLink = gnbDt.children('a');
  const gnbListLink = gnbDd.children('a');

  gnbTitleLink.on('focus',function(){
    gnbDd.stop().slideDown();
  });

  gnbListLink.eq(-1).on('blur',function(){
    gnbDd.stop().slideUp();
  });

})(jQuery);