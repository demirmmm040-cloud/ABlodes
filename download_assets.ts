async function test() {
  const paths = [
    "/src/assets/images/agency_hero_1779467342329.png",
    "/assets/images/agency_hero_1779467342329.png",
    "/images/agency_hero_1779467342329.png",
    "/agency_hero_1779467342329.png",
    "/assets/agency_hero_1779467342329.png",
    "/src/assets/images/business_mockups_1779467360570.png",
    "/assets/images/business_mockups_1779467360570.png",
    "/images/business_mockups_1779467360570.png",
    "/business_mockups_1779467360570.png",
    "/assets/business_mockups_1779467360570.png"
  ];

  for (const p of paths) {
    const url = `https://blodes-806777843349.us-east1.run.app${p}`;
    const res = await fetch(url, { method: "HEAD" });
    console.log(`Path: ${p} | Status: ${res.status}`);
  }
}

test();
