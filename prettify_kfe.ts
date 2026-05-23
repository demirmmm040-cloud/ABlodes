import fs from 'fs';

function prettify(filePath: string, outPath: string) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    let formatted = raw
      .replace(/([{};,\[\]])/g, '$1\n')
      .replace(/\n\s*\n/g, '\n')
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
  prettify('gfe_component_raw.txt', 'gfe_prettified.txt');
  prettify('kfe_component_raw.txt', 'kfe_prettified.txt');
}

run();
