// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("should include an input with characters such as #,$,*", () => {
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal(
      "y&ii$r&"
    );
    expect(
      substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    ).to.equal("thinkful");
  });
  it("should maintain spaces", () => {
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal("elp xhm xf mbymwwmfj dne");
  });
  it("should return false if the alphabet is not a string with 26 characters", () => {
    expect(substitution("thinkful", "short")).to.equal(false);
  });
  it("should return false if the characters in the alphabet parameters are not unique", () => {
    expect(substitution("abcabcabcabcabcabcabcabcyz")).to.equal(false);
  });
});
