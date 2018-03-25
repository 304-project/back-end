"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./Server");
var QueryResponder = /** @class */ (function () {
    function QueryResponder() {
    }
    QueryResponder.prototype.aggregation = function (table, selectAttributes, groupByAttributes, orderBy) {
        if (orderBy === void 0) { orderBy = "DESC"; }
        var sql = "SELECT " + selectAttributes.join(",") +
            " FROM " + table.join(",") +
            " GROUP BY " + groupByAttributes.join(",") +
            " ORDER BY " + orderBy;
        Server_1.default.connection.query(sql, function (err, result) {
            if (err)
                throw err;
            console.log("Result: " + result);
        });
    };
    return QueryResponder;
}());
exports.QueryResponder = QueryResponder;
