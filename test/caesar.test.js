// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift is equal to 0, less than -25 or higher than 25", () => {
    expect(caesar("thinkful")).to.equal(false);
    expect(caesar("thinkful", 99)).to.equal(false);
    expect(caesar("thinkful", -26)).to.equal(false);
  });

  it("should maintain spaces and other non-alphabetic symbols", () => {
    expect(caesar("This is a secret message!", 8)).to.equal(
      "bpqa qa i amkzmb umaaiom!"
    );
  });

  it("should ignore capital letters", () => {
    expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal(
      "this is a secret message!"
    );
  });

  it("should wrap arount the alphabet if a letter would otherwise go off it", () => {
    expect(caesar("zoo", 3)).to.equal("crr");
    expect(caesar("crr", -3)).to.equal("zoo");
  });
});
