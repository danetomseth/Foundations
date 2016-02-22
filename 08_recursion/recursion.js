function factorialIterative(num) {
	var sum = 1;
	for(var i = num; i > 0; i--) {
		sum *= i;
	}
	return sum;
}


function factorial(num) {
	
	if(num === 0) {
		return 1;
	}
	return num * factorial(num - 1);
}



function fib(num) {
	if(num < 2) {
		return 1;
	}
	return this.fib(num -1) + this.fib(num-2);

}




function type(prop) {   
	var regex = /\b/ig;
	return {}.toString.call(prop).split(regex)[3];
	debugger;
}



function stringify(input) {
	inputType = type(input);
	debugger;
	if(inputType === "String") {
		return '"' + input + '"';
	}
	if(inputType === "Undefined") {
		return input + '';	
	}
	if(inputType === "Boolean") {
		return input + '';	
	}
	if(inputType === "Number") {
		return input + '';	
	}
	if (inputType === "Function") {
    	return input + '';
  	}
	if(inputType === "Null") {
		return "null";	
	}
	if (inputType === "Array") {
    	return '[' +
    	input.map(function(o) {
      		return stringify(o);
    	}).join(",") + ']';
  	}
	if(inputType === "Object") {
		var newArr = [];
		Object.keys(input).forEach(function(key) {
      		var val = stringify(input[key]);
      		if (val !== null) {
        		newArr.push('"' + key + '": ' + val);
      		}
    	});
		
		return "{" + newArr.join(",") + "}";
		
	}

	
}

/*  First draft attempt
function stringify(input, x, y) {
	
	inputType = type(input);
	cellType = type(input);
	console.log("Current input",input);
	if(inputType === "Object") {
		console.log(input);
		var length = 0;
		for (var key in input) {
		        if (input.hasOwnProperty(key)) length++;
		    }
		console.log("length", length)
	}
	//console.log("y value is:", y);
	myStr = "";
	if(count === length) {
		console.log("here");
		return;
	}
	if(inputType === "Array") {
		console.log("Input is Array");
		length = input.length + 1;
		y = input.length + 1;
		return myStr +  "["+ input.map(stringify, length, y) + "]";
	}
	if(inputType === "Object") {
		for(var prop in input) {
			myStr += stringify(prop)+": "+stringify(input[prop])+",";
		}
		myStr = myStr.substring(0, myStr.length - 1);
		return "{"+myStr+"}";
		
	}
	if(cellType === "String") {
		input = '"' + input + '"';
	}
	
	
	
  	
    //console.log("input is:", input);
	count++;
	console.log("Count:",count);
	return myStr += input;
}
*/

