/**
 * 
 */

function MonthTruck() {
	DayTruck.call(this);
}

MonthTruck.prototype = Object.create(DayTruck.prototype);
MonthTruck.prototype.constructor = MonthTruck;

MonthTruck.prototype.getPrice = function() {
	return TRUCK_DAILY_PRICE * 10;
}

MonthTruck.prototype.getPeriodOfExpire = function() {
	return MONTH_PERIOD_OF_EXPIRE;
}