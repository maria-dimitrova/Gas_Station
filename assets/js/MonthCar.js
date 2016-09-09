/**
 * 
 */

function MonthCar() {
	DayCar.call(this);
}

MonthCar.prototype = Object.create(DayCar.prototype);
MonthCar.prototype.constructor = MonthCar;

MonthCar.prototype.getPrice = function() {
	return CAR_DAILY_PRICE * 10;
}

MonthCar.prototype.getPeriodOfExpire = function() {
	return MONTH_PERIOD_OF_EXPIRE;
}