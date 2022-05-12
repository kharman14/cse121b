
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(2,4,6,8,10,12,14,16,18,20)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		let value = theNumbers[aNumber]
		sum += value*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}
