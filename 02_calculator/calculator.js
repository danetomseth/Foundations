var createCalculator = function() {
	var calculator = {};
	var sum = 0;
	calculator.value = function() {
		return sum;
	};
	calculator.add = function(x) {
		sum = sum + x;
	}
	calculator.subtract = function(x) {
		sum = sum - x;
	}
	

	return calculator;

};

