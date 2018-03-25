import Server from "./Server";

export class QueryResponder{

    aggregation(table: string[], selectAttributes: string[], groupByAttributes: string[], orderBy: string = "DESC"){
        let sql: string =
            "SELECT " + selectAttributes.join(",") +
            " FROM " + table.join(",") +
            " GROUP BY " + groupByAttributes.join(",") +
            " ORDER BY " + orderBy;

        Server.connection.query(sql, function (err, result){
            if(err) throw err;
            console.log("Result: " + result);
        });
    }
}