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

  for (var i = 0; i < letter.length; i++) {
    if (word[i] == letter) indices.push(i);
  }

  return indices;
}

function removePartialsOfCorrect(
  correctIndex: number,
  occurrences: number[],
  resultObject: GameSquareType[]
) {
  const squaresToProcess = occurrences.filter(
    (v, index) => index != correctIndex
  );

  let result = resultObject;

  for (let i = 0; i < squaresToProcess.length; i++) {
    result[i] = GameSquareType.Filled;
  }

  return result;
}

export function validateText(word: string, input: string[]) {
  let validationResult: GameSquareType[] = [
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
  ];

  console.log(word);

  let partialLettersValidation = createPartialLettersValidationList(word);

  for (let i = 0; i < 5; i++) {
    const occurrences = findLetterOccurences(word, input[i]);

    // Validate correct
    if (word[i] == input[i]) {
      validationResult[i] = GameSquareType.Correct;
      validationResult = removePartialsOfCorrect(
        i,
        occurrences,
        validationResult
      );
    }

    // Validate partials
    if (
      word[i] != input[i] &&
      word.includes(input[i]) &&
      validationResult[i] != GameSquareType.Correct
    ) {
      partialLettersValidation[input[i]] = true;
    }

    if (
      partialLettersValidation[input[i]] == true &&
      validationResult[i] != GameSquareType.Correct
    ) {
      validationResult[occurrences[0]] = GameSquareType.Partial;
    }
    // ==============

    // Validate invalid
    if (!word.includes(input[i])) {
      validationResult[i] = GameSquareType.Filled;
    }

    if (validationResult[i] == GameSquareType.Clear) {
      validationResult[i] = GameSquareType.Filled;
    }
  }

  return validationResult;

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
}
