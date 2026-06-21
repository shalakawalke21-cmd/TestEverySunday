/* <!--  Normalize Locator Error Messages
Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`. 
Input
rawMessage = " Locator not found after TIMEOUT "
Output
Normalized: locator not found after timeout Category: TIMEOUT
 --> */
 function normalizeError(rawMessage) {
  // Step 1: Trim extra spaces
  let normalized = rawMessage.trim();

  // Step 2: Convert to lowercase
  normalized = normalized.toLowerCase();

  // Step 3: Collapse multiple spaces into one
  normalized = normalized.replace(/\s+/g, " ");

  // Step 4: Determine category
  let category;
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log(`Normalized: ${normalized} Category: ${category}`);
}

// Example Input
const rawMessage = " Locator not found after TIMEOUT ";
normalizeError(rawMessage);
