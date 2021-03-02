// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // helper function to check for double characters in the substitutionArr
  function checkForDouble(substitutionArr) {
    let isDouble = false;

    substitutionArr.forEach((letter) => {
      const double = substitutionArr.filter((match) => letter === match);
      if (double.length > 1) {
        isDouble = true;
      }
    });
    return isDouble;
  }

  // helper function to encode and decode
  function coding(fromArr, toArr, inputArr) {
    let result = [];

    // finding the index of the inputted letter in the fromArr and pushing the same index of the toArr into result
    inputArr.forEach((character) => {
      let index;
      fromArr.find((letter) => {
        letter = character;
        index = fromArr.indexOf(letter);
      });
      if (index === -1) {
        result.push(character);
      } else {
        result.push(toArr[index]);
      }
    });

    return result.join("");
  }

  function substitution(input, alphabet, encode = true) {
    // return false for a non viable alphabet
    if (!alphabet || alphabet.length != 26) return false;

    const substitutionArr = alphabet.split("");
    if (checkForDouble(substitutionArr)) return false;

    const originAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = originAlphabet.split("");
    const inputArr = input.toLowerCase().split("");

    // encoding or decoding is just a matter of switching the from-to arrays
    if (encode) {
      return coding(alphabetArr, substitutionArr, inputArr);
    } else {
      return coding(substitutionArr, alphabetArr, inputArr);
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
