const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
const table = document.querySelector('.table');

console.log(cart);

cart.forEach(item => {
  const product = document.createElement('tr');
  product.innerHTML = `
    <td>
      <div class="img"><img src="${item.img}" alt="item" width="90px" height="90px"></div>
      <p>${item.name}</p>
    </td>
    <td>
      <form>
        <input type="radio" name="a" value="0" checked>
        <label>size-S</label><br>
        <input type="radio" name="a" value="50">
        <label>size-M(+$50)</label><br>
        <input type="radio" name="a" value="100">
        <label>size-L(+$100)</label><br>
      </form>
    </td>
    <td>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </td>
    <td class="product-cost">$${item.cost}</td>
  `;

  const selectElement = product.querySelector('select');
  const costElement = product.querySelector('td:last-child');

  const updateCost = () => {
    const selectedNumber = parseInt(selectElement.value);
    const radioValue = parseInt(product.querySelector('input[name="a"]:checked').value);
    const cost = (item.cost + radioValue) * selectedNumber;
    costElement.textContent = `$${cost}`;
  };

  selectElement.addEventListener('change', updateCost);

  const radioButtons = product.querySelectorAll('input[name="a"]');
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', updateCost);
  });

  const container = table.querySelector('.first');
  container.insertAdjacentElement('afterend', product);
});

const totalCost = document.querySelector('.total-cost');

const calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
  let total = 0;
  const costElements = document.querySelectorAll('.product-cost');
  costElements.forEach(item => {
    total += parseInt(item.textContent.slice(1));
  });
  
  // put the tax condition here to the total variable
  if (total > 1000) {
    alert("You have a 15% discount");
    total = total * 0.85;
  } else {
    alert("You have a 15% tax");
    total = total * 1.15;
  }

  totalCost.textContent = `$${total}`;
});
