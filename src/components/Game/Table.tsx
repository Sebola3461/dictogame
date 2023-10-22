import { Component, useContext, useEffect } from "react";
import { getWordPT } from "../../data/words";
import { GenerateComponentKey } from "../../helpers/GenerateComponentKey";
import { GameContext } from "../../providers/GameContext";
import { RowsContext } from "../../providers/RowsContext";
import { Row } from "../Table/Row";
import { Tutorial } from "../UI/Tutorial";
import "./../../styles/components/Game/Table.scss";

export function Table() {
  const game = useContext(GameContext);
  const { resetGame } = useContext(RowsContext);

  function getRows() {
    let r: JSX.Element[] = [];

    for (let i = 0; i < 6; i++) {
      r.push(<Row index={i} />);
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
            <button
              onClick={() => {
                resetGame();
              }}
            >
              Me dê outra chance
            </button>
          </>
        )}
      </div>
      <div className={`win ${game.ended && !game.failed ? "visible" : ""}`}>
        <p>
          Parabéns, você acertou a palavra! A palavra era
          <span className="correct_word">
            {game.ended && !game.failed ? `${game.word}` : "Seu curioso"}
          </span>
        </p>
        <button
          onClick={() => {
            resetGame();
          }}
        >
          Me surpreenda de novo
        </button>
      </div>
      {getRows().map((e) => e)}
    </div>
  );
}
