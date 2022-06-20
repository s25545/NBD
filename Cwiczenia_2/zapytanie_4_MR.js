db = connect("localhost:27017/nbd")
map = function() {
    weight = parseFloat(this.weight)
    height = parseFloat(this.height) / 100
	BMI = weight / (height * height)

	values = {
		max_BMI: BMI,
		min_BMI: BMI,
		sum_BMI: BMI,
        counter: 1
	}

	emit(this.nationality, values)
}

reduce = function(key, values) {

	retValue = {
		max_BMI: values[0].max_BMI,
		min_BMI: values[0].min_BMI,
		sum_BMI: 0,
        counter: 0
	}

    for (let i = 0; i < values.length; i++) {
        retValue.max_BMI = Math.max(values[i].max_BMI, retValue.max_BMI)
        retValue.min_BMI = Math.min(values[i].min_BMI, retValue.min_BMI)
        retValue.sum_BMI += values[i].sum_BMI
        retValue.counter += values[i].counter
    }

	return retValue
}

finalize = function (key, reducedVal) {
	retValue = {
		min_BMI: reducedVal.min_BMI,
		avg_BMI: reducedVal.sum_BMI / reducedVal.counter,
		max_BMI: reducedVal.max_BMI,
	}
	return retValue
}

db.people.mapReduce(
    map,
    reduce,
    {
        finalize: finalize,
        out: "zad4"
    })

printjson(db.zad4.find().toArray())