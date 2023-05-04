const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = null;

}

Customer.prototype.buyCar = function(car){
    const customerNewCar = dealership.stock.find(car => car.price <= this.wallet);
    this.car.push(customerNewCar);
}





module.exports = Customer;