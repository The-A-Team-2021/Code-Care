'use strict'


let courses= document.getElementById('coursetext');

let laptops= document.getElementById('laptoptext');

let chairs= document.getElementById('chairtext');

let allProducts=[];




function Product(name,price,quantity,id) {
    this.name = name;
    this.price = price;
    this.quantity = 0;
    this.id=id;
    
    Product.allProducts.push(this);

}

new Product (HTMLcourse,50,0,button1)