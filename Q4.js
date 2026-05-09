class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    displayDetails() {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Price: " + this.price);
        console.log("----------------------");
    }
}
let car1 = new Car("Toyota", "Innova", 2000000);
let car2 = new Car("Hyundai", "i20", 800000);
let car3 = new Car("Tata", "Nexon", 1200000);
car1.displayDetails();
car2.displayDetails();
car3.displayDetails();
