/**
 * 
 */

function MonthBus() {
	DayBus.call(this);
}

MonthBus.prototype = Object.create(DayBus.prototype);
MonthBus.prototype.constructor = MonthBus;

MonthBus.prototype.getPrice = function() {
	return BUS_DAILY_PRICE * 10;
}

MonthBus.prototype.getPeriodOfExpire = function() {
	return MONTH_PERIOD_OF_EXPIRE;
}