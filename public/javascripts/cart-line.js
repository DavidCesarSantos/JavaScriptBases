import formatPrice from './format-price';

export default ({ sku, name, price }) => `
<tr class="product">
  <td>
    <a role="button" class="remove">
      ❌
    </a>
  </td>
  <th scope="row">${sku}</th>
  <td>${name}</td>
  <td class="ToCalculate" data-price=${price}>${formatPrice(price)}€</td>
</tr>`;
