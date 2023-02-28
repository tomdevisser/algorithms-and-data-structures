// Testing the performance by counting the amount of operations performed by each function.

// The number of operations is directly proportional to the size of n.
// O(n) - Linear Time
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// No matter how large n is, the number of operations is always 3.
// O(1) - Constant Time
function addUpTo2(n) {
	return (n * (n + 1)) / 2;
}
