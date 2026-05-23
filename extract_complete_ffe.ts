import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');
  console.log("Loaded JS bundle length:", js.length);

  const start = 1192906;
  const end = 1222741; // Where function Zfe starts
  const completeFfe = js.slice(start, end);

  fs.writeFileSync('ffe_component_complete.txt', completeFfe);
  console.log(`Saved complete Ffe (length: ${completeFfe.length}) to ffe_component_complete.txt`);
}

run();
