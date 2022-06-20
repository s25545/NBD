database = connect("localhost:27017/nbd")
printjson(
	database.people.find({
		"sex":"Male",
		"nationality":"Germany"
	}).toArray()
)