'use strict'


let courses = document.getElementById('coursetext');

let laptops = document.getElementById('laptoptext');

let chairs = document.getElementById('chairtext');

// let allProducts=[];

let buttons = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button8', 'button9', 'button10', 'button11', 'button12'];


function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = 0;


    Product.allProducts.push(this);

}
Product.allProducts = [];


// for (let i = 0; i < buttons.length; i++) {
//     let p= document.createElement('p')
//     p.setAttribute('')

// }



new Product('HTML course', 50, 0);
new Product('JavaScript course', 60, 0);
new Product('PHP course', 70, 0);
new Product('paython course', 90, 0);
new Product('laptop1', 250, 0);
new Product('laptop2', 350, 0);
new Product('laptop3', 450, 0);
new Product('laptop4', 500, 0);
new Product('chair1', 150, 0);
new Product('chair2', 110, 0);
new Product('chair3', 90, 0);
new Product('chair4', 70, 0);

// console.log(Product.allProducts);

//add event

let cart = [];

courses = addEventListener('click', getButton);
laptops = addEventListener('click', getButton);
chairs = addEventListener('click', getButton);

function getButton(event) {
    for (let i = 0; i <= buttons.length; i++) {



        if (event.target.id === `button${i + 1}`) {

            if (cart.includes(Product.allProducts[i])) {

                Product.allProducts[i].quantity++;

            }
            else {

                cart.push(Product.allProducts[i]);
                Product.allProducts[i].quantity++;


            }
        }

    }
    
    updateStorage();
    console.log(cart);

}


function updateStorage() {

let arrayString = JSON.stringify(Product.allProducts);
localStorage.setItem('Product',arrayString);

    
}


