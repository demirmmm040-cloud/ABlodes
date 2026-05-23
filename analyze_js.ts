import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');
  console.log("Loaded JS bundle length:", js.length);

  // Search for the word 'BLODES' (case insensitive)
  const query = /blodes/gi;
  let match;
  const indices: number[] = [];
  while ((match = query.exec(js)) !== null) {
    indices.push(match.index);
  }
  console.log(`Found 'blodes' at ${indices.length} positions:`, indices);

  // Let's print chunks of JS around the word "blodes" (1000 characters before and after)
  console.log("\n--- EXCERPTS AROUND 'blodes' ---");
  indices.forEach((index, num) => {
    console.log(`\nExcerpt ${num + 1} (around index ${index}):`);
    const start = Math.max(0, index - 300);
    const end = Math.min(js.length, index + 800);
    console.log(js.slice(start, end));
    console.log("-----------------------------------------");
  });

  // Let's also look for other Turkish/English text keywords like "Paket", "Fiyat", "Web", "Hizmetler", "İletişim", "Contact"
  const keywords = ["conversion", "business", "websites", "agency", "pricing", "contact", "about", "portfolio", "trusted", "local"];
  keywords.forEach(kw => {
    const regex = new RegExp(kw, 'gi');
    let m;
    const pos = [];
    while ((m = regex.exec(js)) !== null) {
      pos.push(m.index);
    }
    console.log(`Found keyword '${kw}': ${pos.length} times. (first positions: ${pos.slice(0, 5)})`);
  });

  // Let's write another script that pulls out all strings that appear to be Turkish or business titles
  // We can write that to 'extracted_texts.txt'
  const textStrings: string[] = [];
  const strRegex = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g;
  let strMatch;
  while ((strMatch = strRegex.exec(js)) !== null) {
    const s = strMatch[0];
    if (s.length > 20 && !s.includes("React") && !s.includes("addEventListener") && !s.includes("attribute") && !s.includes("Error")) {
      textStrings.push(s);
    }
  }
  console.log(`Found ${textStrings.length} highly custom strings.`);
  fs.writeFileSync('extracted_custom_strings.txt', textStrings.join('\n\n'));
}

run();
