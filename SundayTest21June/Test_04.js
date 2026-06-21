
/* Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-". */
// Step 1 - Create the function
function normalizeJsBasicsLabel(label) {
     const cleaned = label
        .trim()                        
        .toLowerCase()                 
        .replace(/[^a-z0-9]+/g, '-')  
        .replace(/^-|-$/g, '');     
        return cleaned ? "js-basic-" + cleaned : "js-basic";
}

// Step 2 - Execute / Call the function
console.log(normalizeJsBasicsLabel(" Login Button "));
console.log(normalizeJsBasicsLabel("User Profile: Edit!"));
console.log(normalizeJsBasicsLabel("---Search@@Box---"));
console.log(normalizeJsBasicsLabel(" "));