// slideAll_viewBox.js
(function($){
  const viewBox = $('#viewBox');
  const slideWrap = viewBox.find('.slide_wrap');
  const slideForm = viewBox.find('.slide_form');
  let slideEach = slideWrap.children('div');
  
  slideEach.eq(-1).clone(true).prependTo(slideWrap);
  
  slideEach = slideWrap.children('div');
  let slideLen = slideEach.length;
  console.log(slideLen);
  slideWrap.css({width:100 * slideLen + '%'});
  slideEach.css({width:100 / slideLen + '%'});

  // 버튼 생성 =====================================================
  // 좌우버튼
  const slideBtn = function(rel){
  if(rel){slideForm.before('\
        <div class="view_btn">\
          <button type="button" class="next"><i class="fas fa-arrow-alt-circle-right"></i>\
          <span>다음내용 보기</span>\
          </button>\
          <button type="button" class="prev"><i class="fas fa-arrow-alt-circle-left"></i>\
          <span>이전내용 보기</span>\
          </button>\
        </div>'); }
};
slideBtn(true);

// 인디케이터 영역 -----------------------------------------------------
slideForm.before('<ul class="indicator"></ul>');
const indi = viewBox.find('.indicator');
for(let i=0; i < slideLen-1; i++){
 indi.append('<li><a href=""><span></span></a></li>');
 let indiLi = indi.children('li').eq(i);
 indiLi.find('span').text(slideEach.eq(i+1).text());
 indiLi.find('span').css({display:'block',width:0, height:0, Overflow:'hidden'});
}

const indiLi = indi.children('li');
indiLi.eq(0).addClass('action');

// =============================================
//좌우버튼 클릭시 이동
let n =0;
const viewBtn = viewBox.find('.view_btn').find('button');
viewBtn.on('click',function(e){
  e.preventDefault();
  // console.log($(this));
  let has = $(this).hasClass('next');
  if(has){//다음버튼 클릭
    n++;
    if(n>=slideLen-1){n=0;
      slideWrap.css({ 'left': '100%'});
    }
  }else{//이전버튼 클릭
    n--;
  };
  slideWrap.stop().animate({ 'left': -100 * n + '%' }, function () {
    if (n <= -1) {
      n = slideLen - 2;
      slideWrap.css({ 'left': -100 * n + '%' });
    }
  });//slideWrap.animate
  indiLi.eq(n).siblings().removeClass('action');
  indiLi.eq(n).addClass('action');
}); //viewBtn
//======================
//인디케이터 선택시
indiLi.children('a').on('focus',function(e){
  e.preventDefault;
  n = $(this).parent('li').index();
  slideWrap.stop().animate({ 'left': -100 * n + '%' });
  indiLi.eq(n).siblings().removeClass('action');
  indiLi.eq(n).addClass('action');

  //  a를 클릭시에는 해당하는 광고배너로 포커스 처리하게 만들어라
  $(this).on('click',function(e){
    e.preventDefault();
    slideEach.eq(n+1).find('a').focus();
  });

});//indiLi.children('a').on('focus')
  
})(jQuery);