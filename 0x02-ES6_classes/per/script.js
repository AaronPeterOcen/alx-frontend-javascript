class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  displayProduct() {
    console.log(`Name of the product : ${this.name}`);
    console.log(`Price per unit : $${this.price.toFixed(2)}`);
  }

  salesTax(tax) {
    return this.price + this.price * tax;
  }
}

const tax = 0.04;

const product1 = new Product("Beans", 200);
const product2 = new Product("Rice", 50);

product2.displayProduct();
const ttl = product2.salesTax(tax);
console.log(`Total {with tax}: $${ttl.toFixed(2)}`);

product1.displayProduct();

const total = product1.salesTax(tax);
console.log(`Total {with tax}: $${total.toFixed(2)}`);
