import fs from 'fs';

function run() {
  const ffeText = fs.readFileSync('ffe_prettified.txt', 'utf8');

  // Let's look for "onUnlockMockup" or "Unlock" or similar action clicks in the formatted file
  const lines = ffeText.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('onUnlockMockup') || line.includes('Unlock') || line.includes('compile') || line.includes('Blueprint') || line.includes('button')) {
      // Print surrounding lines
      console.log(`Line ${index + 1}: ${line}`);
      const start = Math.max(0, index - 5);
      const end = Math.min(lines.length, index + 15);
      console.log("--- CONTEXT ---");
      console.log(lines.slice(start, end).join('\n'));
      console.log("================================");
    }
  });

  // Let's also scan for what features are displayed. We see Ppe.map inside.
}

run();
