const Car = require("./Car");
const car = new Car("Mercedes", 50_000, "electric");

  describe('Check cars properties', () => {

    test('Has name', () => {
      expected = "Mercedes";
      actual = car.manufacturer;
      expect(actual).toBe(expected);
    });

    test('can set name', () => {
        car.manufacturer = "BMW";
        expected = "BMW";
        actual = car.manufacturer;
        expect(actual).toBe(expected);
      });

    test('Has Price', () => {
        expected = 50_000;
        actual = car.price;
        expect(actual).toBe(expected);
      });
  
    test('Can set price', () => {
        car.price = 70_000;
        expected = car.price;
        actual = car.price;
        expect(actual).toBe(expected);
    });


    test('Has Engine type', () => {
        expected = "electric";
        actual = car.engineType;
        expect(actual).toBe(expected);
      });
  
      test('Can set engine type', () => {
          car.price = "hyprid";
          expected = car.engineType;
          actual = car.engineType;
          expect(actual).toBe(expected);
        });


    
  
  
   
  
  
  });