import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Let's find "function Gfe(" inside the bundler output
  const gfePat = /function\s+Gfe\s*\(/g;
  let gm = gfePat.exec(js);
  if (gm) {
    console.log("Found function Gfe at index:", gm.index);
    // Find Kfe too
    const kfePat = /function\s+Kfe\s*\(/g;
    let km = kfePat.exec(js);
    if (km) {
      console.log("Found function Kfe at index:", km.index);
      
      // Save Gfe block
      const gfeCode = js.slice(gm.index, km.index);
      fs.writeFileSync('gfe_component_raw.txt', gfeCode);
      console.log("Saved Gfe to gfe_component_raw.txt");

      // Save Kfe block to the end of the file
      const kfeCode = js.slice(km.index);
      fs.writeFileSync('kfe_component_raw.txt', kfeCode);
      console.log("Saved Kfe to kfe_component_raw.txt");
    }
  } else {
    console.log("Could not find function Gfe or Kfe.");
  }
}

run();
