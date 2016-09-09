/**
 * 
 */

function DayCar() {
	Vinetka.call(this);
}

DayCar.prototype = Object.create(Vinetka.prototype);
DayCar.prototype.constructor = DayCar;

DayCar.prototype.getPrice = function() {
	return CAR_DAILY_PRICE;
}

DayCar.prototype.getColor = function(){
	return CAR_COLOR;
}

DayCar.prototype.getPeriodOfExpire = function() {
	return DAY_PERIOD_OF_EXPIRE;
}

DayCar.prototype.getExpireDate = function() {
	this._getDate().setDate(this._getDate().getDate() + this.getPeriodOfExpire());
	return this._expireDate = this._getDate();
}
