// Task
// Online Shopping System ( Use classes concept only ):-
// Create classes for products, shopping carts, and customers.
// Products should have properties like name, price, and stock quantity.
// Customers should have properties like name, email, and a shopping cart.
// Implement methods for adding products to the shopping cart, calculating the total price, and checking out.
// Ensure that the stock quantity is updated correctly when products are added to the cart and purchased.

class Product {
    constructor(name, price, stockQuantity) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        if (quantity > 0 && quantity <= product.stockQuantity) {
            this.items.push({ product, quantity });
            product.stockQuantity -= quantity;
            console.log(`${quantity} ${product.name}(s) added to the cart.`);
        } else {
            console.log("Invalid quantity or insufficient stock.");
        }
    }

    calculateTotal() {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.product.price * item.quantity;
        }
        return totalPrice;
    }

    checkout() {
        const totalPrice = this.calculateTotal();
        console.log(`Total price: $${totalPrice}`);
        this.items = []; // Clear the cart after checkout
    }
}

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.shoppingCart = new ShoppingCart();
    }
}

// Example usage:

// Creating products
const product1 = new Product("Laptop", 1000, 10);
const product2 = new Product("Mouse", 20, 50);
const product3 = new Product("Keyboard", 50, 30);

// Creating a customer
const customer = new Customer("John Doe", "john@example.com");

// Adding products to the shopping cart
customer.shoppingCart.addProduct(product1, 2);
customer.shoppingCart.addProduct(product2, 3);
customer.shoppingCart.addProduct(product3, 1);

// Calculating total price
const totalPrice = customer.shoppingCart.calculateTotal();
console.log(`Total price in the cart: $${totalPrice}`);

// Checking out
customer.shoppingCart.checkout();

// Displaying updated stock quantity
console.log(`Remaining stock quantity for ${product1.name}: ${product1.stockQuantity}`);
console.log(`Remaining stock quantity for ${product2.name}: ${product2.stockQuantity}`);
console.log(`Remaining stock quantity for ${product3.name}: ${product3.stockQuantity}`);

