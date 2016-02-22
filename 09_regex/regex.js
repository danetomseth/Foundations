function findACount(str) {
	str = str.match(/A/ig);
	if(str === null) {
		return 0;
	}
	return str.length;
	
}



function areaCodeFinder(str) {
	var num = 0;
	num = parseInt(str.match(/\d{3}/)[0]);
	console.log(num)
	return num;
	
}



function adjustUrlParameter(url, param) {
	//var regex = "/"+param;
	if(url.match(/\?/) === null) {
		console.log("no match");
		var str = url.match(param);
		if(str === null) {
			return url + "?" + param;
		}
			
		
	}
	else if (param.match(/ID=/ig) !== null) {
		url = url.split(/\?/ig)[0];
		console.log("new url", url)
		return url + "?" + param;
	}
	else {
		return url + "&" + param;
	}
	
	
}



function stringPlusPlus(str) {
	
	var word = str.match(/(^\D+)/ig);
	var num = str.match(/(\d+$)/ig);
	if(num === null) {
		return word + "1";
	}
	if(word === null) {
		word = "";
	}
	num = num.join("");
	console.log(typeof num);
	num = num.split("");

	var index = num.length - 1;
	while(num[index] === '9') {
		console.log(num[index]);
		num[index] = "0";
		console.log(num);
		index--;
	}
	var newNum = parseInt(num[index]) + 1;
	num[index] = newNum;
	

	
	num = num.join("");
	return word + num;
}
