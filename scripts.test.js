const translate = require("./scripts"); 

// test for vowels
test("after translates afterway", () => {
    expect(translate("after")).toBe("afterway"); 
})

test("ocean translates to oceanway", () => {
    expect(translate("ocean")).toBe("oceanway");
})

test("orange translates to orangeway", () => {
    expect(translate("orange")).toBe("orangeway");
})

test("english translates to englishway", () => {
    expect(translate("english")).toBe("englishway");
})

test("eunomia translates to eunomiaway", () => {
    expect(translate("eunomia")).toBe("eunomiaway");
})

// test for consonants 
test("banana translates to ananabay", () => {
    expect(translate("banana")).toBe("ananabay");
})

test("bat translates to atbay", () => {
    expect(translate("bat")).toBe("atbay"); 
})

test("psychology translates to ologypsychay", () => {
    expect(translate("psychology")).toBe("ologypsychay"); 
})

test("child translates to ildchay", () => {
    expect(translate("child")).toBe("ildchay"); 
})

