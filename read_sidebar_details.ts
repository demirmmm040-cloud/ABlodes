import fs from 'fs';

function run() {
  const code = fs.readFileSync('wireframe_sidebar_code.txt', 'utf8');

  // Let's find specific keywords and print excerpts
  const keywords = [
    "Vibrant Emerald", 
    "Vibrant Emerald / Growth", 
    "Warm Bronze", 
    "Hyper-Dispatch Blue", 
    "Clean Minimalist", 
    "Playful", 
    "Theme / Accent Profile",
    "Estimated Live ROI Estimation",
    "annualizedEstRevenue",
    "Unlock Free Blueprint Layout Now"
  ];

  keywords.forEach(kw => {
    const idx = code.indexOf(kw);
    if (idx !== -1) {
      console.log(`\nFound KW: '${kw}' at offset ${idx}:`);
      console.log(code.slice(Math.max(0, idx - 100), Math.min(code.length, idx + 400)));
      console.log("------------------------");
    } else {
      console.log(`KW: '${kw}' not found.`);
    }
  });

  // Let's also look for how colors or classes are mapped to z ("emerald", "amber", "blue") or V ("minimal", "playful")
  // We saw z==="emerald" or V==="minimal"
}

run();
