db = connect("localhost:27017/nbd")
printjson(db.people.aggregate([
    {
        $set: {
            "height": {$toDecimal: "$height"}
        }
    },
    {
        $set: {
            "weight": {$toDecimal: "$weight"}
        }
    },
    {
        $group: {
            _id: "$sex",
            avg_weight: {
                $avg: "$weight"
            },
            avg_height: {
                $avg: "$height"
            }
        }
    },
    {
        $set:
        {
            avg_weight: {
                $round: ["$avg_weight", 2]
            },
            avg_height: {
                $round: ["$avg_height", 2]
            }
        }
    }
]).toArray())