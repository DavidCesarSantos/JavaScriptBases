import formatPrice from './format-price';
import spanTag from './span-tag';

export default productData => {
  const {
    sku,
    url,
    name,
    description,
    price,
    currency,
    composition,
  } = productData;

  const tags = composition.map(ingredient => spanTag(ingredient)).join(' ');

  return `<img src="${url}" width="200" height="200" />
    <hr>
        <h3>${name}</h3>
        <p>${description}</p>
    <hr>
    <span>${formatPrice(price)} ${currency}</span>
    <br />
    <div class="tags">${tags}</div>
    <button
    class="btn btn-primary"
    data-sku="${sku}"
    data-name="${name}"
    data-price="${price}"
    >
        Ajouter au panier
    </button>`;
};
