import { useEffect, useState } from "react";
import "./../../styles/components/UI/Tutorial.scss";

export function Tutorial() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage["tutorial"]) setVisible(true);
  }, []);

  function handleClose(ev: any) {
    if (!ev.target.className.includes("tutorial")) return;

    setVisible(false);

    localStorage["tutorial"] = true;
  }

  return (
    <>
      <div
        className={!visible ? "float_tutorial visible" : "float_tutorial"}
        onClick={() => {
          setVisible(true);
        }}
      >
        ?
      </div>
      <div
        className={visible ? "tutorial visible" : "tutorial"}
        onClick={handleClose}
      >
        <div className="overlay">
          <div className="title">Como jogar</div>
          <div className="container">
            <div className="squares">
              <div className="static_square filled">d</div>
              <div className="static_square filled">i</div>
              <div className="static_square filled">c</div>
              <div className="static_square filled">t</div>
              <div className="static_square filled">o</div>
            </div>
            Quadrados marrons significam que a palavra não contém a seguinte
            letra
          </div>
          <div className="container">
            <div className="squares">
              <div className="static_square filled">d</div>
              <div className="static_square filled">i</div>
              <div className="static_square correct">c</div>
              <div className="static_square filled">t</div>
              <div className="static_square correct">o</div>
            </div>
            Quadrados verdes significam que a palavra contém a seguinte letra
            naquela posição
          </div>
          <div className="container">
            <div className="squares">
              <div className="static_square filled">d</div>
              <div className="static_square filled">i</div>
              <div className="static_square correct">c</div>
              <div className="static_square partial">t</div>
              <div className="static_square correct">o</div>
            </div>
            Quadrados amarelos significam que a palavra contém a seguinte letra
            mas em outra posição
          </div>
        </div>
      </div>
    </>
  );
}
