const a = document.createElement("p");
a.innerHTML = "안녕";
document.querySelector("#test").appendChild(a);

const templet = "<p>안녕 하십니꽈?<p>";
document.querySelector("#test").insertAdjacentHTML("beforeend", templet);
const templet2 = "<h1>안녕안녕 하십니꽈?<h1>";
document.querySelector("#test").innerHTML = templet2;
