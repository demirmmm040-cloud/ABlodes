import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Let's search for some ROI calculation keywords or symbols inside standard JS,
  // such as "estimated", "ROI", "typicalMonthlyJobVolume", "*", "+", "leadValue"
  const keywords = ["leadValue", "typicalMonthlyJobVolume", "priceEstimate"];
  keywords.forEach(kw => {
    const regex = new RegExp(`[A-Za-z0-9_$]*${kw}[A-Za-z0-9_$]*`, 'g');
    let m;
    const matches = [];
    while ((m = regex.exec(js)) !== null) {
      if (!matches.includes(m[0])) {
        matches.push(m[0]);
      }
    }
    console.log(`Keyword '${kw}' matches:`, matches);
  });

  // Let's print out the code around "typicalMonthlyJobVolume" to see math calculations
  const query = /typicalMonthlyJobVolume/g;
  let p;
  if ((p = query.exec(js)) !== null) {
    const start = Math.max(0, p.index - 300);
    const end = Math.min(js.length, p.index + 1000);
    console.log("\nExcerpt around typicalMonthlyJobVolume:\n", js.slice(start, end));
  }
}

run();
