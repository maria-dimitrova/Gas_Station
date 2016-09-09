/**
 * 
 */

function DayBus() {
	Vinetka.call(this);
}

DayBus.prototype = Object.create(Vinetka.prototype);
DayBus.prototype.constructor = DayBus;

DayBus.prototype.getPrice = function() {
	return BUS_DAILY_PRICE;
}

DayBus.prototype.getColor = function(){
	return BUS_COLOR;
}

DayBus.prototype.getPeriodOfExpire = function() {
	return DAY_PERIOD_OF_EXPIRE;
}

DayBus.prototype.getExpireDate = function() {
	this._getDate().setDate(this._getDate().getDate() + this.getPeriodOfExpire());
	return this._expireDate = this._getDate();
}