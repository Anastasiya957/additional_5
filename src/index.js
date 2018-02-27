module.exports = function check(str, bracketsConfig) {
	// your solution
	var openBrackets = [];
	var closeBrackets = [];

	for (var i = 0; i < bracketsConfig.length; i++) {
		openBrackets[i] = bracketsConfig[i][0];
		closeBrackets[i] = bracketsConfig[i][1];
	}

	var stack = [];
	
	for (var i = 0; i < str.length; i++) {

		if ( openBrackets.indexOf(str[i]) != -1 && closeBrackets.indexOf(str[i]) == -1 ) {
			stack.push(str[i]);
		}

		else if ( openBrackets.indexOf(str[i]) != -1 ) {

			if (stack.length !=0 && str[i] == stack[ stack.length - 1 ]) {
				stack.pop();
			} else {
				stack.push(str[i]);
			}
		} else {

			if ( stack.length == 0 ) {
				return false;
			}
			posOpenBr = openBrackets.indexOf( stack[stack.length - 1] );
			posCloseBr = closeBrackets.indexOf( str[i] );

			if ( posOpenBr == posCloseBr ) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
}
