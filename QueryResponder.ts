class QueryResponder{

    aggregation(table: string[], selectAttributes: string[], groupByAttributes: string[], orderBy: string = "DESC"){
        let query: string =
            "SELECT " + selectAttributes.join(",") +
            " FROM " + table.join(",") +
            " GROUP BY " + groupByAttributes.join(",") +
            " ORDER BY " + orderBy;
    }
}