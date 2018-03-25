"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mysql = require('mysql');
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'pokedex'
        });
        this.connection.connect(function (err) {
            if (!err) {
                console.log("Database is connected ... \n\n");
            }
            else {
                console.log("Error connecting database ... \n\n");
            }
        });
        this.app.listen(3000);
    }
    return Server;
}());
exports.default = Server;
new Server();
