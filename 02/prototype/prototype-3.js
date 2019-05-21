const Car = function(color, model, dateManufactured) {
  this.color = color;
  this.model = model;
  this.dateManufactured = dateManufactured;
};

Car.prototype.getColor = function() {
  return this.color;
};
Car.prototype.getModel = function() {
  return this.model;
};
Car.prototype.carDate = function() {
  return `This ${this.model} was manufactured in the year ${this.dateManufactured}`
}

let firstCar = new Car('red', 'Ferrari', '1985');

console.log(firstCar);
console.log(firstCar.carDate()); // This Ferrari was manufactured in the year 1985.