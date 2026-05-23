import fs from 'fs';

function run() {
  const f = fs.readFileSync('ffe_component_complete.txt', 'utf8');
  console.log("Size of complete ffe JS:", f.length);

  // Let's search for "o(" or other single letter functions or click handlers that call the callback function
  // We can write a regex that matches click actions, e.g. "onClick:()=>" or button styles
  const regex = /onClick:\s*\(\)\s*=>\s*[a-zA-Z0-9_$]+\([^)]*\)/g;
  let match;
  while ((match = regex.exec(f)) !== null) {
    console.log("Found onClick handler:", match[0], "at index", match.index);
    console.log(f.slice(match.index - 50, match.index + 200));
    console.log("------------------------");
  }

  // Let's search for any occurrence of "onUnlockMockup" or destructured callback "o" being called
  // Like "o(c.id, f)"
  const oRegex = /[\s,;{(]o\([^)]*\)/g;
  let oMatch;
  while ((oMatch = oRegex.exec(f)) !== null) {
    console.log("Found call to callback 'o':", oMatch[0], "at index", oMatch.index);
    console.log(f.slice(oMatch.index - 100, oMatch.index + 200));
    console.log("------------------------");
  }
}

run();
