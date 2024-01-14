// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

// On sélectionne la liste non-ordonnée crée (ou existante), préalablement dans notre l'HTML
// On initialise la variable "list"
let list = document.getElementById('ul');
// console.log(list);

// On crée les éléments de liste (li)
// 3 variables home/products/contact sont crées
let home = document.createElement('li');
let products = document.createElement('li');
let contact = document.createElement('li');
// console.log(home, products, contact);

// On définit les textes que contiennent nos éléments de liste
home.textContent = "Home";
products.textContent = "Nos Produits";
contact.textContent = "Contact"
// console.log(home, products, contact);

// On ajoute les éléments de liste (li) à notre liste non-ordonnée (appendChild / insertBefore)
list.appendChild(home);
list.appendChild(products);
list.appendChild(contact);
// console.log(list);