import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Let's search for function Ffe or let's search for "Ffe" usages or declarations.
  // In minified react/vite, components are often declared as "function Ffe(" or "const Ffe=" or "let Ffe=" or inside a bundle block.
  // Let's search for "function Ffe" or "Ffe="
  const searchPattern1 = /function\s+Ffe\s*\(/g;
  let m1 = searchPattern1.exec(js);
  if (m1) {
    console.log("Found 'function Ffe(' declaration at index:", m1.index);
    const excerpt = js.slice(m1.index, m1.index + 12000); // Exponentiate read size since it represents simulator logic
    fs.writeFileSync('ffe_component_raw.txt', excerpt);
    console.log("Saved raw Ffe to ffe_component_raw.txt");
  } else {
    // Let's do a regex search for variables with large React structures
    console.log("No simple Ffe function, searching for 'Ffe' variable references:");
    const generic = /[a-zA-Z0-9_$]+Ffe[^a-zA-Z0-9_$]/g;
    let gem;
    while ((gem = generic.exec(js)) !== null) {
      console.log(`Reference: ${gem[0]} at ${gem.index}`);
    }
  }

  // Let's do the same for Zfe (Pricing/Roadmap matrix)
  const searchPattern2 = /function\s+Zfe\s*\(/g;
  let m2 = searchPattern2.exec(js);
  if (m2) {
    console.log("Found 'function Zfe(' declaration at index:", m2.index);
    const excerpt2 = js.slice(m2.index, m2.index + 12000);
    fs.writeFileSync('zfe_component_raw.txt', excerpt2);
    console.log("Saved raw Zfe to zfe_component_raw.txt");
  }

}

run();
