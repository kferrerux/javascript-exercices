// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

let box = document.getElementById('box');
// console.log(box);

let add = document.getElementById('box').innerHTML = 'Salut je suis Kevin!';
// console.log(add);

let create = document.createElement('p');

document.getElementById('box').appendChild(create);