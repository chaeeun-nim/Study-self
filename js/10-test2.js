/*
내 나이와 출신지역을 자바스크립트 변수에 저장해봅시다. 
나이는 맨날 변하니 재할당가능한 변수,
출신지역은 바뀌지 않으니 재할당불가능한 변수에 저장해보십시오.
*/

let 나이 = 29;
const 출신지역 = '광주';

console.log(나이, 출신지역);

// 이렇게 입력하면 콘솔창에 무엇이 뜰까요?
var name = 'park';
var id = 0;
function showName() {
    var name = 'kim';
    var id = 1;
    console.log(name);
}

showName();
console.log(id);
// 정답 : kim 줄바꿈후 0

/*
Q3. 이자율 계산하기 

철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.
첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
그래서 민준이는

(1) 변수에 예금액을 넣으면
(2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데

어떻게 코드를 짜면 될까요? 

(동작예시)

var 예금액이라는 변수에 60000을 집어넣으면 86400 이게 콘솔창에 출력되어야 합니다. (이자 20%가 2번 붙음)
var 예금액이라는 변수에 10000을 집어넣으면 13225 이게 콘솔창에 출력되어야 합니다. (이자 15%가 2번 붙음)
*/

var 예금액 = 60000;
var 미래예금액 = 0;

if (예금액 > 50000) {
    미래예금액 = 예금액 * 1.2 * 1.2;
} else {
    미래예금액 = 예금액 * 1.15 * 1.15;
}
//여기에 코드짜보십시오
console.log(미래예금액);

/*
Q4. 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다. 

방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다. 
var first에 360을 집어넣으면 위 코드를 실행했을 때 콘솔창에 760이 출력되어야합니다. (360 + 240 + 160)
*/

var first = 360;
var second = first * (2 / 3);
var thrid = second * (2 / 3);
console.log(first + second + thrid);
//여기 어떤 코드가 들어가면 될까요?

/*
위에서 1.2를 여러번 곱했는데 1.2를 10번 곱하려면 코드를 어떻게 짜야될까요? 
1.2 * 1.2 * 1.2 ... 계속 하면 되긴 하는데
자바스크립트엔 ** 이런 거듭제곱 연산자 기능도 있습니다.
*/
if (예금액 > 50000) {
    미래예금액 = 예금액 * 1.2 ** 2;
} else {
    미래예금액 = 예금액 * 1.15 ** 2;
}
//여기에 코드짜보십시오
console.log(미래예금액);

console.log(Math.ceil(first / (1 - 2 / 3)));
