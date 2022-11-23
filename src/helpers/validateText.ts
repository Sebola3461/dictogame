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

  input.forEach((w, i) => {
    w = w.trim();

    let letterSize = getLetterCount(word, w);
    console.log(partialLetters);

    if (results[i] == GameSquareType.Correct) return;

    if (
      word[i] != w &&
      word.includes(w) &&
      partialLetters[w].p < partialLetters[w].s
    ) {
      results[i] = GameSquareType.Partial;
      partialLetters[w].p = partialLetters[w].p + 1;
    }
  });

  input.forEach((w, i) => {
    if (results[i] == GameSquareType.Clear) results[i] = GameSquareType.Filled;
  });

  return results;
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

function getLetterCount(string: string, character: string) {
  let r: number[] = [];

  string.split("").forEach((s, i) => {
    if (s == character) r.push(i);
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
