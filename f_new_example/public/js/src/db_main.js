// db_main.js

(function($){
  const body = $('body'); // body
  const wrap = $('#wrap'); // #wrap
  wrap.append('<section id="viewBox"></section>'); // viewBox 생성
  const viewBox = $('#viewBox');
  // script 내용 간편작성함수 생성
  const JsLink = (temp) => {
   return body.append('<script src="../js/src/temp/${temp}.js"></script>');
  };

  viewBox.load('./temp/db_01.html',() => {
    JsLink('db_01.js');
  });
})(jQuery);