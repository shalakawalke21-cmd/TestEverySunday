/* Calculate a simple weighted practice score.

Rules:
- Each passed item gives 2 points.
- Each failed item subtracts 1 point.
- Skipped items are 0 points.
- Return the final number. */
function calculateJsBasicsWeightedScore(passed, failed, skipped) {

    // Step 1 - passed = +2 points each
    const passPoints = passed * 2;

    // Step 2 - failed = -1 point each
    const failPoints = failed * 1;

    // Step 3 - skipped = 0 points (no calculation needed)

    // Step 4 - Return final score
    return passPoints - failPoints;
}

// Call the function
console.log(calculateJsBasicsWeightedScore(5, 2, 1));
console.log(calculateJsBasicsWeightedScore(3, 0, 0));
console.log(calculateJsBasicsWeightedScore(1, 4, 3));