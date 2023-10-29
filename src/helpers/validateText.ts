import { Square } from "../components/Table/Square";
import { GameSquareType } from "../providers/GameContext";

function createPartialLettersValidationList(word: string) {
  let validatedCharacters = {};

  for (const letter of word) {
    validatedCharacters[letter] = false;
  }

  return validatedCharacters as { [key: string]: boolean };
}

function findLetterOccurences(word: string, letter: string) {
  const indices = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) indices.push(i);
  }

  return indices;
}

function getIndexesOfCharacter(character: string, solution: ISolutionResult[]) {
  const indexes = [] as number[];

  for (let i = 0; i < solution.length; i++) {
    if (solution[i].character == character) indexes.push(i);
  }

  return indexes;
}

export interface ISolutionResult {
  status: GameSquareType;
  character: string | null;
}

export function validateText(solutionWord: string, input: string[]) {
  let validationResult: ISolutionResult[] = [
    { status: GameSquareType.Clear, character: null },
    { status: GameSquareType.Clear, character: null },
    { status: GameSquareType.Clear, character: null },
    { status: GameSquareType.Clear, character: null },
    { status: GameSquareType.Clear, character: null },
  ];

  console.log(solutionWord);

  let partialLettersValidation =
    createPartialLettersValidationList(solutionWord);

  for (let i = 0; i < input.length; i++) {
    validationResult[i].character = input[i];
  }

  for (let i = 0; i < 5; i++) {
    if (validationResult[i].character == solutionWord[i]) {
      validationResult[i].status = GameSquareType.Correct;
    }

    if (
      validationResult[i].character != solutionWord[i] &&
      solutionWord.includes(validationResult[i].character) &&
      validationResult.filter(
        (solution) =>
          solution.character == validationResult[i].character &&
          solution.status == GameSquareType.Correct
      ).length == 0
    ) {
      validationResult[i].status = GameSquareType.Partial;
    }

    if (!solutionWord.includes(validationResult[i].character)) {
      validationResult[i].status = GameSquareType.Filled;
    }
  }

  for (let i = 0; i < validationResult.length; i++) {
    // const characterOccurences = getIndexesOfCharacter(
    //   validationResult[i].character,
    //   validationResult
    // );

    const validationOfThisLetter = validationResult.filter(
      (v) => v.character == validationResult[i].character
    );

    if (
      validationOfThisLetter.filter(
        (v) =>
          v.status == GameSquareType.Correct &&
          v.character == validationResult[i].character
      ).length > 0 &&
      validationOfThisLetter.filter(
        (v) =>
          v.status == GameSquareType.Correct &&
          v.character == validationResult[i].character
      ).length > 0
    ) {
      validationResult = validationResult.map((result) => {
        if (
          result.character == validationResult[i].character &&
          result.status == GameSquareType.Partial
        )
          return {
            status: GameSquareType.Filled,
            character: result.character,
          };

        return result;
      });
    }
  }

  // // Validate correct
  // if (word[i] == input[i]) {
  //   validationResult[i] = GameSquareType.Correct;
  //   const occurrencesOfCorrect = findLetterOccurences(word, input[i]);
  //   validationResult = removePartialsOfCorrect(
  //     i,
  //     occurrencesOfCorrect,
  //     validationResult
  //   );
  // }
  // // Validate partials
  // const occurrences = findLetterOccurences(input.join(), input[i]).filter(
  //   (i) => {
  //     if (validationResult[i] != GameSquareType.Correct) return i;
  //   }
  // );
  // if (
  //   word[i] != input[i] &&
  //   word.includes(input[i]) &&
  //   validationResult[i] != GameSquareType.Correct
  // ) {
  //   partialLettersValidation[input[i]] = true;
  // }
  // console.log(occurrences);
  // if (
  //   partialLettersValidation[input[i]] == true &&
  //   occurrences[0] != -1 &&
  //   occurrences[0] &&
  //   word[occurrences[0]] != input[i]
  // ) {
  //   validationResult[occurrences[0]] = GameSquareType.Partial;
  // }
  // // ==============
  // // Validate invalid
  // if (!word.includes(input[i])) {
  //   validationResult[i] = GameSquareType.Filled;
  // }
  // if (validationResult[i] == GameSquareType.Clear) {
  //   validationResult[i] = GameSquareType.Filled;
  // }

  return validationResult.map((v) => v.status);
}

//   input.forEach((w, i) => {
//     w = w.trim();

//     if (word[i] == w) results[i] = GameSquareType.Correct;
//   });

//   const partialLetters: any = {};

//   word.split("").forEach((w, i) => {
//     w = w.trim();

//     if (partialLetters[w]) {
//       return (partialLetters[w] = {
//         s: partialLetters[w].s + 1,
//         p: partialLetters[w].p,
//       });
//     } else {
//       return (partialLetters[w] = {
//         s: 0,
//         p: 0,
//       });
//     }
//   });

//   const inputString = input.join();

//   input.forEach((letter, i) => {
//     letter = letter.trim();

//     let wordSize = getLetterCount(word)[letter] || 0;
//     let inputSize = getLetterCount(inputString)[letter] || 0;
//     const correctLength =
//       results.filter((r) => r == GameSquareType.Correct).length || 0;
//     let partialLettersValidation = word.split("").map((_letter) => {
//       return {
//         letter: _letter,
//         validated: false,
//       };
//     }) as { letter: string; validated: boolean }[];

//     console.log(
//       `Word: ${word} | Input Character: ${letter} | Has: ${wordSize} | Found: ${inputSize} | Correct: ${correctLength} | PartialSize: ${
//         inputSize - correctLength
//       }`
//     );

//     if (results[i] == GameSquareType.Correct) return;

//     if (
//       word[i] != letter &&
//       word.includes(letter) &&
//       partialLetters[letter].p <= partialLetters[letter].s &&
//       results[i] != GameSquareType.Correct &&
//       !partialLettersValidation.find((l) => l.letter == letter).validated
//     ) {
//       results[i] = GameSquareType.Partial;
//       partialLetters[letter].p = wordSize;
//       const partialLetterIndex = partialLettersValidation.findIndex(
//         (l) => l.letter == letter
//       );

//       partialLettersValidation[partialLetterIndex].validated = true;
//     }
//   });

//   input.forEach((w, i) => {
//     if (results[i] == GameSquareType.Clear) results[i] = GameSquareType.Filled;
//   });

//   return results;
// }

function getLetterCount(word: string) {
  let result = {};
  for (let str of word) {
    result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
  }

  return result;
}

// function getCorrectIndexes(results: GameSquareType[]) {
//   const r: number[] = [];

//   results.forEach((s, i) => {
//     if (s == GameSquareType.Correct) r.push(i);
//   });

//   return r;
// }

// function getLetterIndex(string: string, character: string, cantbe: number[]) {
//   let r = -1;

//   string.split("").forEach((s, i) => {
//     if (s == character && !cantbe.includes(i) && r == -1) r = i;
//   });

//   return r;
// }

// function getValidatedIndexes(results: GameSquareType[]) {
//   let r: number[] = [];

//   results.forEach((s, i) => {
//     if (results[i] == GameSquareType.Correct) r.push(i);
//   });

//   return r;
