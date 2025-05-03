//버튼을 눌렀을때, 해당 사진위치로 이동
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

//다음버튼 만들기
let transX = 0;
$(".next").on("click", function () {
  if (transX <= 0 && transX > -200) {
    transX += -100;
    $(".slide-container").css("transform", `translateX(${transX}vw)`);
  } else if (transX == -200) {
    transX = 0;
    $(".slide-container").css("transform", `translateX(${transX}vw)`);
  }
  console.log(transX);
});
//이전버튼 만들기
$(".pre").on("click", function () {
  if (transX == 0) {
    transX = -200;
    $(".slide-container").css("transform", `translateX(${transX}vw)`);
  } else if (transX <= 0 && transX >= -200) {
    transX += 100;
    $(".slide-container").css("transform", `translateX(${transX}vw)`);
  }
  console.log(transX);
});

var 지금사진 = 1;

$(".next2").on("click", function () {
  if (지금사진 == 1) {
    지금사진 += 1;
    $(".slide-container").css("transform", "translateX(-100vw)");
  } else if (지금사진 == 2) {
    지금사진 += 1;
    $(".slide-container").css("transform", "translateX(-200vw)");
  } else {
    지금사진 = 1;
    $(".slide-container").css("transform", "translateX(0)");
  }
});

$(".pre2").on("click", function () {
  if (지금사진 == 1) {
    지금사진 = 3;
    $(".slide-container").css("transform", "translateX(-200vw)");
  } else if (지금사진 == 2) {
    지금사진 = 1;
    $(".slide-container").css("transform", "translateX(0)");
  } else if (지금사진 == 3) {
    지금사진 = 2;
    $(".slide-container").css("transform", "translateX(-100vw)");
  }
});

let 시작좌표 = 0;
let 눌렸냐 = false;

$(".slide-box")
  .eq(0)
  .on("mousedown", function (e) {
    시작좌표 = e.clientX;
    눌렸냐 = true;
  });
$(".slide-box")
  .eq(0)
  .on("mousemove", function (e) {
    if (눌렸냐) {
      console.log(e.clientX - 시작좌표);
      $(".slide-container").css(
        "transform",
        `translateX(${e.clientX - 시작좌표}px)`
      );
    }
  });
$(".slide-box")
  .eq(0)
  .on("mouseup", function (e) {
    눌렸냐 = false;
    if (e.clientX - 시작좌표 < -200) {
      $(".slide-container").css("transform", "translateX(-100vw)");
    } else {
      $(".slide-container").css("transform", "translateX(0)");
    }
  });
$(".slide-box")
  .eq(0)
  .on("touchstart", function (e) {
    시작좌표 = e.touches[0].clientX;
    눌렸냐 = true;
  });
$(".slide-box")
  .eq(0)
  .on("touchmove", function (e) {
    if (눌렸냐) {
      console.log(e.touches[0].clientX);
      $(".slide-container").css(
        "transform",
        `translateX(${e.touches[0].clientX - 시작좌표}px)`
      );
    }
  });
$(".slide-box")
  .eq(0)
  .on("touchend", function (e) {
    눌렸냐 = false;
    if (e.changedTouches[0].clientX - 시작좌표 < 200) {
      $(".slide-container").css("transform", "translateX(-100vw)");
    } else {
      $(".slide-container").css("transform", "translateX(0)");
    }
  });
