// grammer_basic_02.js
// 반복문

// while(){}
/* var n = 0;
console.log(n);

while(n <= 100){
  console.log(n);
  n++;
}
console.log(n);
 */



// var n = 0;
/* for (let n =0; n <= 10; n++){
  console.log(n);
}

console.log(n);
 */

//  for 테스트 =====================================
// var product = document.getElementById('product');
let product = document.querySelector('#product');
product.style.width = "100%";
product.style.height = "auto";
product.style.minHeight = "300px";
product.style.backgroundColor = "#f96";

let ul = document.createElement('ul');
product.appendChild(ul);
ul = document.querySelector('#product>ul');
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.backgroundColor = "#77f";

let ar = ['우유','쥬스','차','커피','슬러시','요거트'];
// console.log( ar.lenght);

for(let i = 0; i < ar.lenght; i++){
  // console.log(i);
  let li = document.createElement('li');
  let myText = document.createTextNode(ar[i]);
  li.appendChild(myText);
  ul.appendChild(li);
}