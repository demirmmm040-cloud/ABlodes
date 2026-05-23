import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Find Ppe array
  const ppeQuery = /Ppe\s*=\s*\[/g;
  let matches;
  while ((matches = ppeQuery.exec(js)) !== null) {
    const start = matches.index;
    const end = Math.min(js.length, start + 1200);
    console.log("Ppe matching start excerpt:\n", js.slice(start, end));
  }

  // Let's print out all array definitions of the form "xyz = [" or "xyz = [{" near the end
  // We can write a simple regex search for variables with array values
  const arrayReg = /const [A-Za-z0-9_$]+\s*=\s*\[\{/g;
  while ((matches = arrayReg.exec(js)) !== null) {
    console.log("Found array var:", js.slice(matches.index, matches.index + 200));
  }
}

run();
