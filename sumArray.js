// When an array of numbers is passed to this 
// function it sums the numbers in the array.

// Instructions: 
// 1.) Copy/Paste code below into the console.
// 2.) Set the array sumNumbers equal to an array of numbers.
// e.g. -  sumNumbers = [1, 2, 3];
// 3.) Call the function sumArray with the sumArray as an argument.
// e.g. - sumArray(sumNumbers);

var sumNumbers = [];							
var sumArray = function(array) {
	var length = sumNumbers.length;
	var sumTotal = 0;
		for( var i = 0; i < length; i++ ) {
			sumTotal += array[i];
		}
	return sumTotal;
}
												// e.g. -  sumNumbers = [1, 2, 3];
												// e.g. -  sumArray(sumNumbers);