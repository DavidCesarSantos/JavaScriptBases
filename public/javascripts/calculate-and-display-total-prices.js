import formatPrice from './format-price';

export default () => {
  const priceCollection = document.querySelectorAll('#total [data-price]');

  const prices = Array.prototype.slice
    .call(priceCollection)
    .map(priceNode => parseFloat(priceNode.getAttribute('data-price')));

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = prices.reduce(reducer, 0);
  const htNode = document.getElementById('total-ht');
  htNode.innerHTML = `${formatPrice(total)} €`;
  const ttcNode = document.getElementById('total-ttc');
  ttcNode.innerHTML = `${formatPrice(total * 1.2)} €`;
};
