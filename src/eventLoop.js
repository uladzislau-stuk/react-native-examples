// difficult job
let i = 0

let start =  Date.now()

// batch complex calculation
function count() {
	if (i < 1e9 - 1e6) {
		setTimeout(count)
	}

	do {
		i++
	} while (i % 1e6 !== 0)

	if (i === 1e9) {
		console.log("Done in " + (Date.now() - start) + 'ms')
	}
}

// count()