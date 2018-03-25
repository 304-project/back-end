let express = require("express");
let mysql = require('mysql');

export default class Server {
    public app = express();
    public  connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'pokedex'
    });

    constructor(){
        this.connection.connect(function(err){
            if(!err) {
                console.log("Database is connected ... \n\n");
            } else {
                console.log("Error connecting database ... \n\n");
            }
        });
        this.app.listen(3000);
    }
}

new Server();