interface IncompatibleAPI {
	displayList(arr: any): void;
}

// Some api that the client cannot work with
class Target implements IncompatibleAPI {
	displayList (arr: string[]) {
		arr.forEach((e) => console.log(e));
	}
}

/*
 * Adapter which converts objects which the client
 * uses to arrays and calls the methods of Target
 * In this way it allows the client to work with Target
 */
class Adapter implements IncompatibleAPI {
	target: Target
	constructor (target: Target) {
		this.target = target;
	}

	displayList (obj: Record<string, any>) {
		console.log('Converting object to array...');
		this.target.displayList(Object.values(obj));
	}
}

const someObj = {
		'1': 'test1',
		'2': 'test2',
		'3': 'test3'
	},

	adapter = new Adapter(new Target());

adapter.displayList(someObj);
