import product from './product';
//import products from './products';
import cartLine from './cart-line';
import calculateAndDisplayTotalPrices from './calculate-and-display-total-prices';
import jhr from './jhr';
// 1. mise en place au chargement de la page
//      de la récupération des nodes de l'ID list
// 2. écriture d'un module produt qui affichera un
//      template à partir d'un object de data product
// 3. affichage de chacun des products de products.js
//      d'après le module product
const isCartFull = () => document.querySelectorAll('.product').length > 0;

const toggleOrderButton = () => {
  const orderNode = document.querySelector('#order');
  orderNode.setAttribute('disabled', true);
  if (isCartFull()) {
    orderNode.removeAttribute('disabled');
  }
};

const getAttributesCartLine = node => ({
  sku: node.getAttribute('data-sku'),
  name: node.getAttribute('data-name'),
  price: node.getAttribute('data-price'),
});

const confirmOrder = () => {
  const cartNode = document.getElementById('total');
  const cartBodyNode = cartNode.querySelector('tbody');
  cartBodyNode
    .querySelectorAll('.remove')
    .forEach(link => link.closest('.product').remove());
  calculateAndDisplayTotalPrices();
  toggleOrderButton();
  window.open('https://giphy.com/gifs/5fBH6zoAQg9dHK2ttsc/html5', 'Thanks', '');
  console.log('Done');
};

const order = event => {
  if (isCartFull()) {
    const hasConfrmOrder = window.confirm(`
  Do you want to buy this elemens?!
  Are you F*****g Sure?`);
    if (hasConfrmOrder) confirmOrder();
  } else {
    const hasNotConfrmOrder = !window.confirm(`
  You can't buy nothing`);
    if (hasNotConfrmOrder) {
      window.open('https://giphy.com/gifs/njl60xjwgrkWY/html5', 'Thanks', '');
    }
  }
};

const deleteCart = event => {
  event.currentTarget.closest('.product').remove();
  calculateAndDisplayTotalPrices();
  toggleOrderButton();
};

const addCart = event => {
  const eventButton = event.currentTarget;
  const localCartLine = getAttributesCartLine(eventButton);
  const cartLineDislay = cartLine(localCartLine);

  const cartNode = document.getElementById('total');
  const cartBodyNode = cartNode.querySelector('tbody');
  cartBodyNode
    .querySelectorAll('.remove')
    .forEach(link => link.removeEventListener('click', deleteCart));

  cartBodyNode.innerHTML = cartLineDislay + cartBodyNode.innerHTML;

  cartBodyNode
    .querySelectorAll('.remove')
    .forEach(link => link.addEventListener('click', deleteCart, false));

  calculateAndDisplayTotalPrices();
  toggleOrderButton();
};
const displaySushi = products => {
  const sushiNodes = document.querySelectorAll('#list .item');
  sushiNodes.forEach((sushiNode, i) => {
    const productDislay = product(products[i]);
    sushiNode.innerHTML = productDislay;
    const button = sushiNode.querySelector('button');
    button.addEventListener('click', addCart, false);
  });
};

const showError = () => console.log('error system');
const init = () => {
  toggleOrderButton();
  jhr('GET', '/collection')
    .then(displaySushi)
    .catch(showError);

  // products.forEach((productData, i) => {
  //   const productDislay = product(productData);
  //   sushiNodes[i].innerHTML = productDislay;
  // });
  const orderNodes = document.querySelector('#order');
  orderNodes.addEventListener('click', order, false);
};
document.addEventListener('DOMContentLoaded', init);

//4. créer une lib formatPrice qui va formatter le prix sous la forme française
// ex : 5,9 => 5,90

//4.1. utiliser la lib formatPrice pour afficher les prix formatés

//5 créer un comosant tag qui retounera l'html suivant
// <span class="badge badge-dark"><span>

//5.1 utliser le composant tag sur le product pour afficher l'ensemble des composant tag.

// 6. Ajout au panier

// 6.1. créer un composant cartLine qui représentera une ligne du panier
// Snippet sur Slack

// 6.2. au click sur le button créer une function qui va lire les data attributes
// et les console.log

// 6.3. ajouter une ligne du panier à chaque appuis sur le bouton
