var QueryResponder = /** @class */ (function () {
    function QueryResponder() {
    }
    QueryResponder.prototype.aggregation = function (table, selectAttributes, groupByAttributes, orderBy) {
        if (orderBy === void 0) { orderBy = "DESC"; }
        var query = "SELECT " + selectAttributes.join(",") +
            " FROM " + table.join(",") +
            " GROUP BY " + groupByAttributes.join(",") +
            " ORDER BY " + orderBy;
    };
    return QueryResponder;
}());
