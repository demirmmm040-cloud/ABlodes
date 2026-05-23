import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');
  const term = "SANDBOX SIMULATOR";
  const pos = js.indexOf(term);
  if (pos !== -1) {
    console.log(`Found '${term}' at index: ${pos}`);
    const start = pos - 1500;
    const end = Math.min(js.length, pos + 4500);
    fs.writeFileSync('blueprint_simulator_code.txt', js.slice(start, end));
    console.log("Written surrounding code to blueprint_simulator_code.txt");
  } else {
    console.log(`Could not find '${term}' in JS.`);
  }
}

run();
