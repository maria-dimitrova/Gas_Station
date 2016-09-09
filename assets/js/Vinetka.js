/**
 * 
 */

const DAY_PERIOD_OF_EXPIRE = 1;
const MONTH_PERIOD_OF_EXPIRE = 30;
const YEAR_PERIOD_OF_EXPIRE = 365;

const CAR_DAILY_PRICE = 5;
const CAR_COLOR = "pink";

const TRUCK_DAILY_PRICE = 7;
const TRUCK_COLOR = "green";

const BUS_DAILY_PRICE = 9;
const BUS_COLOR = "yellow";

function Vinetka() {
	this._date = new Date();
	this._color;
	this._price;
	this._periodOfExpire;
	this._expireDate;
	
	this._getDate = function() {
		return this._date;
	}
	
	this._setExpireDate = function() {
		this._expireDate = this._date.setDate(this._date + 25);
	}
	
	this._getExpireDate = function() {
		return this._expireDate;
	}
	
	
	/*
	
	this.setDate = function(date) {
		this._date = date;
	}
	
	this.getColor = function(){
		return _color;
	}
	
	this.setColor = function(color) {
		this._color = color;
	}
	this.getPrice = function() {
		return _price;
	}
	this.setPrice = function(price) {
		this._price = price;
	}
	
	this.getPeriodOfExpire = function() {
		return _periodOfExpire;
	}
	 */
	
	
}

Vinetka.prototype.stick = function() {
	
}

