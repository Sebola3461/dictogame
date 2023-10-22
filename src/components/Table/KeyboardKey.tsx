import { useContext } from "react";
import { GameContext, GameSquareType } from "../../providers/GameContext";
import { RowsContext } from "../../providers/RowsContext";
import {
  playBackspaceSound,
  playKeyDownSound,
} from "../../helpers/soundEffects";

export function KeyboardKey({
  isEnter,
  isBackspace,
  character,
}: {
  character: string;
  isEnter: boolean;
  isBackspace: boolean;
}) {
  const table = useContext(RowsContext);
  const game = useContext(GameContext);

  function handleText() {
    if (
      table.selectedRow == -1 ||
      table.selectedSquare == -1 ||
      !table.rows[table.selectedRow] ||
      table.rows[table.selectedRow].squares.filter(
        (s) => s.state == GameSquareType.Clear
      ).length != 5
    )
      return;

    table.changeSquareCharacter(character);
    table.focusNextSquare();
    playKeyDownSound();
  }

  function handleBackspace() {
    if (
      table.selectedRow == -1 ||
      table.selectedSquare == -1 ||
      !table.rows[table.selectedRow] ||
      table.rows[table.selectedRow].squares.filter(
        (s) => s.state == GameSquareType.Clear
      ).length != 5
    )
      return;

    table.changeSquareCharacter("");
    table.focusPreviousSquare();
    playBackspaceSound();
  }

  function handleEnter() {
    if (
      table.selectedRow == -1 ||
      table.selectedSquare == -1 ||
      !table.rows[table.selectedRow] ||
      table.rows[table.selectedRow].squares.filter(
        (s) => s.state == GameSquareType.Clear
      ).length != 5
    )
      return;

    table.validateRow(table.selectedRow);
  }

  /**
    Neutral = 0,
  Has = 1,
  NotIncluded = 2,
  Partial = 3,
   */

  function getStatus() {
    const list = ["", "has", "notincluded", "partial"];

    const k = game.keyboard.find((k) => k.key == character);

    if (!k) return "";

    return list[k.status];
  }

  if (isEnter)
    return (
      <div className="keyboard_key enter" onClick={handleEnter}>
        {character}
      </div>
    );

  if (isBackspace)
    return (
      <div className="keyboard_key backspace" onClick={handleBackspace}>
        {character}
      </div>
    );

  return (
    <div className={`keyboard_key ${getStatus()}`} onClick={handleText}>
      {character}
    </div>
  );
}
