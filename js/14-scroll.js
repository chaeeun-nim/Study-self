
window.addEventListener('scroll',function () {
  let scroll = 0;
  scroll = window.scrollY;
 if(scroll >= 2000){
  document.querySelector('.navbar-brand').style.fontSize = '20px';
 }else{
  document.querySelector('.navbar-brand').style.fontSize = '30px';
 }
})


document.querySelector('.lorem').addEventListener('scroll',function(){
  // 전체 안에 스크롤이 있는 어떠한 스크롤 박스 컨트롤 하는 방법
  let scroll = document.querySelector('.lorem').scrollTop;
  let scrollH = document.querySelector('.lorem').scrollHeight;
  let divH = document.querySelector('.lorem').clientHeight;

  // 전체 디브박스가 스크롤된 높이이기때문에.. 스크롤양과 실제 스크롤된양이 다를수있음.

  // 이렇게 실제 스크롤양 + 디브박스 높이를 해주면서, 전체스크롤 높이에서 -10을해주면 더 안정적으로 작동됨.
  if(scroll + divH > scrollH-10){
    alert('약관에 동의?')
  }
})

window.addEventListener('scroll',function(){ // 스크롤할때 마다 실행
  let redBar = 0
  let viewport = document.querySelector('html').clientHeight; // 뷰포트 높이
  let html = document.querySelector('html').scrollHeight; // 전체 html높이
  let scroll = window.scrollY // 현재 스크롤 위치
  redBar = Math.trunc(scroll/(html-viewport)*100) + '%';
  console.log(viewport,html,scroll)
  
  document.querySelector('.red').style.width = redBar;
})
