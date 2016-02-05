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


var paramify = function(obj) {
    var store = "";
    var count = 0;
    for(var i in obj) {
        if(count !== 0) {
            store += "&";
        }
        store += i.toString();
        store += "=";
        store += obj[i].toString();
        count++;
    }
    return store;
};