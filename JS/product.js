'use strict';


let courses = document.getElementById('coursetext');

let laptops = document.getElementById('laptoptext');

let chairs = document.getElementById('chairtext');


let buttons=[]

for(let i=1;i<=24;i++) {
    buttons.push(`button${i}`)
}




function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = 0;


    Product.allProducts.push(this);

}
Product.allProducts = [];






new Product('HTML course', 50, 0);
new Product('JavaScript course', 60, 0);
new Product('PHP course', 70, 0);
new Product('python course', 100, 0);
new Product('SQL course', 40, 0);
new Product('ASP course', 90, 0);
new Product('C++ course', 80, 0);
new Product('C# course', 80, 0);
new Product('laptop1', 250, 0);
new Product('laptop2', 350, 0);
new Product('laptop3', 450, 0);
new Product('laptop4', 500, 0);
new Product('laptop5', 550, 0);
new Product('laptop6', 400, 0);
new Product('laptop7', 300, 0);
new Product('laptop8', 200, 0);
new Product('chair1', 150, 0);
new Product('chair2', 110, 0);
new Product('chair3', 90, 0);
new Product('chair4', 120, 0);
new Product('chair5', 75, 0);
new Product('chair6', 85, 0);
new Product('chair7', 65, 0);
new Product('chair8', 70, 0);

// console.log(Product.allProducts);



let cart = [];

courses.addEventListener('click', getButton);
laptops.addEventListener('click', getButton);
chairs.addEventListener('click', getButton);

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


    let arrayString = JSON.stringify(cart);

    localStorage.setItem('Cart', arrayString);


}




let option1 = document.getElementById('Courses')
let option2 = document.getElementById('Laptops')
let option3 = document.getElementById('Chairs')
let selection = document.getElementById('products')
selection.addEventListener('change', scroll)

function scroll(event) {


    if (selection.value === option1.value) {
        document.getElementById('course').scrollIntoView();
    } else if (selection.value === option2.value) {
        document.getElementById('laptop').scrollIntoView();
    } else if (selection.value === option3.value) {
        document.getElementById('chair').scrollIntoView();
    }

}








