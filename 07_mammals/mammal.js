var Mammal = function(name) {
	this.name = name;
	this.offspring = [];
};

Mammal.prototype.sayHello = function() {
	return "My name is " + this.name + ", I'm a Mammal";
};


Mammal.prototype.haveBaby = function() {
	child = {};
	child.name = "Baby " + this.name;
	this.offspring = [child];
	return child;
};


function Cat(name, color) {
	Mammal.call(this, name);
	

	this.color = color;
	var newFunc = this.haveBaby;
	
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;







Cat.prototype.haveBaby= function (color) {
	//newFunc.apply(this)
	
	this.color = color;
	this.name = "Baby " + this.name;
	console.log(this.name);
	this.offspring = [this];
	return this;
};

//Cat.prototype.haveBaby.constructor = Cat;
