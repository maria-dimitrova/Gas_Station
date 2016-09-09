/**
 * 
 */

function Truck(model, year) {
	Vehicle.call(this, model, year);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;