/*
현재 스크롤바 위치 (특정위치) 가되면 카드의 투명도가 0으로 수렴
700~1000
y = 높이 * a + b
80 = 700*a + b
60 = 1000*a + b

*/

$(window).scroll(() => {
  let height = $(window).scrollTop();
  console.log(height);

  let y = -(1 / 300) * height + 10 / 3;
  let w = -(1 / 15) * height + 380 / 3;
  if (w >= 80) {
    w = 80;
  } else {
    w = -(1 / 15) * height + 380 / 3;
  }
  $(".card-box").eq(0).css("opacity", y);
  $(".card-box > img").eq(0).css("max-width", `${w}%`);
});
