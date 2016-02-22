function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
 
  return n * factorial(n - 1);
}


function type (input) {
	var regex = /\b/ig;
	return {}.toString.call(input).split(regex)[3];
}



function stringify(input) {
	myStr = "";
	elementType = type(input)
	if(elementType === 'String') {
		//return myStr += input;
		console.log("Detected String")
	}
	else if (elementType === 'Array') {
		console.log("Detected Array")
		
	}
	else if (elementType === 'Object') {
		console.log("Detected Object")
		
	}
}