products.forEach((product)=>{
  html += `<div class="product-container">
        <img src="${product.image}" alt="" class="product-img">
        <div class="product-info">
          <p class="product-name">${product.name}</p>
        <div class="ratings">
          <img src="/amazon project/images/ratings-img/star-rating-${product.ratings.star * 10}.JPG" alt="" class="stars">
          <p class="rating">${product.ratings.points}</p>
        </div>
        <div class="price">$${product.price}</div>
        <select name="qty" class="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        </div>
        <button class="add-btn js-add-to-cart" data-product-name="${product.name}">Add to</button>
      </div>`
})

document.querySelector('.main-container').innerHTML = html;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;
    
    let matchingItem;

    cart.forEach((item) => {
      if (productName === item.productName) {
        matchingItem = item
      }
    });
   
    if (matchingItem){
      matchingItem.quantity += 1
    }
    else {
      cart.push({
      productName: productName,
      quantity: 1
    })
    };
    console.log(cart)
  })
});
