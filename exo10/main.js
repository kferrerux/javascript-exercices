// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

let element = document.getElementById('image');
// console.log(element);

let attribute = element.getAttribute('src');
// console.log(attribute);

element.setAttribute('src', 'assets/imgs/chat02.png');
console.log(element);