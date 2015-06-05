// When an array of numbers is passed to this 
// function it sums the numbers.

var sumNumbers = [];
var length = sumNumbers.length;
var sumArray = function(array) {
	var sumTotal = 0;
		for( var i = 0; i < length; i++ ) {
			sumTotal += array[i];
		}
		return sumTotal;
}

console.log(sumArray(sumNumbers));