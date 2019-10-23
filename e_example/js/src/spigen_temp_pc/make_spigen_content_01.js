// make_spigen_content_01.js

(function($){
  // console.log('load');
  const conArea = $('.content_area');
  const conDt = conArea.find('dt');
  const conDtBtn = conDt.children('button');
  // const conDd = conArea.find('dd');
  
  conDt.children('button').on('click focus',function(e){
    e.preventDefault();
    let btn = $(this);
    let btnParent = btn.parent();
    let parNext = btnParent.next('dd');

  btn.addClass('action');
  btnParent.siblings('dt').children('button').removeClass('action');

/* // step_1  =클릭시 컬러변환=
  parNext.addClass('action');
  parNext.siblings('dd').removeClass('action'); 
*/

   // step_2
   parNext.stop().fadeIn();
   parNext.siblings('dd').fadeOut();
  //  action 클래스 이름으로 구분만 할 수 있도록 처리하고,
  //  css에서 동작하지 않도록 처리
  });

  // ==================================================================================
    


  let imgUrl = "../img/spigen/";
    const mediaList = [
      {text:'[youtube] 아마존으로 2600억 매출',
       date:'2019.10.22',
       img:'media_01.jpg'},
      
      {text:'슈피겐코리아 미국 아마존 독점유통',
       date:'2019.10.20',
       img:'media_02.jpg'},
      
      {text:'[youtube] \'취업비자\' 기업탐방',
       date:'2019.10.10',
       img:'media_03.jpg'}
      ];
    // mediaList[0].text 를 사용하면 가져올 수 있다.
    // mediaList[1].date  
    
    const blogList = [
      {text:'[youtube] 아마존으로 2600억 매출',
       date:'2019.10.22',
       img:'blog_01.jpg'},
      
      {text:'슈피겐코리아 미국 아마존 독점유통',
       date:'2019.10.20',
       img:'blog_02.jpg'},
      
      {text:'[youtube] \'취업비자\' 기업탐방',
       date:'2019.10.10',
       img:'blog_03.jpg'}
      ];

      
    const ForList = function(mySel,myList,myText){
    let tabBox = conArea.find(mySel);
    const bmText = '<div class="album">\<a href=""><h4><h4><pclass="con"><p><p class="date"></p></a></div>';
    // for(최초의값; 조건비교; 값의증감){}
    for(let i = 0; i < myList.length; i++){
      tabBox.append(bmText);
      let myNth = tabBox.children('.album').eq(i);
      
      myNth.find('h4').text(myText);
      myNth.find('.con').text(myList[i].text);
      myNth.find('.date').text(myList[i].date);

      let myImg = imgUrl + myList[i].img;
      myNth.css({'backgroundImage':'url(' + myImg + ')',
                 'backgroundRepeat':'no-repeat',
                 'background-position':'50% 50%'});
      // myNth.css({'backgroundImage':`url(${myImg})`});
    }
 }; // Forlist() End

  ForList('.media',mediaList,'media');
  ForList('.blog',blogList,'blog');



    //  * TODO :
    //  * 1. 사전 이미지 저장 (배열요소에 이미지담고,반복문에 포함)
    
    
    // 2. 키보드 제어 (dt>button에 키보드를 설정)
    conDtBtn.on('keyup',function(e){
      // console.log(e.keyCode);
      // 왼쪽37,오른쪽39,위38,아래40
      let num = e.keyCode;
      let beforeKey = num === 37 || num === 38; // 둘중하나가 참이면 참 도출
      let afterKey = num === 39 || num === 40; // 둘중하나가 참이면 참 도출
      let pdt = $(this).parent(conDt);
      
      if(beforeKey){
        pdt.prevAll('dt').find('button').focus();

      }else if(afterKey){
        pdt.nextAll('dt').find('button').focus();
      }



    }); 



})(jQuery);