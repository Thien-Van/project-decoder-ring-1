// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // helper function that handles the encoding and decoding
  function coded(inputArr, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabet.split("");

    let result = [];

    inputArr.forEach((letter) => {
      const letterIndex = alphabetArr.indexOf(letter);
      const codeIndex = letterIndex + shift;
      // index of -1 means that it is not in the array which means it is a space
      if (letterIndex === -1) {
        result.push(letter);
      } else {
        // if the index would put it over 25 or under 0 it wraps around the other end of the array
        if (codeIndex >= 0 && codeIndex <= 25) {
          result.push(alphabetArr[codeIndex]);
        } else if (codeIndex < 0) {
          result.push(alphabetArr[26 + codeIndex]);
        } else if (codeIndex > 25) {
          result.push(alphabetArr[codeIndex - 26]);
        }
      }
    });

    return result.join("");
  }

  function caesar(input, shift, encode = true) {
    // returns false if there is no shift or the shift would be more than 25 letters
    if (!shift || shift < -25 || shift > 25) return false;

    input = input.toLowerCase();
    const inputArr = input.split("");

    if (encode) {
      // calling the helper function
      return coded(inputArr, shift);
    } else {
      // calling the helper function but reversing the shift and thus decode
      return coded(inputArr, -shift);
    }
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
