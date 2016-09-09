/**
 * 
 */

function Vehicle(model, year) {
	this._model = model;
	this._vinetka;
	this._year = year;
}

Vehicle.prototype.setVinetka = function(vinetka) {
	this._vinetka = vinetka;
}

Vehicle.prototype.getVinetka = function() {
	return this._vinetka;
}