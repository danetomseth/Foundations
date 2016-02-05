var repeat = function(string,times) {
	var i = 0;
	var store = "";
	while(i < times) {
		store += string;
		i++
	}
	return store;
};


var sum = function(array) {
	var length = array.length - 1;
	var add = 0;

	for(var i=0; i <= length; i++) {
		add += array[i];
	
	}
	return add;
};

var gridGenerator = function (dimension) {
	var string = "";
	for(var i = 0; i<dimension; i++) {
		for(var j = 0; j < dimension; j++) {
			if( (i+j) % 2 === 0) {
				string += "#";
			}
			else {
				string += " ";
			}
		}
		string += "\n";
	}
	return string;
};

var join = function (arr , delim) {
	var string = "";
	var length = arr.length; 

	for(var i = 0; i<length; i++) {
		string += arr[i];
		if(typeof delim == "undefined") {
			delim = "";
		}
		if(i !== length - 1) {
			string += delim;
		}

	}
	return string;
};


var paramify = function(obj) {
  var prop = [];
  var string = "";
  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)){
      prop.push(key + "=" + obj[key]);
    }
  }
  prop.sort();
  var length = prop.length;
  for(var i = 0; i<length; i++) {
     string += prop[i];
     if(i !== length - 1) {
         string += "&";
     }
  }
  return string;
};