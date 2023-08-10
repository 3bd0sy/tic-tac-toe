import React, { useState, useEffect } from "react";
import './App.css';
function App() {
  let PlayerCode = ["X", "O"];
  let PlayerColor = ["#ff0000", "#00ff00"];
  const [PlayerName, setPlayerName] = useState("X");
  const [playerID, setPlayerID] = useState(0);
  const [Divs, setDivs] = useState(Array(9).fill(""));
  const [con, setCon] = useState(true);


  function init(index) {
    if (Divs[index] !== "X" && Divs[index] !== "O") {
      let newDivs = [...Divs];
      newDivs[index] = PlayerCode[playerID];
      setDivs(newDivs);
      if (playerID === 0) {
        setPlayerID(1);
        setPlayerName("O");
      } else {
        setPlayerID(0);
        setPlayerName("X");
      }
    }
  }

  useEffect(() => {
    ckeckWIN();
  }, [Divs]);



  // function init(index) {
  //   if (Divs[index] !== "X" && Divs[index] !== "O") {
  //     let newDivs = [...Divs];
  //     newDivs[index] = PlayerCode[playerID];
  //     setDivs(newDivs);
  //     if (playerID === 0) {
  //       setPlayerID(1);
  //       setPlayerName("O");
  //     } else {
  //       setPlayerID(0);
  //       setPlayerName("X");
  //     }
  //     ckeckWIN()
  //   }
  // }


  function ckeckWIN() {
    if (con) {
      if (
        (Divs[0] === PlayerCode[0] && Divs[1] === PlayerCode[0] && Divs[2] === PlayerCode[0]) ||
        (Divs[3] === PlayerCode[0] && Divs[4] === PlayerCode[0] && Divs[5] === PlayerCode[0]) ||
        (Divs[6] === PlayerCode[0] && Divs[7] === PlayerCode[0] && Divs[8] === PlayerCode[0]) ||
        (Divs[0] === PlayerCode[0] && Divs[3] === PlayerCode[0] && Divs[6] === PlayerCode[0]) ||
        (Divs[2] === PlayerCode[0] && Divs[5] === PlayerCode[0] && Divs[8] === PlayerCode[0]) ||
        (Divs[1] === PlayerCode[0] && Divs[4] === PlayerCode[0] && Divs[7] === PlayerCode[0]) ||
        (Divs[0] === PlayerCode[0] && Divs[4] === PlayerCode[0] && Divs[8] === PlayerCode[0]) ||
        (Divs[2] === PlayerCode[0] && Divs[4] === PlayerCode[0] && Divs[6] === PlayerCode[0])
      ) {
        let newDivs = [...Divs];
        for (var i = 0; i < newDivs.length; i++) {
          newDivs[i] = PlayerCode[0];
        }
        setCon(false)
        setDivs(newDivs);
        alert("player X is the winner")
      }
      if (
        (Divs[0] === PlayerCode[1] && Divs[1] === PlayerCode[1] && Divs[2] === PlayerCode[1]) ||
        (Divs[3] === PlayerCode[1] && Divs[4] === PlayerCode[1] && Divs[5] === PlayerCode[1]) ||
        (Divs[6] === PlayerCode[1] && Divs[7] === PlayerCode[1] && Divs[8] === PlayerCode[1]) ||
        (Divs[0] === PlayerCode[1] && Divs[3] === PlayerCode[1] && Divs[6] === PlayerCode[1]) ||
        (Divs[2] === PlayerCode[1] && Divs[5] === PlayerCode[1] && Divs[8] === PlayerCode[1]) ||
        (Divs[1] === PlayerCode[1] && Divs[4] === PlayerCode[1] && Divs[7] === PlayerCode[1]) ||
        (Divs[0] === PlayerCode[1] && Divs[4] === PlayerCode[1] && Divs[8] === PlayerCode[1]) ||
        (Divs[2] === PlayerCode[1] && Divs[4] === PlayerCode[1] && Divs[6] === PlayerCode[1])
      ) {
        let newDivs = [...Divs];
        for (var i = 0; i < newDivs.length; i++) {
          newDivs[i] = PlayerCode[1];
        }
        setCon(false)
        setDivs(newDivs);
        alert("player O is the winner")
      }
    }
  }


  function reset() {
    setDivs(Array(9).fill(""));
    setPlayerName("X");
    setCon(true)

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div id="menu">
        <div id="playerName">PLAYER <div className="span">{PlayerName}</div> IS PLAYING ...</div>
        <button className="reset" onClick={reset}>reset game</button>
      </div>
      <div className="page">
        <div className="grid-container">
          {Divs.map((button, index) => (
            <button
              key={index}
              id={"d" + String(index)}
              onClick={() => init(index)}
              className="grid-item"
              style={{ background: button ? PlayerColor[PlayerCode.indexOf(button)] : "#ffffff" }}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
