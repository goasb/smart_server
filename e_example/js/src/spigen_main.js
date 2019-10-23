// spigen_main.js

(function($){
  // const wrap    = $ ('#wrap'); // 1번째 방법
  const body    = $ ('body'); // 2번째 방법
  const header  = $ ('#headBox');
  const adver   = $ ('#viewBox');
  const content = $ ('#conBox');
  const content2 = $ ('#conBox2');
  const footer  = $ ('#footBox');
//  ============================================
 let tempUrl = "./spigen_temp/";
 let jsUrl ="../js/src/spigen_temp_pc/";


 /* 1번쨰 방법 ================================================================================== */
 header.load(tempUrl + 'spigen_header.html',function(){
  // $(this).after('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
 });
 
 adver.load(tempUrl + 'spigen_main_adver.html');
//  content =============================================================================================
 content.load(tempUrl + 'spigen_main_content_01.html',function(){
  
  let conJS = jsUrl + 'make_spigen_content_01.js'; 
  
  // body.append(`<script src="../JS/src/spigen_temp_pc/make_spigen_content_01.js"></script>`); // 1번째 방법
  // body.append('<script src="` + conJS + `"></script>'); // 2번째 방법
  body.append(`<script src="${conJS}"></script>`); // 3번째 방법
 });
//  content ==============================================================================================

//  content2 ==============================================================================================
content2.load(tempUrl + 'spigen_main_content_02.html',function(){
  let conJS = jsUrl + 'make_spigen_content_02.js';
  body.append(`<script src="${conJS}"><script>`);
});

//  content2 ==============================================================================================
 footer.load(tempUrl + 'spigen_footer.html');

// setTimeout(function(){},'시간'); // 일정시간이 지난후에 함수를 수행해라!

 setTimeout(function(){
   body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>')
 } ,100);


 /* 1번쨰 방법 ================================================================================== */


 /* 2번쨰 방법 ================================================================================== */
// header.load(tempUrl + 'spigen_header.html',function(){
//   body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
// });
 /* 2번쨰 방법 ================================================================================== */

})(jQuery);