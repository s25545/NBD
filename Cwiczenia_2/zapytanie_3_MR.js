db = connect("localhost:27017/nbd")
map = function() {
    emit(this.job, 1)
}

db.people.mapReduce(
    map,
    function(){},
    {
        out: "zad3",
    }
    )
printjson(db.zad3.find().toArray())