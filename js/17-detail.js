//array 자료형 - 순서대로 자료저장
let car = ['소나타', 50000, 'white'];
// 오브젝트형 - 자료에 이름을 정하고 저장
let car2 = { name: '그랜저', price: [60000, 80000, 90000], color: 'red' };

/*

*/

car[3] = '아반떼';
console.log(car[3]);
// car2.price = 80000;
console.log(car2.name);
console.log(car2.price);

// car.sort(); // 데이터 정렬
car.slice(1, 3); // 첫번째부터 3번째 전까지
console.log(car2);
console.log(car.slice(1, 3));
document.querySelector('.card').innerHTML =
    car2.name + ' / ' + car2.price[1] + '<br>' + car[0] + ' / ' + car[1];
