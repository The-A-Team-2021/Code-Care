let Cart= function (items) {
    this.items= items;
    }
    
    
    Cart.prototype.addItem = function (product, quantity) {
    let newItem  = new CartItem(product,quantity);
    this.items.push(newItem);
    }
    
    
    Cart.prototype.saveToLocalStorage= function() {
    localStorage.setItem('cart',JSON.stringify(this.items))
    };
    
    
    Cart.prototype.removeItem=function (item) {
    this.items.splice(item,1);}
    
    
    
    let CartItem = function (product, quantity) {
      this.product = product;
      this.quantity = quantity;
    };
    
    
    
    let Product = function (filePath, name) {
      this.filePath = filePath;
      this.name = name;
      Product.allProducts.push(this);
    };
    Product.allProducts = [];




    function generateCatalog() {
        new Product('img/html-course.jpg', 'html-course');
        new Product('img/php-course.jpg', 'php-course');
        new Product('img/python-course.jpg', 'python-course');
        new Product('img/javaScript-course.jpg', 'javascript-course');
        new Product('img/laptop1.jpg', 'laptop1');
        new Product('img/laptop2.jpg', 'laptop2');
        new Product('img/laptop3.jpg', 'laptop3');
        new Product('img/laptop4.jpg', 'laptop4');
        new Product('img/chair1.jpg', 'chair1');
        new Product('img/chair2.jpg', 'chair2');
        new Product('img/chair3.jpg', 'chair3');
        new Product('img/chair4.jpg', 'chair4');
       
      }
      
      
      generateCatalog();

