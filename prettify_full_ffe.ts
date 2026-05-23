import fs from 'fs';

function run() {
  const raw = fs.readFileSync('ffe_component_complete.txt', 'utf8');
  let formatted = raw
    .replace(/([{};,\[\]])/g, '$1\n')
    .replace(/\n\s*\n/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');

  fs.writeFileSync('ffe_prettified_complete.txt', formatted);
  console.log("Prettified complete Ffe!");
}

run();
