/**
 * 
 */

function GasStation() {
	this._money;
	this._vinetki = [];
	
	
	
}

GasStation.prototype.makeVinetki = function() {
	var vidoveVinetki = [new DayCar(), new DayBus(), new DayTruck(), new MonthCar(), new MonthBus(), new MonthTruck(), new YearCar(), new YearBus(), new YearTruck()];
	for (var i = 0; i < 30; i++) {
		var randomVinetka = Math.floor(Math.random() * vidoveVinetki.length);
		this._vinetki.push(vidoveVinetki[randomVinetka]);
	}
}

GasStation.prototype.getVinetki = function() {
	return this._vinetki;
}