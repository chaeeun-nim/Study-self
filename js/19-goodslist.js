var products = [
  { id: 0, price: 80000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
let cards = document.querySelectorAll(".card").length;

for (let i = 0; i < cards; i++) {
  document.querySelectorAll(".card-body > h5")[i].innerHTML = products[i].title;
  document.querySelectorAll(".card-body > p")[i].innerHTML =
    "가격 : " + products[i].price;
}
