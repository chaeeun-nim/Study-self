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
const Option = [
  `<option>95</option><option>100</option>`,
  `<option>29</option><option>28</option>`,
];

pro.addEventListener("change", function () {
  let val = this.value;

  if (val == "shirts") {
    option.classList.remove("dis-none");
    option.innerHTML = Option[0];
  } else if (val == "pants") {
    option.classList.remove("dis-none");
    option.innerHTML = Option[1];
  } else {
    option.classList.add("dis-none");
  }
});
