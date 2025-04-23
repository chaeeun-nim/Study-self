var products = [
  { id: 0, price: 80000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
let originalProducts = [...products];
// products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(products);

// 기능 버튼 눌렀을때 리셋시키고 다시 빌드 하는 함수
function resetRow(array) {
  document.querySelector(".row").innerHTML = "";
  return cardList(array);
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector("input").value;
  if (isNaN(value)) {
    alert("숫자만 입력해주세요");
  } else {
    products = products.filter((a) => {
      return a.price <= value;
    });
    resetRow(products);
    document.querySelector("input").value = "";
  }
});

// 가격순으로 정렬
const price = document.querySelector("#price");
price.addEventListener("click", () => {
  products.sort((a, b) => {
    return a.price - b.price;
  });
  resetRow(products);
});

// 상품명 다나가 순 정렬
const maker = document.querySelector("#maker");
maker.addEventListener("click", () => {
  products.sort((a, b) => {
    return a.title > b.title ? -1 : 1;
  });
  resetRow(products);
});

// 6만원 이하 상품만 보기
const cheap = document.querySelector("#cheap");
cheap.addEventListener("click", () => {
  products = products.filter((a) => {
    return a.price < 60000;
  });
  resetRow(products);
  // console.log(cheapProducts);
});

// 초기화 버튼
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  products = originalProducts;
  resetRow(products);
});

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
  const btnElem = document.createElement("button");

  const priceText = document.createTextNode(`가격 : ${dataArr.price}`);
  const titleText = document.createTextNode(`${dataArr.title}`);
  const btnText = document.createTextNode(`구매`);

  btnElem.classList.add("btn");
  btnElem.classList.add("btn-outline-info");
  btnElem.classList.add("buy");

  imgElem.src = "https://dummyimage.com/400x400/ffcc00/000000&text=Hello+World";
  imgElem.classList.add("w-100");
  divElem.classList.add("col-sm-4");
  h5Elem.appendChild(titleText);
  pElem.appendChild(priceText);
  btnElem.appendChild(btnText);
  divElem.appendChild(imgElem);
  divElem.appendChild(h5Elem);
  divElem.appendChild(pElem);
  divElem.appendChild(btnElem);
  targetDiv.appendChild(divElem);

  return divElem;
}

// function makeCard(dataArr) {
//   const targetDiv = document.querySelector(".row");
//   let cardTem = `
//         <div class="col-sm-4">
//         <img src="https://dummyimage.com/400x400/ffcc00/000000&text=Hello+World" class="w-100" />
//         <h5>${dataArr.title}</h5>
//         <p>가격 : ${dataArr.price}</p>
//     `;
//   targetDiv.innerHTML += cardTem;
// }

function dataGet(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      cardList(data);
      products.push(...data);
      originalProducts.push(...data);
    });
}
window.clickCount = 0;
window.urls = [
  "https://codingapple1.github.io/js/more1.json",
  "https://codingapple1.github.io/js/more2.json",
];

// 더보기 버튼
document.querySelector("#more").addEventListener("click", function () {
  if (clickCount < urls.length - 1) {
    dataGet(urls[clickCount]);
  } else if (clickCount == urls.length - 1) {
    dataGet(urls[clickCount]);
    this.style.display = "none";
  }
  clickCount++;
});

// 로컬스토리지
// let arr = [1, 2, 3, 4, 5, 6];
// const newArr = JSON.stringify(arr);
// localStorage.setItem("num", newArr);
// var arrJson = localStorage.getItem("num");
// console.log(arrJson);
// console.log(JSON.parse(arrJson));

/*
<로컬스토리지 정보 수정하기>
로컬스토리지에서 자료꺼냄
로컬스토리에서 꺼낸 자료를 수정
다시 꺼낸 자리에 자료를 넣기
*/

// 세션스토리지 도 똑같음.

let buyBtn = document.querySelectorAll(".buy");
const cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function cartList(title, count, price) {
  this.title = title;
  this.count = count;
  this.price = price;
}

cartList.prototype.priceSum = function () {
  return this.price * this.count;
};

document.querySelector(".row").addEventListener("click", (e) => {
  if (e.target.classList.contains("buy")) {
    const targetPrice = e.target.previousElementSibling;
    const priceText = targetPrice.textContent.trim();
    const price = parseInt(priceText.replace("가격 : ", "").trim()); // 타겟의 가격

    const targetTitle = targetPrice.previousElementSibling;
    const targetTitleText = targetTitle.textContent.trim(); // 타겟 상품이름

    const found = cartArr.find((item) => {
      return item.title === targetTitleText;
    });
    if (!found) {
      // 만일 타겟이 포함되어있지 않다면?
      cartArr.push(new cartList(targetTitleText, 1, price)); // 배열에 추가하기
      localStorage.setItem("cart", JSON.stringify(cartArr)); // 한개의 변수로 다이렉트로 로컬스토리지에 꽂기
    } else {
      found.count += 1;
      localStorage.setItem("cart", JSON.stringify(cartArr)); // 한개의 변수로 다이렉트로 로컬스토리지에 꽂기
    }
  }
});
