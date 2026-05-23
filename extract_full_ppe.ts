import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Let's find "Ppe" array ending by matching brackets
  const startIdx = js.indexOf('Ppe=[');
  if (startIdx !== -1) {
    let brackets = 1;
    let endIdx = startIdx + 5;
    while (brackets > 0 && endIdx < js.length) {
      if (js[endIdx] === '[') brackets++;
      else if (js[endIdx] === ']') brackets--;
      endIdx++;
    }
    console.log("Full Ppe content:\n", js.slice(startIdx, endIdx));
  }

  // Let's also look for Ue (the log step strings)
  const logTerm = '"[DISPATCH] Analyzing search volume for';
  const startLogIdx = js.indexOf(logTerm);
  if (startLogIdx !== -1) {
    console.log("\nFound log term at index:", startLogIdx);
    // Find surrounding array
    const beforePart = js.lastIndexOf('[', startLogIdx);
    const afterPart = js.indexOf(']', startLogIdx);
    if (beforePart !== -1 && afterPart !== -1) {
      console.log("Log array content:\n", js.slice(beforePart, afterPart + 1));
    }
  }
}

run();
