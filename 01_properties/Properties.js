function setPropertiesOnObjLiteral(obj) {
	obj.x = 7;
	obj.y = 8;
	
	obj.onePlus = function(value) {
		value++;
		return value;
	};
	

	}

function setPropertiesOnArrayObj(arrayObj) {
	arrayObj.hello = function() {
		return "Hello!";
	};
	arrayObj.full = "stack";
	arrayObj[0] = 5;
	arrayObj.twoTimes = function(value) {
		value = value * 2;
		return value;
	};
}

function setPropertiesOnFunctionObj(functionObj) {
	functionObj.year = 2015;
	functionObj.divideByTwo = function(value) {
		value = value / 2;
		return value;
	};
	functionObj.prototype.helloWorld = function(){
		return "Hello World";
	}
	return "I am a function object, all functions are objects! Function can have their own properties too!";

}