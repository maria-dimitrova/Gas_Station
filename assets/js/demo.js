/**
 * 
 */

//създаване на бензиностанция и генериране на винетки
var gasStation = new GasStation();
gasStation.makeVinetki();

//изписване на екрана цвета и цената на всяка винетка
for (var i = 0; i < gasStation.getVinetki().length; i++) {
	console.log('Color: ' + gasStation.getVinetki()[i].getColor() + ', price: ' + gasStation.getVinetki()[i].getPrice());
}

//създаване на 5 шофьора
var driver1 = new Driver('Maria', 10000, gasStation);
var driver2 = new Driver('Moni', 5000, gasStation);
var driver3 = new Driver('Djoni', 3000, gasStation);
var driver4 = new Driver('Boni', 8000, gasStation);
var driver5 = new Driver('Zori', 6000, gasStation);

//създаване на превозни средства и разпределяне сред шофьорите
var drivers = [driver1, driver2, driver3, driver4, driver5];
var vidoveVehicle = [new Car(), new Bus(), new Truck()];
for (var i = 0; i < 5; i++) {
	for (var k = 0; k < 5; k++) {
		var randomVehicle = Math.floor(Math.random() * vidoveVehicle.length);
		drivers[i].getVehicles().push(vidoveVehicle[randomVehicle]);
	}
}

var randomDriver = Math.floor(Math.random() * drivers.length);
drivers[randomDriver].buyVinetki();

console.log(drivers[randomDriver].getMoney());
/*
console.log(drivers[randomDriver].getVehicles()[0].getVinetka());
console.log(drivers[randomDriver].getVehicles()[1].getVinetka());
console.log(drivers[randomDriver].getVehicles()[2].getVinetka());
console.log(drivers[randomDriver].getVehicles()[3].getVinetka());
console.log(drivers[randomDriver].getVehicles()[4].getVinetka());
*/

/*
console.log(driver1.getVehicles());
console.log(driver2.getVehicles());
console.log(driver3.getVehicles());
console.log(driver4.getVehicles());
console.log(driver5.getVehicles());
*/



var w = new MonthBus();
console.log(w.getExpireDate());

