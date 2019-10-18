// data_type_01.js

/*
// 변수의 기초 개념이해하기

var int;
console.log(int);

var 댕댕이;
console.log(댕댕이);

댕댕이 = "멍멍이";
console.log(댕댕이);

console.log(멍댕이);

* 결과값을 참고하여 
* 값이 undefined라면, 변수명은 선언했지만 값은 지정하지 않은 형태
* 값이 not defined라면, 변수를 생성조차 하지 않은것
*/
// console.log(멍댕이);


// let rel = "10시 40분";
// console.log(rel);

// var rel = "10시:49분";
// console.log(rel);


/*  
var   : 오래전부터 사용하던 변수
      * hoist현상이 생김 (호출하기 이전에도 해당하는 변수가 존재하는 것처럼 인지)

let   : ECMA2015(es6) 버전부터 생성된 변수 
      * hoist현상이 생기지 않는다. (현재 많이 사용하는 변수)

const : ECMA(es6) 버전부터 생성된 변수
      * 변수로 불리지만 한번 지정 후에는 값을 변경할 수 없는 변수
*/

// 스크립트기반 또는 언어라고 불리우는 프로그래밍은 하나의 에러가나면 이후의 내용은 동작하지 않는다.


var card = 1000;
var chu = 500;
card = card - chu;
console.log(card);

card += 5000;        // card = card + 5000; (2번 쓰는것보단 1번 쓰기위해 약칭을 사용한다.)
console.log(card);

card -= 13000;       // card = card - 13000;

  
// 조건 ? 조건이 참 일경우 : 조건이 거짓일 경우 ;
(card < 0) ? console.log('잔액부족입니다.') : console.log(card);

/*
 * 사칙연산자 |  + , - , * , / , %
 * 대입연산자 |  += , -= , *= , /= 
             | == , === , != !==
             | < , >
*/

// 기본 연산자 ==========================================================================

var int;
int = 10;
console.log(int);

var rel = int + 10;
int = int + 10;
int = int - 5;
int = int * 4;
int = int /10;

int = int / 4; // 몫을 뽑아내는게 아닌 나머지를

console.log(int);

var int2 = 50125487;
int = int2 % 2;
console.log(int2);

(int == 0) ?
console.log("짝수"):
console.log("홀수");
// ---------------------------------------

var now = new Date();
console.log(now);
// 현재시각 알려주는 코드

var i = 100;
i = i + 2019;
console.log(i);

var now_year_month_date = 20191014;
now_year_month_date = now_year_month_date + 1;
console.log(now_year_month_date);

var now_year_month_date = 20191014;
now_year_month_date += 1;
console.log(now_year_month_date);

var now = 1207;
now += 1;
now += 1;
console.log(now);

now ++;
now ++;
console.log(now);

now --;
console.log(now);


++now;
console.log(now);
/*
 * 증감연산자 1씩 더하거나, 뺴는 기능
 * 1씩 더하거나, 뺼때 (++,--)는 앞(전치연산) 또는 뒤(후치연산)에 붙힐 수 있다.
 
 * 전치는 먼저 연산후 결과를 도출
 * 후치는 먼저 결과를 도출후 연산 
 */

/*  var myi = 100;
 console.log(myi); 
 console.log(++myi); 
 console.log(++myi); 
 console.log(--myi); 
 console.log(myi); 
 console.log("결과:",myi); 
 console.log(myi++); 
 console.log(myi++); 
 console.log(myi++); 
 console.log(myi++); 
 console.log("결과2:",myi); 
 console.log(myi--); 
 console.log(myi--); 
 console.log(myi--); 
 console.log(myi--); 
 console.log(myi--); 
 console.log("결과3:",myi); 
 console.log(++myi); 
 console.log(myi++); 
 console.log(myi--); 
 console.log(myi++); 
 console.log("결과4:",myi);  */

 var ls = 7;
 var tx = "번방의 선물";
 
  ls = 10;
  tx = "번방의 선물";
  myMv = ls + tx;
  // console.log(myMv);

  (ls < 10) ? (myMv = "0" + ls + tx) : (myMv = ls + tx);
  console.log(myMv);
 
  var myN = perseInt(myMv);
  console.log(myN);

  // width:100px; 