/*
버튼 0누르면
- 모든 버튼에 붙은 orange 클래스 삭제
- 버튼 0에 orange 클래스명 추가
- 모든 div에 show클래스명 삭제
- div 0에 show 클래스명 추가
*/
/*
document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
  document.querySelectorAll('.tab-button')[1].classList.remove('orange');
  document.querySelectorAll('.tab-button')[2].classList.remove('orange');
  document.querySelectorAll('.tab-button')[0].classList.add('orange');

  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
  document.querySelectorAll('.tab-content')[0].classList.add('show');
})
document.querySelectorAll('.tab-button')[1].addEventListener('click',function(){
  document.querySelectorAll('.tab-button')[0].classList.remove('orange');
  document.querySelectorAll('.tab-button')[2].classList.remove('orange');
  document.querySelectorAll('.tab-button')[1].classList.add('orange');

  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.add('show');
})
document.querySelectorAll('.tab-button')[2].addEventListener('click',function(){
  document.querySelectorAll('.tab-button')[0].classList.remove('orange');
  document.querySelectorAll('.tab-button')[1].classList.remove('orange');
  document.querySelectorAll('.tab-button')[2].classList.add('orange');

  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.add('show');
})
 */

// $('.tab-button').eq(0).on('click',function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click',function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// })
// let btnCount = document.querySelectorAll('.tab-button').length;
// console.log(btnCount)
// for(let i = 0; i<btnCount;i++){
//   $('.tab-button').eq(i).on('click',function(){
//     tabOpen(i);
//   })
// }

$('.list').click(function(e){
  let i =e.target.dataset.id;
    tabOpen(i)
})


function tabOpen(i){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(i).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(i).addClass('show');
}