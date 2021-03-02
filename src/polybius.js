// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // helper function to create the code table, matching the alphabet to number pairs
  function createTable() {
    // alphabet without j
    const alphabet = "abcdefghiklmnopqrstuvwxyz";
    const alphabetArr = alphabet.split("");
    const table = [];

    // using 1 loop for every 5 letters to create an object with a letter and a code key and push it into the table array
    for (let i = 0; i < 5; i++) {
      const code = (i + 1).toString() + 1;
      table.push({ letter: alphabetArr[i], code: code });
    }
    for (let i = 5; i < 10; i++) {
      const code = (i - 4).toString() + 2;
      // push (i/j)
      if (code === "42") {
        table.push({ letter: "(i/j)", code: code });
      } else {
        table.push({ letter: alphabetArr[i], code: code });
      }
    }
    for (let i = 10; i < 15; i++) {
      const code = (i - 9).toString() + 3;
      table.push({ letter: alphabetArr[i], code: code });
    }
    for (let i = 15; i < 20; i++) {
      const code = (i - 14).toString() + 4;
      table.push({ letter: alphabetArr[i], code: code });
    }
    for (let i = 20; i < 25; i++) {
      const code = (i - 19).toString() + 5;
      table.push({ letter: alphabetArr[i], code: code });
    }

    return table;
  }

  // helper function to find the spaces
  function splitInput(inputArr) {
    let spaces = [];
    // find the positions of the spaces in the inputArray
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === " ") {
        spaces.push(i);
      }
    }
    return spaces;
  }

  function polybius(input, encode = true) {
    const table = createTable();
    const inputArr = input.toLowerCase().split("");

    let result = [];

    if (encode) {
      inputArr.forEach((letter) => {
        // change i and j to (i/j)
        if (letter === "i" || letter === "j") letter = "(i/j)";
        const matching = table.find((match) => match.letter === letter);
        // if there is no match it means it's a space or another non-alphabetic symbol
        if (!matching) {
          result.push(letter);
        } else {
          result.push(matching.code);
        }
      });
    } else {
      const spaces = splitInput(inputArr);
      const half = (inputArr.length - spaces.length) / 2;

      // determine if the given numberstring is even
      if (!Number.isInteger(half)) {
        return false;
      } else {
        // remove the spaces
        spaces.forEach((space) => inputArr.splice(space, 1));
        for (let i = 0; i < inputArr.length - 1; i += 2) {
          const numberPair = inputArr[i] + inputArr[i + 1];
          const matching = table.find((match) => match.code === numberPair);
          result.push(matching.letter);
        }
        // add the spaces back
        spaces.forEach((space) => result.splice(space / 2, 0, " "));
      }
    }

    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
