/**
 * 
 */

function YearCar(){
	MonthCar.call(this);
}

YearCar.prototype = Object.create(MonthCar.prototype);
YearCar.prototype.constructor = YearCar;

YearCar.prototype.getPrice = function() {
	return MonthCar.prototype.getPrice.call(this) * 6;
}

YearCar.prototype.getPeriodOfExpire = function() {
	return YEAR_PERIOD_OF_EXPIRE;
}