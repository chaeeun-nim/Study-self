const cartArr = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartArr);

function makeList(dataArr) {
  let shoppingList = document.querySelector(".shoppingList");
  const titleText = document.createTextNode(`${dataArr}`);
  const h1Elm = document.createElement("h1");

  h1Elm.appendChild(titleText);
  shoppingList.appendChild(h1Elm);
}

cartArr.forEach((element) => {
  makeList(element);
});
