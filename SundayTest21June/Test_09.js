/* Build a compact summary object from test result labels.

Rules:
- Count total items.
- Count items containing pass, fail, and skip.
- Return an object with total, passed, failed, skipped.
 */
function summarizeJsBasicsResults(results) {

    // Step 1 - Start all counters at 0
    let passed  = 0;
    let failed  = 0;
    let skipped = 0;

    // Step 2 - Loop and check each item
    for (const result of results) {
        const lower = result.toLowerCase();

        if (lower.includes("pass")) passed++;
        if (lower.includes("fail")) failed++;
        if (lower.includes("skip")) skipped++;
    }

    // Step 3 - Return summary object
    return {
        total   : results.length,
        passed  : passed,
        failed  : failed,
        skipped : skipped
    };
}

// Call the function
console.log(summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"]));
console.log(summarizeJsBasicsResults([]));
console.log(summarizeJsBasicsResults(["a-pass", "b-pass"]));