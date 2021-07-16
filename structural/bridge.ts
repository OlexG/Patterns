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

class Abstraction {
	db: dataBase;
	constructor(db: dataBase) {
		this.db = db;
	}
	addAndSave(text: string) {
		this.db.add(text);
		this.db.save();
	}
}

(function client() {
	const a1 = new Abstraction(new SQLDatabase());
	a1.addAndSave('someText');
	const a2 = new Abstraction(new FileDatabase());
	a2.addAndSave('someText');
})();

