/**
 * 
 */

function Car(model, year) {
	Vehicle.call(this, model, year);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;