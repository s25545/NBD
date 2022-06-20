db = connect("localhost:27017/nbd")
map = function() {
    emit(this.sex, {height: this.height, weight: this.weight})
}

reduce = function(sex, values) {
    sumH = 0
    sumW = 0
    for (s in values) {
        sumH += parseFloat(values[s].height)
        sumW += parseFloat(values[s].weight)
    }
    return { "Height average" : sumH/values.length, "Weight average": sumW/values.length}
}

db.people.mapReduce(
    map,
    reduce,
    {
        out: "zad1",
    }
    )

printjson(db.zad1.find().toArray())