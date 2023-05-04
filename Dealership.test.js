const Car = require("./Car");
const bmw = new Car("BMW", 50_000, "electric");
const mercedes = new Car("Mercedes",70_000, "hybrid");
const mercedes2 = new Car("Mercedes",30_000, "electric");
const audi = new Car("BMW", 40_000, "hyrid");


// instantiate new dealership
const Dealership = require("./Dealership");
const dealer = new Dealership("Stella's", 50);

describe('Check dealership functionalities', () => {

    test('can check number of cars', () => {
      expected = 0;
      actual = dealer.stock.length;
      expect(actual).toBe(expected);
    });

    test('can add new cars', () => {
        dealer.addCarToStock(bmw);
        expected = [bmw];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
      });
    
      test('can add two new cars', () => {
        dealer.addCarToStock(mercedes);
        expected = [bmw, mercedes];
        actual = dealer.stock;
        expect(actual).toEqual(expected);
      });
    

    test('can get car manufacturers', () => {
        expected = ["BMW", "Mercedes"];
        actual = dealer.getAllCarManufacturers();
        expect(actual).toEqual(expected);
    });


    test('can all cars by a manufacturer', () => {
        dealer.addCarToStock(mercedes2);
        expected = [mercedes, mercedes2];
        actual = dealer.findAllCarsFromManufacturer("Mercedes");
        expect(actual).toEqual(expected);
    });


    test('can check final number of cars before calculating total stock value', () => {
        dealer.addCarToStock(audi);
        expected = 4;
        actual = dealer.stock.length;
        expect(actual).toBe(expected);
        expect(actual).toEqual(expected);
    });

    test('can calcualte current stock value', () => {
        expected = 190_000;
        actual = dealer.calculateStockValue();
        expect(actual).toEqual(expected);
    });

    //testing extension 1: - Modify and test the method for adding a car to stock to ensure we can't add more cars than we have space for.

    const dealership2 = new Dealership("Stella's", 4)

    test('can add 4 cars to dealiership 2',() => { 
        dealership2.addCarToStock(audi);
        dealership2.addCarToStock(bmw);
        dealership2.addCarToStock(mercedes);
        dealership2.addCarToStock(mercedes2);
        expected = 4;
        actual = dealership2.stock.length;
        expect(actual).toBe(expected);
        expect(actual).toEqual(expected);
})

})
