/* Find the first critical bug title from a bug list.

Rules:
- Each bug has title and severity.
- Return the title of the first bug with severity "critical".
- Return "No critical bug" when none exists. */
function findFirstCriticalJsBasicsBug(bugs) {

    // Step 1 - Loop through each bug
    for (const bug of bugs) {

        // Step 2 - Check severity
        if (bug.severity.toLowerCase() === "critical") {
            return bug.title; // Step 3 - Return first match
        }
    }

    return "No critical bug"; // Step 4 - None found
}

console.log(findFirstCriticalJsBasicsBug([
    { title: "Typo", severity: "low" },
    { title: "Login crash", severity: "critical" }
]));

console.log(findFirstCriticalJsBasicsBug([
    { title: "Spacing issue", severity: "low" }
]));