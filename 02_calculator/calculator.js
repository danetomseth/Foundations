


var createCalculator = function() {
	var newCalc = {};
	newCalc.sum = 0;
	newCalc.value = function() {
		return this.sum;

	};
	newCalc.add = function(x) {
		this.sum += x;
	}
	newCalc.subtract = function(x) {
		this.sum = this.sum - x;
	}
	

	return newCalc;

};

var calculator = createCalculator();