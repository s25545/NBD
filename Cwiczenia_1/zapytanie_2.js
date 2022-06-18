database = connect("localhost:27017/nbd")
printjson(database.people.findOne({"sex":"Female", "nationality":"China"}))