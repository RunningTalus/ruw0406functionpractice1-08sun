var sun = function (userWord) {
	if (userWord.indexOf('sun') >= 0) {
		return true;
	} else {
		return false;
	};	
};
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));