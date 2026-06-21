/* Normalize and deduplicate tags used for organizing tests.  Rules: - Trim each tag. - Lowercase each tag. - Remove blank values. - Keep first-seen order. */
function createUniqueJsBasicsTags(tags) {

    const seen   = new Set(); // track duplicates
    const result = [];        // store final tags

    for (const tag of tags) {

        // Step 1 & 2 - Trim and lowercase
        const normalized = tag.trim().toLowerCase();

        // Step 3 - Skip blank values
        if (normalized === "") continue;

        // Step 4 - Skip duplicates
        if (seen.has(normalized)) continue;

        // Add to result
        seen.add(normalized);
        result.push(normalized);
    }

    return result;
}

// Call the function
console.log(createUniqueJsBasicsTags([" Smoke ", "smoke", "Regression"]));
console.log(createUniqueJsBasicsTags(["", " API ", " ", "api"]));