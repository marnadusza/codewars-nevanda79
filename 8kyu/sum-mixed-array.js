// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// MY SOLUTIONS:
// 1.
function sumMix(x) {
	return x.map(el => el * 1).reduce((a, b) => a + b, 0)
}

// 2.
function sumMix(x) {
	let result = 0

	for (let i of x) {
		result += +i
	}
	return result
}
// 3.
function sumMix(x){
    return x.reduce((a,b) => a+(+b),0)
    }