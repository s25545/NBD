db = connect("localhost:27017/nbd")
map = function() {
    for(i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
}

reduce = function(currency, values) {
    return Array.sum(values)
}

db.people.mapReduce(
    map,
    reduce,
    {
        out: "zad2",
    }
    )

printjson(db.zad2.find().toArray())