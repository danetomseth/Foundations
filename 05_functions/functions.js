// Functions.js
var concat_string = function() {
	var argArray = Array.prototype.slice.call(arguments);
	argArray = argArray.join("");
	return argArray;
	
};

var yourFunctionRunner = function(func1, func2) {
	var string = "";
	string += func1();
	if(typeof func2 != 'undefined') {
		string += func2();
	}
	
	return string;
	//passed strings from callThisFunction and andThisFunction

};


var makeAdder = function(x) {
    	var storeValue = x;
    var addFunc = function(x) {
        storeValue += x;
        console.log(storeValue);
        return storeValue;
    };
    return addFunc;
};

var once = function(func) {
	var count = 0;
   var changeFunc = function() {
       var stopOnce = function() {
       
    };
       if(count ===0) {
           func();
           count++;
       }
       else {
           increment = stopOnce;
       }
   };
   return changeFunc;
   
};


var createObjectWithTwoClosures = function() {
	var createObj = function() {
	
	var obj = {};
		
	obj.oneIncrementor = function(x) {
		
	};
	obj.tensIncrementor = function(x) {
		
	};
	obj.getValue = function() {
		
	};
	return obj;
	};	
	var objStore = createObj;
    
};

