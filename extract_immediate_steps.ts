import fs from 'fs';

function run() {
  const code = fs.readFileSync('ffe_prettified_complete.txt', 'utf8');
  const pos = code.indexOf("Check your spam folder");
  if (pos !== -1) {
    console.log("Success step list offset found:", pos);
    console.log(code.slice(pos - 100, pos + 1000));
  }
}

run();
