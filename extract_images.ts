import fs from 'fs';

function run() {
  const js = fs.readFileSync('fetched_js_raw.js', 'utf8');

  // Let's find all mentions of ".png", ".jpg", ".svg", ".gif" in the JS bundle
  const regex = /\/assets\/[a-zA-Z0-9_\-\.]+\.(png|jpg|jpeg|svg|gif)/g;
  const matches = [];
  let m;
  while ((m = regex.exec(js)) !== null) {
    if (!matches.includes(m[0])) {
      matches.push(m[0]);
    }
  }
  console.log("Found assets in JS bundle:", matches);

  // Let's check our CSS bundle too!
  const css = fs.readFileSync('fetched_style.css', 'utf8');
  const cssMatches = [];
  let cm;
  while ((cm = regex.exec(css)) !== null) {
    if (!cssMatches.includes(cm[0])) {
      cssMatches.push(cm[0]);
    }
  }
  console.log("Found assets in CSS bundle:", cssMatches);
}

run();
