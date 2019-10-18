// jq_03.js

(function($){
// $()
$('#myBox').css({'width':'80%','height':'900px','margin':'auto','backgroundColor':'#ddd'});

// 생성(요소,값)
/* ES6 기반의 코드
const myBox = document.querySelector('#myBox');
const myh2 = document.createElement('h2');
let h2Text = document.createTextNode('jquery text 생성하기');
myh2.appendChild(h2Text);
myBox.appendChild(myh2); */

// const myBox = $('myBox');
// myBox.append('<h2><h2>');
// const myh2 = myBox.children('h2');
// myh2.text('<i>jquery를 통해 글자를 생성하였습니다.</i>');

// html() , append() , prepend() , appendTo() , prependTo() , before() , after()
// text

// let con = myBox.html(); // 내용을 파악
// console.log(con);

// myBox.html('<p>요소를 생성하였습니다.</p>'); // 기존 요소를 삭제하고 새롭게 추가

// myBox.append('<p>요소를 생성하였습니다.</p>'); // 기존 요소를 두고 내부에 뒤에 추가

// myBox.prepend('<p>요소를 추가로 앞에 생성하였습니다.</p>'); // 기존요소를 두고 내부에 앞에 추가


// myBox.append('<p>요소를 생성하였습니다.</p>'); // 방에 아버지께서 들어가신다.

// let myt = $('p');
// myt.appendTo(myBox); // 아버지께서 방에 들어가신다.



const resultBox = $('#resultBox');

// let resultWidth = resultBox.width(); // padding,border를 제외한 width값
// console.log(resultWidth);

// let resultinnerWidth = resultBox.innerwidth(); // padding 값을 포함한 width값
// console.log(resultWidth);

// let resultouterWidth = resultBox.outerwidth(); // border 값을 포함한 width값
// console.log(resultWidth);

// let resultinnerWidth = resultBox.outerWidth(true); // border 값을 포함한 width값
// console.log(resultouterWidth); // margin값을 포함한 가로값


/* 
let resultBoxWidth = resultBox.css('width');
let resultPaddingWidth = (resultBox.css('paddingLeft')) + (resultBox.css('paddingRight'));
let pasWidth = parseInt(resultBoxWidth) + resultPaddingWidth;

console.log(pasWidth) 
*/

let url = "http://www.naver.com";
let myat = resultBox.attr({'class':'adC','data-class':url});
// console.log(myat);

resultBox.on('click',function(){
  resultBox.after('<a href="'+ url +'">클릭하면 이동합니다.</a>');
  resultBox.after(`<a href="${url}">2클릭하면 이동합니다.</a>`);
});

// 변경,삭제
// myBox.empty(); // 선택한것 제외 내부의 기능을 삭제
// myBox.remove(); // 선택한것을 그대로 삭제

// jquery 기초개념 : 메소드 체인,콜백
// $().find().animate(); 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것


// 콜백 : 하나의 함수내에서 다시 함수를 호출하여 사용하는 기능
/*
$().animate({},function(){
  $().animate({}, function(){
    $().animate();
  });
}); 
*/

// 이벤트
// show(),hide()

})(jQuery);