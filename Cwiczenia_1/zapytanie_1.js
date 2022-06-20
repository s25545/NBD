database = connect("localhost:27017/nbd")
printjson(database.people.findOne({}))