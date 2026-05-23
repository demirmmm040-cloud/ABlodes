import fs from 'fs';

function run() {
  const code = fs.readFileSync('wireframe_sidebar_code.txt', 'utf8');

  // Let's find "onClick:Me" or onClick:()=>Me or similar, and print the surrounding 600 characters
  const pattern = /onClick:\s*Me/g;
  let match = pattern.exec(code);
  if (match) {
    console.log("Found onClick:Me at offset:", match.index);
    console.log(code.slice(match.index - 50, match.index + 500));
  } else {
    // Let's do a case-insensitive or broad search for button triggers at the end
    const lastBtnIdx = code.indexOf('bg-emerald-500 hover:bg-emerald-450');
    const lastBtnIdx2 = code.indexOf('bg-emerald-500 hover:bg-emerald-430');
    const lastBtnIdx3 = code.indexOf('bg-emerald-500 hover:bg-emerald4');
    const lastBtnIdx4 = code.indexOf('bg-emerald-500 hover:bg-emerald');
    if (lastBtnIdx4 !== -1) {
      console.log("Found bg-emerald-500 button at:", lastBtnIdx4);
      console.log(code.slice(lastBtnIdx4 - 200, lastBtnIdx4 + 800));
    }
  }

  // Let's also look for how "Me" is defined in ffe_component_complete.txt!
  const completeFfe = fs.readFileSync('ffe_component_complete.txt', 'utf8');
  const mePattern = /const\s+Me\s*=\s*/g;
  let meMatch = mePattern.exec(completeFfe);
  if (meMatch) {
    console.log("\nFound 'const Me =' definition:");
    console.log(completeFfe.slice(meMatch.index - 100, meMatch.index + 500));
  } else {
    // Let's search for "Me" as a function in completeFfe
    const mePattern2 = /function\s+Me\s*\(/g;
    let meMatch2 = mePattern2.exec(completeFfe);
    if (meMatch2) {
      console.log("\nFound 'function Me(' definition:");
      console.log(completeFfe.slice(meMatch2.index - 100, meMatch2.index + 500));
    } else {
      // Find where "Me" is assigned or defined
      console.log("\nSearching for any 'Me =' or 'Me=' in completeFfe:");
      const anyMe = /[\s,;{]Me\s*=\s*/g;
      let am;
      while ((am = anyMe.exec(completeFfe)) !== null) {
        console.log(`Decl at ${am.index}:`);
        console.log(completeFfe.slice(am.index - 100, am.index + 300));
      }
    }
  }
}

run();
