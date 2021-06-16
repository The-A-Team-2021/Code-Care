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

    //alert(`Thank you ${name} we will send you confirmation Message to: ${email}`);
    Swal.fire(
      `Thank you  ${name}`,
      'You order has been confirmed, We will contact you soon',
      'success'
    )
      
    

    document.getElementById("form").reset();
    localStorage.clear();
    table.textContent='';
    
    
    
    
    
}








function CartItems(name,quantity,totalPrice) {
  this.name=name;
  
  this.quantity=quantity;
  this.totalPrice=totalPrice;
  
  CartItems.cartArray.push(this);
  
  
  
}
CartItems.cartArray=[];


function getFromLocalStorage () {

  CartItems.cartArray= JSON.parse(localStorage.getItem('Cart'));

  console.log(CartItems.cartArray);
}

console.log(CartItems.cartArray);




let totalOfTotal=0;
function render () {
   let trHeader=document.createElement('tr');
   table.appendChild(trHeader);

   let thName=document.createElement('th')
   trHeader.appendChild(thName);
   thName.textContent=`Products`;

   
   let thPrice=document.createElement('th')
   trHeader.appendChild(thPrice);
   thPrice.textContent=`Price`;

   let thQuantity=document.createElement('th')
   trHeader.appendChild(thQuantity);
   thQuantity.textContent=`Quantity`;


   let thRemove=document.createElement('th')
   trHeader.appendChild(thRemove);
   thRemove.textContent=`Remove`;

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

    // let tdPerItemPrice=document.createElement('td');
    // trProducts.appendChild(tdPerItemPrice);
   
    console.log(CartItems.cartArray);

    totalOfTotal+=Number(CartItems.cartArray[i].totalPrice);
    

    console.log(totalOfTotal);

    let tdRemove = document.createElement('td');
   
    tdRemove.setAttribute('id', 'tdRemove'+i)
    
    trProducts.appendChild(tdRemove);


    tdRemove.textContent = 'X' ;
  }

  let total=document.createElement('tr');
  
  table.appendChild( total);

  let tdtotal = document.createElement('div');
  total.appendChild(tdtotal );
    
   tdtotal.textContent = 'Total' ;


    let tdTotalPrice = document.createElement('div');
    total.appendChild(tdTotalPrice);
    
    tdTotalPrice.setAttribute('id', 'total');
    tdTotalPrice.textContent = totalOfTotal;

    
    

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

    z+=y ;
    console.log(z)
    let tr=document.getElementById(`${z}`);
    tr.textContent='';
    console.log(CartItems.cartArray);
    CartItems.cartArray.splice(x,1);
    
    table.textContent='';
    totalOfTotal=0;
    render();

   
  }
  
}


getFromLocalStorage();
console.log(CartItems.cartArray);
render();





