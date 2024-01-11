// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/fr/docs/Web/API/HTMLStyleElement

let button = document.getElementById('button');
// console.log(button);

button.addEventListener("click", click);

function click() {
  button.style.backgroundColor = "blue";
  button.style.color = "white;"
}