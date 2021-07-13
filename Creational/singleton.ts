class DBConnection {
	private static connectionString: string;

	public static instance: DBConnection;

	private constructor() {
		DBConnection.connectionString = 'someString';
	}

	public static getDBConnection() {
		if (!DBConnection.instance) {
			DBConnection.instance = new DBConnection();
		}
		return DBConnection.instance;
	}
}

const obj1 = DBConnection.getDBConnection();
const obj2 = DBConnection.getDBConnection();

console.log(obj1 === obj2); // true
