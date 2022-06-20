db = connect("localhost:27017/nbd")
printjson(db.people.aggregate([
    {$unwind: "$credit"},
    {
      $set: {"credit.balance": {$toDecimal: "$credit.balance"}}
    },
    {
      $match: {
          nationality: "Poland",
          sex: "Female"
        }
    },
    {
        $group: {
            _id: "$credit.currency",
            sum: {$sum: "$credit.balance"},
            avg: {$avg: "$credit.balance"}
        }
    }

]).toArray())