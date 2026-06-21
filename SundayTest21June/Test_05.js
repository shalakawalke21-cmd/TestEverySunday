/* Write a validator for names used in helper functions, variables, or test data keys.  Rules: - 
Value must be a non-empty string after trimming. - It must start with a letter, underscore, or
 dollar sign. - Remaining characters may include letters, digits, underscore, or dollar sign. 
 - Reject reserved words used in this chapter: let, const, var, class, function, return. */

function isValidJsBasicsIdentifier(value) {

    // Step 1 - Check non-empty string
    if (typeof value !== 'string' || value.trim() === '') return false;

    const trimmed = value.trim();

    // Step 2 & 3 - Check valid identifier pattern
    const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (!validPattern.test(trimmed)) return false;

    // Step 4 - Reject reserved words
    const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];
    if (reservedWords.includes(trimmed)) return false;

    return true;
}

// Execute / Test
console.log(isValidJsBasicsIdentifier("loginButton"));  
console.log(isValidJsBasicsIdentifier("$submit"));      
console.log(isValidJsBasicsIdentifier("1login"));       
console.log(isValidJsBasicsIdentifier("let"));
