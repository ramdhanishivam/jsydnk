class DatabaseConnection {
    constructor(){
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }

        this.connection = this.connectDatabase();
        DatabaseConnection.instance = this;

        return this;
    }

    connectDatabase(){
        console.log("connecting to db")
        return {id: Date.now(), status: "connected"}
    }

    getConnection(){
        return this.connection;
    }
}

const instance1 = new DatabaseConnection();
console.log(instance1.getConnection(), "First Connection")

const instance2 = new DatabaseConnection();
console.log(instance2.getConnection(), "Second Connection")

console.log(instance2 == instance1);

