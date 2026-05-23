import fs from 'fs';

function run() {
  const ffeLines = fs.readFileSync('ffe_prettified.txt', 'utf8').split('\n');
  console.log("Total ffe lines after prettifying:", ffeLines.length);
  // Log the last 150 lines
  console.log("--- FFE BOTTOM ---");
  console.log(ffeLines.slice(Math.max(0, ffeLines.length - 150)).join('\n'));

  // Let's do the same for ZFE (Pricing plans matrix)
  const zfeLines = fs.readFileSync('zfe_prettified.txt', 'utf8').split('\n');
  console.log("\nTotal zfe lines after prettifying:", zfeLines.length);
  console.log("--- ZFE BOTTOM ---");
  console.log(zfeLines.slice(Math.max(0, zfeLines.length - 150)).join('\n'));
}

run();
