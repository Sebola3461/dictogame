import { Component, useContext, useEffect } from "react";
import { getWordPT } from "../../data/words";
import { GenerateComponentKey } from "../../helpers/GenerateComponentKey";
import { GameContext } from "../../providers/GameContext";
import { RowsContext } from "../../providers/RowsContext";
import { Row } from "../Table/Row";
import { Tutorial } from "../UI/Tutorial";
import "./../../styles/components/Game/Table.scss";
import { playButtonClickSound } from "../../helpers/soundEffects";

export function Table() {
  const game = useContext(GameContext);
  const { resetGame } = useContext(RowsContext);

  function getRows(isStatic: boolean) {
    let r: JSX.Element[] = [];

    for (let i = 0; i < 6; i++) {
      r.push(<Row index={i} isStatic={isStatic} />);
    }

    return r;
  }

  return (
    <div className="game_table">
      <Tutorial />
      <div className={`failed ${game.ended && game.failed ? "visible" : ""}`}>
        {!game.ended ? null : (
          <>
            <p>
              Não foi desta vez... A palavra correta é{" "}
              <span>{getWordPT(game.word)}</span>
            </p>
            <div className="result_table">{getRows(true).map((e) => e)}</div>
            <button
              onClick={() => {
                resetGame();
                playButtonClickSound();
              }}
            >
              Me dê outra chance
            </button>
          </>
        )}
      </div>
      <div className={`win ${game.ended && !game.failed ? "visible" : ""}`}>
        <p>Parabéns, você acertou a palavra!</p>
        <div className="result_table">{getRows(true).map((e) => e)}</div>
        <button
          onClick={() => {
            resetGame();
            playButtonClickSound();
          }}
        >
          Me surpreenda de novo
        </button>
      </div>
      {getRows(false).map((e) => e)}
    </div>
  );
}
