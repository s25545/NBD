database = connect("localhost:27017/nbd")
printjson( 
	database.people.update(
		{job: "Editor"},
		{$unset: {email:1}},
		{"multi": true}
	)
)

printjson(
	database.people.find(
		{
			job: "Editor"
		},
		{
			_id:0,
			job:1,
			email:1
		}
	).toArray()
)