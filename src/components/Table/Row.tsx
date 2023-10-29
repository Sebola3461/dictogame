import { Ref, useContext, useEffect, useRef, useState } from "react";
import { GenerateComponentKey } from "../../helpers/GenerateComponentKey";
import { validateText } from "../../helpers/validateText";
import { GameContext, GameSquareType } from "../../providers/GameContext";
import { RowsContext } from "../../providers/RowsContext";
import "./../../styles/components/Table/Row.scss";
import { Square } from "./Square";

export interface IGameSquareCompact {
  text: string | null;
  ref: React.RefObject<HTMLElement> | null;
  id: string;
  state: GameSquareType;
}

export function Row({ index, isStatic }: { index: number; isStatic: boolean }) {
  const game = useContext(GameContext);
  const table = useContext(RowsContext);

  const getSquares = () => {
    const row = table.rows[index];

    if (!row) return <></>;

    if (!row.squares) return <></>;

    return row.squares.map((s, i) => (
      <Square
        index={i}
        row={index}
        id={s.id}
        key={s.id}
        validate={console.log}
        isStatic={isStatic}
      />
    ));
  };

  return (
    <div
      className={
        table.rows.filter((r) => r.unlocked).length >= index
          ? `table_row${isStatic ? " static" : " non_static"}`
          : `table_row locked${isStatic ? " static" : ""}`
      }
    >
      {getSquares()}
    </div>
  );
}
