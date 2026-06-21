/* Create a standard label for a test run dashboard.

Rules:
- Trim the suite name.
- Lowercase the environment.
- Append build number as build-N.
- Join the three parts with " | ".
 */
function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {

    // Step 1 - Trim suite name
    const suite = suiteName.trim();

    // Step 2 - Lowercase environment
    const env = environment.trim().toLowerCase();

    // Step 3 - Append build number
    const build = "build-" + buildNumber;

    // Step 4 - Join with " | "
    return suite + " | " + env + " | " + build;
}

// Call the function
console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));
console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));