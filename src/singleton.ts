// an object that can only be instantiated once
// cannot be instantiated more than once using `new` keyword
// use case: database connection, logger, etc.

export class Database {
  static instance: Database;
  private constructor() {
    // init db connection
    this.connectToDatabase();
  }

  private connectToDatabase() {
    // Code to establish the database connection
  }

  // static means that the method is available on the class itself, not on the instances
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public static query(sql: string) {
    // Code to execute the SQL query
  }
}

// use singleton class
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
