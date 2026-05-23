import fs from 'fs';

function run() {
  const code = fs.readFileSync('kfe_prettified.txt', 'utf8');
  const lines = code.split('\n');

  // Let's search for lines that declare section, header, or major container divs
  console.log("--- Section Declarations in Kfe ---");
  lines.forEach((line, index) => {
    if (line.includes('className:"relative overflow-hidden') || line.includes('className:"py-16 md:py-24') || line.includes('className:"sticky top-0') || line.includes('children:k.jsxs("section"') || line.includes('className:"bg-zinc-950 border-b border-zinc-900') || line.includes('k.jsx("section"') || line.includes('k.jsxs("section"')) {
      console.log(`Line ${index + 1}: ${line}`);
      console.log(lines.slice(index, index + 8).join('\n'));
      console.log("------------");
    }
  });
}

run();
