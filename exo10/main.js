// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

let element = document.getElementById('image');
console.log(element);

image.getAttribute('src');
console.log(image);

image.setAttribute('src', 'assets/imgs/chat02.png');
console.log(image);


// DIfférentes façons de manipuler les attributs

// images = document.body.getElementsByTagName('img');
// console.log(images);

// let src0 = images[5].getAttribute('src');
// console.log(src0);

// let src2 = images[1].src;
// console.log(src2);