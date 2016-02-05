// this = {}
//this.__proto__ = RPNCalculator.prototype

var RPNCalculator = function () {
	this.total = 0;
	this.array = [];

};

RPNCalculator.prototype.value = function(){
	return this.total;
};

RPNCalculator.prototype.push = function(num){
	return this.array.push(num);
	
};

/*try {
	var length = this.array.length;
	if(length == 0) {
		throw new "rpnCalculator is empty";
	}
}*/


RPNCalculator.prototype.plus = function() {
	var length = this.array.length;
	if(length == 0) {
		throw new this.toThrow();
	}
	var lastIndex = this.array.length -1;
    this.total = this.array[lastIndex] + this.array[lastIndex - 1];
    this.array[lastIndex -1] = this.total;
    this.array.pop();

    
};

RPNCalculator.prototype.minus = function() {
	var length = this.array.length;
	if(length == 0) {
		throw new this.toThrow();
	}
	var lastIndex = this.array.length -1;
    this.total = this.array[lastIndex - 1] - this.array[lastIndex];
    this.array[lastIndex -1] = this.total;
    this.array.pop();

};

RPNCalculator.prototype.divide = function() {
	var length = this.array.length;
	if(length == 0) {
		throw new this.toThrow();
	}
	var lastIndex = this.array.length -1;
    this.total = this.array[lastIndex - 1] / this.array[lastIndex];
    this.array[lastIndex -1] = this.total;
    this.array.pop();
};

RPNCalculator.prototype.times = function() {
	var length = this.array.length;
	if(length == 0) {
		throw new this.toThrow();
	}
	var lastIndex = this.array.length -1;
    this.total = this.array[lastIndex - 1] * this.array[lastIndex];
    this.array[lastIndex -1] = this.total;
    this.array.pop();
};



RPNCalculator.prototype.toThrow = function() {
	throw "rpnCalculator is empty"
	
};






