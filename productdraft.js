'use strict';


let cart=[];
let productCourse = document.getElementById('course');
productCourse.addEventListener('click', selector);

function selector(event) {
  console.log(event.target.id );
  event.preventDefault();

  if (event.target.id == 'img1') {
    cart.push('product1');
  }

  else if (event.target.id === 'img2'){
    cart.push('product2');
  }

  else if (event.target.id === 'img3')
    cart.push('product3');

  addProductToLocalStorage();
}



let data;
function addProductToLocalStorage()
{
  localStorage.setItem('Items',data) ;
  data=JSON.stringify(cart);

  console.log(cart);

}
