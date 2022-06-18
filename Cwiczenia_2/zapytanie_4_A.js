db = connect("localhost:27017/nbd")
printjson(db.people.aggregate([
    { $project: {
        nationality: "$nationality",
        BMI: { $divide: [
                {$toDecimal: "$weight"},
                {$pow: [{$divide: [{$toDecimal: "$height"}, 100]}, 2]}
            ]}
    }},
    { $group : {_id: "$nationality",
            avg_BMI: { $avg: "$BMI"},
            min_BMI: { $min: "$BMI"},
            max_BMI: { $max: "$BMI"}
}}]).toArray())