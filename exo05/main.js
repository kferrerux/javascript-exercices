// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

let newelement = document.createElement('div');
// console.log(newelement);

newelement.innerHTML = ('Bonjour je suis Kevin!');
// console.log(addtext);

document.getElementById('section').appendChild(newelement);
// console.log(newelement);

