/**
 * 
 */

function YearBus() {
	MonthBus.call(this);
}

YearBus.prototype = Object.create(MonthBus.prototype);
YearBus.prototype.constructor = YearBus;

YearBus.prototype.getPrice = function() {
	return MonthBus.prototype.getPrice.call(this) * 6;
}

YearBus.prototype.getPeriodOfExpire = function() {
	return YEAR_PERIOD_OF_EXPIRE;
}