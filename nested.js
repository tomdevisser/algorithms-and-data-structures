// O(n^2) - Quadratic Time
function printAllPairs(n) {
	// O(n) - Linear Time
	for (var i = 0; i < n; i++) {
		// O(n) - Linear Time
		for (var j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
