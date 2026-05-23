import fs from 'fs';

function run() {
  const code = fs.readFileSync('zfe_prettified.txt', 'utf8');
  console.log("Size of zfe prettified:", code.length);
  const lines = code.split('\n');
  console.log("Total lines of zfe:", lines.length);

  // Print first 100 lines
  console.log("--- Kfe Top Structure ---");
  console.log(lines.slice(0, 150).join('\n'));
}

run();
