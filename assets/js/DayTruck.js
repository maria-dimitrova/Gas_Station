/**
 * 
 */

function DayTruck() {
	Vinetka.call(this);
}

DayTruck.prototype = Object.create(Vinetka.prototype);
DayTruck.prototype.constructor = DayTruck;

DayTruck.prototype.getPrice = function() {
	return TRUCK_DAILY_PRICE;
}

DayTruck.prototype.getColor = function() {
	return TRUCK_COLOR;
}

DayTruck.prototype.getPeriodOfExpire = function() {
	return DAY_PERIOD_OF_EXPIRE;
}

DayTruck.prototype.getExpireDate = function() {
	this._getDate().setDate(this._getDate().getDate() + this.getPeriodOfExpire());
	return this._expireDate = this._getDate();
}