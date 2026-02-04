export const cart = [];

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    });
   
    if (matchingItem){
      matchingItem.quantity += quantity
    }
    else {
      cart.push({
      productId: productId,
      quantity: quantity
    })
    };
}

export function showAddedIndicator(){
  
}






// console.log(cart);

// addBtn.addEventListener('click', () => {
//   const quantity = document.querySelector('.quantity');
//   // console.log(quantity.selectedOptions[0].value);
//   console.log('hello')
// })

