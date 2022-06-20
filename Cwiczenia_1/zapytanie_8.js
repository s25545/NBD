database = connect("localhost:27017/nbd")
printjson( 
	database.people.update(
		{"location.city": "Moscow"},
		{$set: {"location.city": "Moskwa"}},
		{"multi": true}
	)
)
printjson(database.people.find({"location.city": "Moskwa"}).count())