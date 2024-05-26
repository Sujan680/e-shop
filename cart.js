const cartTable = document.querySelector('table tbody');
const cartRows = cartTable.querySelectorAll('tr');
const subtotalField = document.querySelector('.total h6:first-child');
const shippingField = document.querySelector('.total div:nth-child(2) p');
const totalField = document.querySelector('.total div:nth-child(4) p');
const couponField = document.querySelector('.coupon input');
const couponButton = document.querySelector('.coupon button');
const checkoutButton = document.querySelector('#cart-bottom button');

cartTable.addEventListener('input', updateCart);
couponButton.addEventListener('click', applyCoupon);
checkoutButton.addEventListener('click', checkoutCart);

// Update the cart when the quantity of a product is changed
function updateCart(e) {
    const target = e.target;
    if (target.tagName.toLowerCase() === 'input') {
      const parentRow = target.closest('tr');
      const priceField = parentRow.querySelector('h5:nth-child(4)');
      const totalField = parentRow.querySelector('h5:last-child');
      const price = parseFloat(priceField.textContent.replace('$', ''));
      const quantity = parseInt(target.value);
      const total = price * quantity;
      totalField.textContent = '$' + total.toFixed(2);
      updateTotal();
    }
  }
  
  // Apply a coupon code to the cart
  function applyCoupon() {
    const couponCode = couponField.value;
    if (couponCode === 'DISCOUNT') {
      const discount = 50;
      const subtotal = parseFloat(subtotalField.textContent.replace('$', ''));
      const shipping = parseFloat(shippingField.textContent.replace('$', ''));
      const total = subtotal + shipping - discount;
      totalField.textContent = '$' + total.toFixed(2);
    }
    couponField.value = '';
  }
  
  // Checkout the cart and redirect to the checkout page
  function checkoutCart() {
    alert('Checkout is not implemented yet!');
  }
  
  // Update the subtotal, shipping, and total of the cart
  function updateTotal() {
    let subtotal = 0;
    cartRows.forEach(row => {
      const totalField = row.querySelector('h5:last-child');
      subtotal += parseFloat(totalField.textContent.replace('$', ''));
    });
    subtotalField.textContent = '$' + subtotal.toFixed(2);
    shippingField.textContent = '$100.00';
    totalField.textContent = '$' + (subtotal + 100).toFixed(2);
  }

  updateTotal();
