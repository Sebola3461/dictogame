import { GameSquareType } from "../providers/GameContext";

export function validateText(word: string, input: string[]) {
  const results: GameSquareType[] = [
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
    GameSquareType.Clear,
  ];

  input.forEach((w, i) => {
    w = w.trim();

    if (word[i] == w) results[i] = GameSquareType.Correct;
  });

  const partialLetters: any = {};

  word.split("").forEach((w, i) => {
    w = w.trim();

    if (partialLetters[w]) {
      return (partialLetters[w] = {
        s: partialLetters[w].s + 1,
        p: partialLetters[w].p,
      });
    } else {
      return (partialLetters[w] = {
        s: 0,
        p: 0,
      });
    }
  });

  const inputString = input.join();

  input.forEach((letter, i) => {
    letter = letter.trim();

    let wordSize = getLetterCount(word)[letter] || 0;
    let inputSize = getLetterCount(inputString)[letter] || 0;
    const correctLength =
      results.filter((r) => r == GameSquareType.Correct).length || 0;
    let partialLettersValidation = word.split("").map((_letter) => {
      return {
        letter: _letter,
        validated: false,
      };
    }) as { letter: string; validated: boolean }[];

    console.log(
      `Word: ${word} | Input Character: ${letter} | Has: ${wordSize} | Found: ${inputSize} | Correct: ${correctLength} | PartialSize: ${
        inputSize - correctLength
      }`
    );

    if (results[i] == GameSquareType.Correct) return;

    if (
      word[i] != letter &&
      word.includes(letter) &&
      partialLetters[letter].p <= partialLetters[letter].s &&
      results[i] != GameSquareType.Correct &&
      !partialLettersValidation.find((l) => l.letter == letter).validated
    ) {
      results[i] = GameSquareType.Partial;
      partialLetters[letter].p = wordSize;
      const partialLetterIndex = partialLettersValidation.findIndex(
        (l) => l.letter == letter
      );
      partialLettersValidation[partialLetterIndex].validated = true;
    }
  });

  input.forEach((w, i) => {
    if (results[i] == GameSquareType.Clear) results[i] = GameSquareType.Filled;
  });

  return results;
}

function getLetterCount(word: string) {
  let result = {};
  for (let str of word) {
    result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
  }

  return result;
}

function getCorrectIndexes(results: GameSquareType[]) {
  const r: number[] = [];

  results.forEach((s, i) => {
    if (s == GameSquareType.Correct) r.push(i);
  });

  return r;
}

function getLetterIndex(string: string, character: string, cantbe: number[]) {
  let r = -1;

  string.split("").forEach((s, i) => {
    if (s == character && !cantbe.includes(i) && r == -1) r = i;
  });

  return r;
}

function getValidatedIndexes(results: GameSquareType[]) {
  let r: number[] = [];

  results.forEach((s, i) => {
    if (results[i] == GameSquareType.Correct) r.push(i);
  });

  return r;
}
