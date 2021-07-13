function validate(initialMessage: string, ...args: Function[]) {
	let passes;
	args.every((fn) => {
		const res = fn(initialMessage);
		passes = res;
		return res;
	});
	return passes;
}

function isLowerCase(message: string) {
	return (message.toLowerCase() === message);
}

function isWelcomeMessage(message : string) {
	return (message.includes('welcome') || message.includes('Welcome'));
}

function isLeaveMessage(message : string) {
	return (message.includes('bye') || message.includes('Bye'));
}

// validate a lowercase welcome message
console.log(
	validate('should return false', isWelcomeMessage, isLowerCase),
	validate('WELCOME still should return false', isWelcomeMessage, isLowerCase),
	validate('welcome should return true', isWelcomeMessage, isLowerCase),
);

// validate a goodbye message
console.log(
	validate('should return false', isLeaveMessage),
	validate('Bye should return true', isLeaveMessage),
);
