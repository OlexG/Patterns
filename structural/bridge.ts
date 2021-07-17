// Data Base operations are the "implementation"
// Should be in a separate class hiearchy from the "abstraction"

interface dataBase {
    add(text: string): void;
    delete(text: string): void;
    save(): void;
}

class SQLDatabase implements dataBase {
	add(text: string): void {
		console.log('Added in sql database');
	}
	delete(text: string): void {
		console.log('Deleted in sql database');
	}
	save(): void {
		console.log('Saved in sql database');
	}
}

class FileDatabase implements dataBase {
	add(text: string): void {
		console.log('Added in File database');
	}
	delete(text: string): void {
		console.log('Deleted in File database');
	}
	save(): void {
		console.log('Saved in File database');
	}
}

class ControllerManager {
	db: dataBase;
	constructor(db: dataBase) {
		this.db = db;
	}
	// eslint-disable-next-line @typescript-eslint/ban-types
	login(username: string, res: {send: (ret: string) => {}}) {
		this.db.add(username);
		this.db.save();
		res.send('logged in');
	}
}

(function client() {
	const a1 = new ControllerManager(new SQLDatabase());
	const res = {
		send: (ret: string) => {
			console.log(ret);
			return ret;
		}
	};
	a1.login('user1', res);
	const a2 = new ControllerManager(new FileDatabase());
	a2.login('user2', res);
})();

