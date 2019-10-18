// index.js

let p = document.querySelector('p');
p.style.border = "3px solid #555";

const conP = document.querySelector('p.con');
const myT  = document.createTextNode('버튼을 클릭함으로 인해 내용이 달라졌습니다.');
const btn  = document.querySelector('.btn');

btn.addEventListener('click',function(){
  conP.appendChild(myT);
});
