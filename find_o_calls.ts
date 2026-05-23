import fs from 'fs';

function run() {
  const f = fs.readFileSync('ffe_component_raw.txt', 'utf8');
  // Let's search for "o(" or other single letter functions or click handlers that call the callback function
  // We can write a regex that matches click actions, e.g. "onClick:()=>" or button styles
  const regex = /onClick:\s*\(\)\s*=>\s*o\([^)]*\)/g;
  let match;
  while ((match = regex.exec(f)) !== null) {
    console.log("Found callback click handler:", match[0], "at index", match.index);
    console.log(f.slice(match.index - 100, match.index + 300));
    console.log("------------------------");
  }

  // Let's also look at all button elements inside the latter part of ffe_component_raw
  const btnIn = f.lastIndexOf('button');
  if (btnIn !== -1) {
    console.log("Last button element index:", btnIn);
    console.log(f.slice(btnIn - 400, btnIn + 400));
  }
}

run();
