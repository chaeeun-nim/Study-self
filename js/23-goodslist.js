var products = [
  { id: 0, price: 80000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
// products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(products);

const price = document.querySelector("#price");
price.addEventListener("click", () => {
  products.sort((a, b) => {
    return a.price - b.price;
  });
  document.querySelector(".row").innerHTML = "";
  cardList(products);
});

// 상품명 다나가 순 정렬
const maker = document.querySelector("#maker");

// 6만원 이하 상품만 보기
const cheap = document.querySelector("#cheap");

var 어레이 = [7, 3, 5, 2, 40];
// 어레이.sort((a, b) => {
//   return a - b;
// });
var 새어레이 = 어레이.map(function (a) {
  return a * 3;
});
console.log(새어레이);

// var 어레이2 = ["a", "c", "b", "d"];
// 어레이2.sort((a, b) => {
//   return a > b ? -1 : 1;
// });
// console.log(어레이2);

/*
<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>Card title</h5>
  <p>가격 : 70000</p>
</div>
*/

// 상품 목록 만들기 함수
cardList(products);

function cardList(dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    makeCard(dataArr[i]);
  }
}

// 카드 1개 만들기 함수
function makeCard(dataArr) {
  const targetDiv = document.querySelector(".row");
  const divElem = document.createElement("div");
  const imgElem = document.createElement("img");
  const h5Elem = document.createElement("h5");
  const pElem = document.createElement("p");

  const priceText = document.createTextNode(`가격 : ${dataArr.price}`);
  const titleText = document.createTextNode(`${dataArr.title}`);

  imgElem.src = "https://dummyimage.com/400x400/ffcc00/000000&text=Hello+World";
  imgElem.classList.add("w-100");
  divElem.classList.add("col-sm-4");
  h5Elem.appendChild(titleText);
  pElem.appendChild(priceText);
  divElem.appendChild(imgElem);
  divElem.appendChild(h5Elem);
  divElem.appendChild(pElem);
  targetDiv.appendChild(divElem);

  return divElem;
}

function dataGet(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      cardList(data);
      products.push(...data);
    });
}
window.clickCount = 0;
window.urls = [
  "https://codingapple1.github.io/js/more1.json",
  "https://codingapple1.github.io/js/more2.json",
];

document.querySelector(".btn").addEventListener("click", function () {
  if (clickCount < urls.length - 1) {
    dataGet(urls[clickCount]);
  } else if (clickCount == urls.length - 1) {
    dataGet(urls[clickCount]);
    this.style.display = "none";
  }
  clickCount++;
});
