import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Find occurrences of "agency_hero"
  const q1 = "agency_hero";
  let pos = js.indexOf(q1);
  if (pos !== -1) {
    console.log("Found agency_hero at:", pos);
    console.log(js.slice(Math.max(0, pos - 200), Math.min(js.length, pos + 200)));
  }

  // Find occurrences of "business_mockups"
  const q2 = "business_mockups";
  let pos2 = js.indexOf(q2);
  if (pos2 !== -1) {
    console.log("Found business_mockups at:", pos2);
    console.log(js.slice(Math.max(0, pos2 - 200), Math.min(js.length, pos2 + 200)));
  }
}

run();
