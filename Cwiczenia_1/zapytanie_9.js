database = connect("localhost:27017/nbd")
printjson( 
	database.people.update(
		{first_name: "Antonio"},
		{$push: {hobby: "pingpong"}},
		{"multi": true}
	)
)

printjson(
	database.people.find(
		{
			first_name: "Antonio"
		},
		{
			_id:0,
			first_name:1,
			hobby:1
		}
	).toArray()
)