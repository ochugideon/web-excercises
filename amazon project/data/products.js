const products = [
  {
    image: '/amazon project/images/products/IMG_7624.JPG',
    name: 'Original Promack Drumstick',
    ratings: {
      star: 4.5,
      points: 90
    },
    price: '10.80',
  },
  {
    image: '/amazon project/images/products/IMG_7625.JPG',
    name: 'Original Remo Sand Drum Head',
    ratings: {
      star: 2.5,
      points: 75
    },
    price: '9.80',
  },
  {
    image: '/amazon project/images/products/shoe.jpg',
    name: 'Stylish Men Snickers',
    ratings: {
      star: 3.5,
      points: 85
    },
    price: '11.00',
  },
{
    image: '/amazon project/images/products/gadgets (1).jpg',
    name: 'Sleek MacBook Laptop',
    ratings: {
      star: 4.5,
      points: 95
    },
    price: '400.00',
  },
  {
    image: '/amazon project/images/products/gadgets (3).jpg',
    name: 'Powerful Music Player',
    ratings: {
      star: 3.5,
      points: 65
    },
    price: '20.50',
  },
  {
    image: '/amazon project/images/products/jersey (1).jpg',
    name: 'Original Jersey T-Shirt',
    ratings: {
      star: 2.5,
      points: 75
    },
    price: '9.80',
  },
  {
    image: '/amazon project/images/products/shoe (5).jpg',
    name: 'Original Mini Timberland Boots',
    ratings: {
      star: 2.5,
      points: 75
    },
    price: '15.80',
  },
  {
    image: '/amazon project/images/products/gadgets (5).jpg',
    name: 'IPhone 15 Pro',
    ratings: {
      star: 4.5,
      points: 75
    },
    price: '600.00',
  },
];

let html = '';

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
        <button class="add-btn">Add to</button>
      </div>`

})

document.querySelector('.main-container').innerHTML = html;