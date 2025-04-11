// let selector = document.querySelector("#products");
// let option = document.querySelector("#shirts-size");

// selector.addEventListener("change", function () {
//   let result = selector.value;
//   console.log(result);

//   if (result == "shirts") {
//     option.style.display = "block";
//   } else {
//     option.style.display = "none";
//   }
// });

let pro = document.querySelectorAll(".form-select")[0];
let option = document.querySelectorAll(".form-select")[1];

const pants = [28, 30, 32];
const shrits = [95, 100, 105];

pro.addEventListener("change", function () {
  let val = this.value;

  if (val == "shirts") {
    option.classList.remove("dis-none");
    option.innerHTML = "";
    shrits.forEach(function (a) {
      option.innerHTML += `<option>${a}</option>`;
    });
  } else if (val == "pants") {
    option.classList.remove("dis-none");
    option.innerHTML = "";
    pants.forEach((a) => {
      option.innerHTML += `<option>${a}</option>`;
    });
  } else {
    option.classList.add("dis-none");
  }
});

var obj = { name: "kim", age: 20 };
for (let i in obj) {
  console.log(obj[i]);
}
