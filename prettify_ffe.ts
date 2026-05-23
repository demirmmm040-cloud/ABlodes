import fs from 'fs';

function prettify(filePath: string, outPath: string) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    // Prettify by inserting line breaks after common JS structures
    let formatted = raw
      .replace(/([{};,\[\]])/g, '$1\n') // break after brackets, semicolons, commas
      .replace(/\n\s*\n/g, '\n') // remove empty lines
      // Let's add some basic indentation or simple spacing to make it human-readable
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .join('\n');

    fs.writeFileSync(outPath, formatted);
    console.log(`Prettified ${filePath} -> ${outPath}`);
  } catch (err) {
    console.error(`Error prettifying ${filePath}:`, err);
  }
}

function run() {
  prettify('ffe_component_raw.txt', 'ffe_prettified.txt');
  prettify('zfe_component_raw.txt', 'zfe_prettified.txt');
}

run();
