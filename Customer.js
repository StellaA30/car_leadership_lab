const Customer = function(name, wallet){
    this.name = name;
    this.wallet = wallet;
    this.car = [];

}


// extension task 2: add a customer class 
Customer.prototype.buyCar = function(){
    const customerNewCar = dealership.stock.find((car) => car.price <= this.wallet);
    this.car.push(customerNewCar);
}







module.exports = Customer;