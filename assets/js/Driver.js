/**
 * 
 */

function Driver(name, money, gasStation) {
	this._name = name;
	this._money = money;
	this._gasStation = gasStation;
	this._vehicles = [];
	
	this.getName = function(){
		return this._name;
	}
	
	this.setName = function(name) {
		this._name = name;
	}
	
	this.getMoney = function(){
		return this._money;
	}
	
	this.getGasStation = function(){
		return this._gasStation;
	}
	
	this.setGasStation = function(gasStation) {
		this._gasStation = gasStation;
	}
	
	this.getVehicles = function(){
		return this._vehicles;
	}
	
}

Driver.prototype.buyVinetki = function() {
	var carVinetki = [new DayCar(), new MonthCar(), new YearCar()];
	var busVinetki = [new DayBus(), new MonthBus(), new YearBus()];
	var truckVinetki = [new DayTruck(), new MonthTruck(), new YearTruck()];
	
	for (var i = 0; i < this.getVehicles().length; i++) {
		var random = Math.floor(Math.random() * 3);
		if (this.getVehicles()[i] instanceof Car) {
			this.getVehicles()[i].setVinetka(carVinetki[random]);
			this._money -= carVinetki[random].getPrice();
		}
		if (this.getVehicles()[i] instanceof Bus) {
			this.getVehicles()[i].setVinetka(busVinetki[random]);
			this._money -= busVinetki[random].getPrice();
		}
		if (this.getVehicles()[i] instanceof Truck) {
			this.getVehicles()[i].setVinetka(truckVinetki[random]);
			this._money -= truckVinetki[random].getPrice();
		}
	}
}

Driver.prototype.buyVinetkaForCurrentVehicle = function() {
	
}