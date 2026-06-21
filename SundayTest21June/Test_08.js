/* Count how many check result strings represent a pass.

Rules:
- Treat matching as case-insensitive.
- A passing item contains the word "pass".
- Return only the count. */
function countPassingJsBasicsChecks(results) {

    let count = 0;

    for (const result of results) {
        if (result.toLowerCase().includes("pass")) {
            count++;
        }
    }

    return count;
}

// Call the function
console.log(countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"]));
console.log(countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"]));
console.log(countPassingJsBasicsChecks(["one-fail", "two-skip"]));