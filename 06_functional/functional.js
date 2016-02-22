// 06_Functional 

var map = function(array, iteratorFunction) {
	
	for(var i = 0; i<array.length; i++) {
		array[i] = iteratorFunction(array[i]);
	}
	return array;
}


var doubler = function(num) {

	return num * 2;
};


var filter = function(array, iteratorFunction) {
	var newArray = [];
	for(var i = 0; i<array.length; i++) {
		if(iteratorFunction(array[i])) {
			newArray.push(array[i]);
		}
	}

	return newArray;
};


var contains = function(collection, element) {
	for(var prop in collection) {
		if(collection[prop] === element) {
			
			return true;
		}
	}

	return false;
};

var countWords = function(string) {
	if(string === "" || string === undefined) {
		return 0;
	}
	var wordCount = string.split(' ').length;
	return wordCount;	
	
};

var reduce = function(array, startVal, iteratorFunction) {
	var currentVal = startVal;

	for(var i = 0; i<array.length; i++) {
		currentVal = iteratorFunction(currentVal, array[i]);
	};
	return currentVal;
};

var countWordsInReduce = function(currentWordCount, string) {
	return currentWordCount + countWords(string);
}

var sum = function(array) {
	return reduce(array, 0, function(a, b) {
      return a + b;
    });
};


var every = function(array, iteratorFunction) {
	if(array.length === 0) {
		return true;
	}
	for(var i = 0; i < array.length; i++) {
		if(!iteratorFunction(array[i])) {
			return false;
		}
	}
	return true;
};


var any= function(array, iteratorFunction) {
	if(array.length === 0) {
		
		return false;
	}
	if(iteratorFunction === undefined) {
		
		return false;
	}
	for(var i = 0; i < array.length; i++) {
		if(iteratorFunction(array[i]) === true) {
			
			return true;
		}
	}
	return false;
};




































