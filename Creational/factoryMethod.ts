interface User {
	getWelcomeMessage(): string
}

abstract class UserCreator {
	abstract createUser(): User

	printWelcomeMessage(user: User) {
		console.log(user.getWelcomeMessage());
	}
}

class Admin implements User {
	getWelcomeMessage() {
		return 'Welcome Admin!';
	}
}

class Customer implements User {
	getWelcomeMessage() {
		return 'Welcome Customer!';
	}
}

class AdminCreator extends UserCreator {
	createUser() {
		return new Admin();
	}
}

class CustomerCreator extends UserCreator {
	createUser() {
		return new Customer();
	}
}

function someClientFunction(creator: UserCreator) {
	// is not aware of creator type
	const user = creator.createUser();
	creator.printWelcomeMessage(user);
}

someClientFunction(new AdminCreator());
someClientFunction(new CustomerCreator());
