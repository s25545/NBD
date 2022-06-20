database = connect("localhost:27017/nbd")
printjson( 
	database.people.insert({
		sex: "Male",
		first_name: "Michal",
		last_name: "Kaza",
		job: "Data Analyst",
		email: "michal@mail.pl",
		location:{
			city: "Warsaw",
			address:{
				streetname:"Baker Street",
				streetnumber:"88"
			}
		},
		description: "yes",
		height: "178",
		weight: "99.0",
		birth_date: "1998-12-11T10:11:12Z",
		nationality: "Poland",
		credit: [
			{
				type: "maestro",
				number: "7247858587934219",
				currency: "EUR",
				balance: "5686.73"
			}
		]
	})
)
printjson( 
	database.people.find({
		first_name: "Michal",
		last_name: "Kaza"
	})
)