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
    
    let name= event.target.name.value;

    let phone =event.target.phoneNumber.value;
   
    let email=event.target.email.value;

    new Customer(name, phone,email);

    alert(`Thank you ${name} we will send you confirmation Message to: ${email}`);
    
    console.log(Customer.customerArray);
    
    
    storeCustomerData();
}








function CartItems(name,price,quantity,totalPricePerItem) {
  this.name=name;
  this.price=price;
  this.quantity=quantity;
  this.totalPrice=totalPricePerItem;
  
  CartItems.cartArray.push(this);
  
  
  
}
CartItems.cartArray=[];


function getFromLocalStorage () {

  CartItems.cartArray= JSON.parse(localStorage.getItem('Cart'));

  console.log(CartItems.cartArray);


 console.log(CartItems.cartArray);
  
}

  




let totalPricePerItem=0;
function render () {

  for (let i = 0; i < CartItems.cartArray .length ; i++) {
    let trProducts = document.createElement('tr');
    trProducts.setAttribute('id', 'trProducts'+i)
    table.appendChild(trProducts);

    let tdProducts = document.createElement('td');
   
    trProducts.appendChild(tdProducts);

    tdProducts.textContent = CartItems.cartArray[i].name ;


    let tdPrice = document.createElement('td');
    trProducts.appendChild(tdPrice);

    tdPrice.textContent = CartItems.cartArray[i].price;
    
    
    let tdQuan = document.createElement('td');
    trProducts.appendChild(tdQuan);

    tdQuan.textContent = CartItems.cartArray[i].quantity;

    let tdPerItemPrice=document.createElement('td');
    trProducts.appendChild(tdPerItemPrice);
   
    totalPricePerItem+=CartItems.cartArray[i].totalPricePerItem;

    let tdRemove = document.createElement('td');
   
    tdRemove.setAttribute('id', 'tdRemove'+i)
    
    trProducts.appendChild(tdRemove);


    tdRemove.textContent = 'X' ;
  }

  let total=document.createElement('tr');
  
  table.appendChild( total);

  let tdtotal = document.createElement('td');
  total.appendChild(tdtotal );

   tdtotal.textContent = 'Total' ;


    let tdTotalPrice = document.createElement('td');
    total.appendChild(tdTotalPrice);

    tdTotalPrice.textContent = totalPricePerItem;

    
    

}

table.addEventListener('click',removeItem);

function removeItem(event){
     event.preventDefault();

    // console.log(event)


  if (event.target.textContent === 'X')
  {
    //console.log(event.target.id)
   let x= event.target.id

   console.log(x.length-1)
   let y=x[x.length-1];
   let z="trProducts"

    z+=y 
    console.log(z)
    let tr=document.getElementById(`${z}`);
    tr.textContent='';
    console.log(CartItems.cartArray);
    CartItems.cartArray.splice(x,1);
    
    table.textContent='';
    totalPricePerItem=0;
    render();

   
  }
  
}


getFromLocalStorage();

render();





