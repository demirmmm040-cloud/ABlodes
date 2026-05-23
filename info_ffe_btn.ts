import fs from 'fs';

function run() {
  const f = fs.readFileSync('ffe_component_raw.txt', 'utf8');
  let index = 0;
  while ((index = f.indexOf('onUnlockMockup', index)) !== -1) {
    console.log("onUnlockMockup found at position:", index);
    console.log(f.slice(index - 50, index + 350));
    console.log("--------------------------------------");
    index += 14;
  }
}

run();
