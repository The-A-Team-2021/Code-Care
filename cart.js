'use strict';


let table = document.getElementById('cart');

let form = document.getElementById('form');



function Customer(name,phone,email) {
    this.name=name;
    this.phone=phone;
    this.email=email;
    
    Customer.customerArray.push(this);
    
}

Customer.customerArray=[];

form.addEventListener('submit', submitter);



function submitter(event) {
    event.preventDefault();
    
    Customer.customerArray.name=event.target.name.value;
    
    Customer.customerArray.phone=event.target.phoneNumber.value;
    
    Customer.customerArray.email=event.target.email.value;


    // console.log( Customer.customerArray.name);
    // console.log(Customer.customerArray.phone);
    // console.log( Customer.customerArray.email);

    console.log(Customer.customerArray);


    
    storeCustomerData();
}

// let profile;

// for (let i = 0; i < Customer.customerArray.length; i++) {
    
//     profile.
    
// }

// let data;

// console.log(Customer.customerArray);


function storeCustomerData () {
    
    let data=JSON.stringify(Customer.customerArray);

    localStorage.setItem('Customer',data);

    
    
    
    
    console.log(data);
}






// let data;
// function addProductToLocalStorage()
// {
//   localStorage.setItem('Items',data) ;
//   data=JSON.stringify(cart);

//   console.log(cart);

// }









let cartItems;


function getFromLocalStorage () {

  cartItems = JSON.parse(localStorage.getItem('Items'));

  console.log(cartItems);
}



function render () {
  for (let i = 0; i < cartItems.length ; i++) {
    let trProducts = document.createElement('tr');

    table.appendChild(trProducts);

    let tdProducts = document.createElement('td');
    trProducts.appendChild(tdProducts);

    tdProducts.textContent = cartItems[i] ;


    let tdPrice = document.createElement('td');
    trProducts.appendChild(tdPrice);

    tdPrice.textContent = '50jd';


    let tdRemove = document.createElement('td');
    trProducts.appendChild(tdRemove);

    tdRemove.textContent = 'X' ;
  }





}


table.addEventListener('click', deleteItem);



function deleteItem(event) {

  if (event.target.textContent === 'X' ) {
    // cartItems.removeItem(event.target.id);
    // localStorage.deleteRow();
    // localStorage.removeItem(event.target.id);

    console.log(event);
    

  }


 
}





getFromLocalStorage();

render();


