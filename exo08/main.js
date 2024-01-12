// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

let element = document.querySelector('div');
// console.log(element);

// element.classList.add('box');
// console.log(element);

// element.classList.remove('box');
// console.log(element);

// element.classList.toggle('box');
// console.log(element);

function toggle() {
    document.querySelector('div').classList.toggle('box');
}

console.log(element);