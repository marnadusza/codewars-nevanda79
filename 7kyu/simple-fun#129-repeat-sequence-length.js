//

// MY SOLUTIONS:
// 1.

function repeatSequenceLen(a0) {
	const set1 = new Set()
	const sequence = []

	while (!set1.has(a0)) {
		set1.add(a0)
		sequence.push(a0)
		a0 = sumSquareOfDigits(a0)
	}

	let startIndex = sequence.indexOf(a0)
	return sequence.length - startIndex
}
function sumSquareOfDigits(a0) {
	return a0
		.toString()
		.split('')
		.map(Number)
		.reduce((x, y) => x + y * y, 0)
}
