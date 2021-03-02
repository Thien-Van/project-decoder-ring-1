// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("should return a string", () => {
    expect(polybius("thinkful")).to.equal("4432423352125413");
  });
  it("should return false if the number of characters excluding spaces is not even", () => {
    expect(polybius("44324233521254134", false)).to.equal(false);
  });
  it("should maintain spaces", () => {
    expect(polybius("Hello world")).to.equal("3251131343 2543241341");
  });
  it("should show the letters i/j when decoding even though they share the same space while encoding", () => {
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
  });
});
