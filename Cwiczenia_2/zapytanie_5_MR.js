db = connect("localhost:27017/nbd")

map = function() {
    for(i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
}

reduce = function(currency, values) {
    return {"sum":Array.sum(values), "avg":Array.sum(values)/values.length}
}

db.people.mapReduce(
    map,
    reduce,
    {
        query: {nationality:"Poland", sex:"Female"},
        out: "zad5",
    }
    )

printjson(db.zad5.find().toArray())