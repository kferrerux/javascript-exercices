// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagNameq

let all = document.getElementsByClassName('box');
console.log(all);

Array.prototype.forEach.call(all, function(element) {
    element.innerHTML = 'Le texte a changé!';
});