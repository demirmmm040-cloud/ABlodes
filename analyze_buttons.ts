import fs from 'fs';

function run() {
  const js = fs.readFileSync('ffe_component_raw.txt', 'utf8');
  console.log("Size of ffe raw JS:", js.length);

  // Let's count occurrences of "onClick"
  let count = 0;
  let pos = 0;
  while ((pos = js.indexOf('onClick', pos)) !== -1) {
    count++;
    console.log(`onClick #${count} at ${pos}:`);
    console.log(js.slice(pos - 150, pos + 250));
    console.log("----------------------------");
    pos += 7;
  }

  // Let's count occurrences of "button"
  let btnCount = 0;
  let bpos = 0;
  while ((bpos = js.indexOf('button', bpos)) !== -1) {
    btnCount++;
    console.log(`button #${btnCount} at ${bpos}:`);
    console.log(js.slice(bpos - 50, bpos + 150));
    console.log("----------------------------");
    bpos += 6;
  }
}

run();
