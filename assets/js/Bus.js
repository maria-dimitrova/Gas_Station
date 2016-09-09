/**
 * 
 */

function Bus(model, year) {
	Vehicle.call(this, model, year);
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;