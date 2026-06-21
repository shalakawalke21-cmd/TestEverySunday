/* Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms. */

function getJsBasicsKeywordMeaning(term) {

    // Step 1 - Normalize input
    const normalized = term.trim().toLowerCase();

    // Step 2 - Keyword map
    const keywords = {
        "node"      : "runtime",
        "v8"        : "engine",
        "npm"       : "package-manager",
        "let"       : "block-scoped-variable",
        "const"     : "constant-variable",
        "var"       : "function-scoped-variable",
        "function"  : "reusable-block",
        "return"    : "output-from-function",
        "if"        : "conditional-statement",
        "loop"      : "repeated-execution",
        "string"    : "text-data-type",
        "number"    : "numeric-data-type",
        "boolean"   : "true-false-data-type"
    };

    // Step 3 - Return meaning or "unknown"
    return keywords[normalized] || "unknown";
}

// Call the function
console.log(getJsBasicsKeywordMeaning("NODE"));        
console.log(getJsBasicsKeywordMeaning(" v8 "));        
console.log(getJsBasicsKeywordMeaning("npm"));         
console.log(getJsBasicsKeywordMeaning("not-a-topic"));