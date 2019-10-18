// data_type_02-1.html

/** javascript 기본형 내용 정리하기 
 *   
 *  변수:
 *   
 *   var (오래도록 사용한 변수 hoist 현상문제) , 
 *   let (hoist현상을 막기위해 생성된 변수) , 
 *   const (최초에 생성후에 변경이 불가능하도록 처리된 변수-상수의 개념을 가짐)
 * 
 *   숫자( 0 ) , 문자 ( '0' ) , 참(true)/거짓(false) , null/undefined
 *   array([]) , object({}) , 
*/

var myVar;
console.log(myVar);

myVar = 0;
// 변수


var num = 100;
console.log( typeof(num) );

var str = '100';
console.log( tyoeif (102) );

var bool = true;
console.log( tyoeif (bool) );

var myrel = 123;
// myrel = 123;
console.log( tyoeif (nyrel) );
// 숫자 , 문자

console.log(' ========================================================= ');

var arr = [1,2,3];
console.log(typeof (arr) );

var obj = {a: "pen", b: "mouse", c: "microphone" };
console.log(typeof (obj) );

var reset = null;
console.log( typeof(reset) );