/*
$('.black-bg').on('click',function(){
  $('.black-bg').removeClass('show-modal');
})
e.target; // 유저가 실제로 누른거
e.currentTarget; // 이벤트 리스너가 달린곳 이걸 this라고 표현할 수 있음.
e.preventDefault; // 클릭 안한거처럼 쳐주셈, 기본동작 막아주셈
e.stopPropagation; // 이벤트 버블링 막아주세욥
*/

document.querySelector('.black-bg').addEventListener('click',function(e){
  if(e.target == document.querySelector('.black-bg')){
    document.querySelector('.black-bg').classList.remove('show-modal')
  }
})
