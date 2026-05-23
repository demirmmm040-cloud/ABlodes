import fs from 'fs';

async function run() {
  try {
    console.log("Fetching index HTML...");
    const resHtml = await fetch("https://blodes-806777843349.us-east1.run.app/");
    const htmlText = await resHtml.text();
    console.log("HTML length:", htmlText.length);
    fs.writeFileSync("fetched_index.html", htmlText);

    // Extract asset JS path from HTML
    const jsRegex = /\/assets\/index-[a-zA-Z0-9_-]+\.js/;
    const jsMatch = htmlText.match(jsRegex);
    const jsPath = jsMatch ? jsMatch[0] : "/assets/index-JEgsTDxL.js";
    console.log("Detected JS Path:", jsPath);

    // Extract asset CSS path from HTML
    const cssRegex = /\/assets\/index-[a-zA-Z0-9_-]+\.css/;
    const cssMatch = htmlText.match(cssRegex);
    const cssPath = cssMatch ? cssMatch[0] : "/assets/index-DMRQlqld.css";
    console.log("Detected CSS Path:", cssPath);

    console.log("Fetching JS bundle...");
    const jsUrl = `https://blodes-806777843349.us-east1.run.app${jsPath}`;
    const resJs = await fetch(jsUrl);
    const jsText = await resJs.text();
    console.log("JS layout loaded, length:", jsText.length);

    console.log("Fetching CSS bundle...");
    const cssUrl = `https://blodes-806777843349.us-east1.run.app${cssPath}`;
    const resCss = await fetch(cssUrl);
    const cssText = await resCss.text();
    console.log("CSS loaded, length:", cssText.length);
    fs.writeFileSync("fetched_style.css", cssText);

    // Let's inspect the compiled JS for strings. We can extract large chunks containing Turkish characters or interesting words.
    // Let's save a file with string-like content or search for key variables.
    // Also we can write the first 50000 chars of JS or sections that contain text.
    fs.writeFileSync("fetched_js_raw.js", jsText);
    
    // Let's write a parser to extract all human phrases from the JS file
    // Human phrases typically contain letters and spaces, punctuation.
    // Let's search for some strings using regex.
    const strings: string[] = [];
    // Match double or single quoted strings
    const stringRegex = /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g;
    let match;
    while ((match = stringRegex.exec(jsText)) !== null) {
      const str = match[0];
      if (str.length > 5 && (str.includes(" ") || /[\u00C0-\u017F]/.test(str))) {
        strings.push(str);
      }
    }
    console.log(`Found ${strings.length} long/localized strings.`);
    fs.writeFileSync("fetched_strings.json", JSON.stringify(strings, null, 2));
    
  } catch (error) {
    console.error("Error in fetch:", error);
  }
}

run();
