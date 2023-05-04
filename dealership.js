// const car = require("./car");

const Dealership = function(name, maxNoOfCars){
    this.name = name;
    this.maxNoOfCars = maxNoOfCars;
    this.stock = [];
  

}

// stock count of cars in the dealership
Dealership.prototype.stockCount = function(){
    return this.stock.length}


//     //testing 
// const dealer = new Dealership("Stella's", 50);   
// console.log(dealer.stockCount());


    // method to add new car
Dealership.prototype.addCarToStock = function(newCar){
    this.stock.push(newCar);
}

// extension 1 : adding car to stock with max limit

Dealership.prototype.addCarToStockwithMaxLimit = function(newCar){
    if (this.stock < this.maxNoOfCars){
        this.stock.push(newCar);
    }
}


// find car manufacturer 
Dealership.prototype.getAllCarManufacturers = function(){
    const manufacturers = this.stock.map(car => car.manufacturer);
    return manufacturers;

}


// find cars by manufacturer name
Dealership.prototype.findAllCarsFromManufacturer = function(manufacturerName){
    const carsByManufacturerName = this.stock.filter(car => car.manufacturer === manufacturerName);
    return carsByManufacturerName;

}


// calculate the value of the cars in stock
Dealership.prototype.calculateStockValue = function(){
    const stockValue = this.stock.reduce((accumulator , car) => {
        return accumulator + car.price}, 0);
        return stockValue;
}


// extension 3:Write a `sellCar` method to `Dealership` which removes a car from the `stock`. This method will also call `buyCar()` from `customer`. 

Dealership.prototype.sellCar = function(customer, car){
    if (customer.canBuy){
        delete this.stock.customer.car;

    }
}




module.exports = Dealership;