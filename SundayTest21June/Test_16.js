/* Convert a list of tasks into a numbered checklist.

Rules:
- Keep the original task text after trimming.
- Number items from 1.
- Append " - TODO" to each item.
- Skip blank values. */
function buildJsBasicsChecklist(tasks) {

    const result = [];  // store final checklist
    let number   = 1;  // start numbering from 1

    for (const task of tasks) {

        // Step 1 - Trim each task
        const trimmed = task.trim();

        // Step 2 - Skip blank values
        if (trimmed === "") continue;

        // Step 3 & 4 - Number + append TODO
        result.push(number + ". " + trimmed + " - TODO");
        number++;
    }

    return result;
}

// Call the function
console.log(buildJsBasicsChecklist(["Install Node", "Create GitHub repo"]));
console.log(buildJsBasicsChecklist(["Practice switch", " ", "Push code"]));