/**
 * 
 */

function YearTruck(){
	MonthTruck.call(this);
}

YearTruck.prototype = Object.create(MonthTruck.prototype);
YearTruck.prototype.constructor = YearTruck;

YearTruck.prototype.getPrice = function() {
	return MonthTruck.prototype.getPrice.call(this) * 6;
}

YearTruck.prototype.getPeriodOfExpire = function() {
	return YEAR_PERIOD_OF_EXPIRE;
}