database = connect("localhost:27017/nbd")
printjson( database.people.remove({height: {$gt:"190"}}))
printjson(database.people.find({height: {$gt:"190"}}).count())