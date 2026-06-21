/* Merge default and override configuration values for a test helper.  Rules: - Override values must win. - If retries is missing from both objects, default it to 0. - Do not mutate the input objects.Input */
function mergeJsBasicsConfig(defaults, overrides) {

    // Step 1 - Merge without mutating originals
    const merged = { ...defaults, ...overrides };

    // Step 2 - If retries missing from both, default to 0
    if (merged.retries === undefined) {
        merged.retries = 0;
    }

    // Step 3 - Return final merged object
    return merged;
}

// Call the function
console.log(mergeJsBasicsConfig({ retries: 1, env: "dev" }, { retries: 3 }));
console.log(mergeJsBasicsConfig({ env: "qa" }, { timeout: 5000 }));
console.log(mergeJsBasicsConfig({ env: "dev", retries: 2 }, { env: "stage" }));