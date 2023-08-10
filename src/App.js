import React, { useState } from "react";
import './App.css';
function App() {
  let PlayerCode = ["X", "O"];
  let PlayerColor = ["#ff0000", "#00ff00"];
  const [PlayerName, setPlayerName] = useState("PLAYER 1 IS PLAYING ...");
  const [playerID, setPlayerID] = useState(0);
  const [Divs, setDivs] = useState(Array(9).fill(""));
  function init(index) {
    if (Divs[index] !== "X" && Divs[index] !== "O") {
      ckeckWIN();
      let newDivs = [...Divs];
      newDivs[index] = PlayerCode[playerID];
      setDivs(newDivs);
      if (playerID === 0) {
        setPlayerID(1);
        setPlayerName("PLAYER 2 IS PLAYING ...");
      } else {
        setPlayerID(0);
        setPlayerName("PLAYER 1 IS PLAYING ...");
      }

    }
  }


  function ckeckWIN() {
    // Use the state variable Divs instead of the DOM elements
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
      console.log("player one [X] win................");
      for (var i = 0; i < 9; i++) {
        newDivs[i] = PlayerCode[0];
      }
      setDivs(newDivs);
      setPlayerName("PLAYER O IS THE WINER ...");
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
      console.log("player one [O] win................");
      for (var i = 0; i < 9; i++) {
        newDivs[i] = PlayerCode[1];
      }
      // newDivs.map((d)=>{
      // })
      setDivs(newDivs);
      setPlayerName("PLAYER X IS THE WINER ...");
    }
  }


  function reset() {
    setDivs(Array(9).fill(""));
    setPlayerName("PLAYER 1 IS PLAYING ...");
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div id="menu">
        <div id="playerName">{PlayerName}</div>
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



// import './App.css';
// import React, { useState } from 'react';
// function App() {
//   // const divs = [];
//   // for (let i = 0; i < 9; i++) {
//   //   divs.push(<div id={"d" + String(i)} onClick={init} style={{ backgroundColor: "#ffffff" }} className="grid-item"></div>);
//   // }
//   // console.log(divs[0])
//   let PlayerCode = ["X", "O"];
//   let PlayerColor = ["#ff0000", "#00ff00"];
//   const [PlayerName, setPlayerName] = useState("PLAYER 1 IS PLAYING ...")
//   const [playerID, setPlayerID] = useState(0)
//   const [color, setColor] = useState("#ffffff");
//   const [Divs, setDivs] = useState(Array(9).fill(""));

//   function init(e) {
//     if (e.target.innerHTML !== PlayerCode[0] && e.target.innerHTML !== PlayerCode[1]) {
//       e.target.innerHTML = PlayerCode[playerID];
//       e.target.style.background = PlayerColor[playerID];
//       if (playerID === 0) {
//         setPlayerID(1)
//         setPlayerName("PLAYER 1 IS PLAYING ...")
//       } else {
//         setPlayerID(0)
//         setPlayerName("PLAYER 1 IS PLAYING ...")
//       }
//       ckeckWIN();
//     }
//   }

//   function ckeckWIN() {
    // var buttons = document.getElementsByClassName("grid-item");
    // if (buttons[0].innerHTML === PlayerCode[0] && buttons[1].innerHTML === PlayerCode[0] && buttons[2].innerHTML === PlayerCode[0] ||
    //   buttons[3].innerHTML === PlayerCode[0] && buttons[4].innerHTML === PlayerCode[0] && buttons[5].innerHTML === PlayerCode[0] ||
    //   buttons[6].innerHTML === PlayerCode[0] && buttons[7].innerHTML === PlayerCode[0] && buttons[8].innerHTML === PlayerCode[0] ||

    //   buttons[0].innerHTML === PlayerCode[0] && buttons[3].innerHTML === PlayerCode[0] && buttons[6].innerHTML === PlayerCode[0] ||
    //   buttons[2].innerHTML === PlayerCode[0] && buttons[5].innerHTML === PlayerCode[0] && buttons[8].innerHTML === PlayerCode[0] ||
    //   buttons[1].innerHTML === PlayerCode[0] && buttons[4].innerHTML === PlayerCode[0] && buttons[7].innerHTML === PlayerCode[0] ||

    //   buttons[0].innerHTML === PlayerCode[0] && buttons[4].innerHTML === PlayerCode[0] && buttons[8].innerHTML === PlayerCode[0] ||
    //   buttons[2].innerHTML === PlayerCode[0] && buttons[4].innerHTML === PlayerCode[0] && buttons[6].innerHTML === PlayerCode[0]) {
    //   console.log("player one [X] win................");
    //   for (var i = 0; i < 9; i++) {
    //     buttons[i].innerHTML = PlayerCode[0];
    //     buttons[i].style.background = PlayerColor[0];
    //     setPlayerName("PLAYER 1 IS THE WINER ...")
    //   }
//     }


//     if (buttons[0].innerHTML === PlayerCode[1] && buttons[1].innerHTML === PlayerCode[1] && buttons[2].innerHTML === PlayerCode[1] ||
//       buttons[3].innerHTML === PlayerCode[1] && buttons[4].innerHTML === PlayerCode[1] && buttons[5].innerHTML === PlayerCode[1] ||
//       buttons[6].innerHTML === PlayerCode[1] && buttons[7].innerHTML === PlayerCode[1] && buttons[8].innerHTML === PlayerCode[1] ||

//       buttons[0].innerHTML === PlayerCode[1] && buttons[3].innerHTML === PlayerCode[1] && buttons[6].innerHTML === PlayerCode[1] ||
//       buttons[2].innerHTML === PlayerCode[1] && buttons[5].innerHTML === PlayerCode[1] && buttons[8].innerHTML === PlayerCode[1] ||
//       buttons[1].innerHTML === PlayerCode[1] && buttons[4].innerHTML === PlayerCode[1] && buttons[7].innerHTML === PlayerCode[1] ||

//       buttons[0].innerHTML === PlayerCode[1] && buttons[4].innerHTML === PlayerCode[1] && buttons[8].innerHTML === PlayerCode[1] ||
//       buttons[2].innerHTML === PlayerCode[1] && buttons[4].innerHTML === PlayerCode[1] && buttons[6].innerHTML === PlayerCode[1]) {
//       console.log("player two [O] win................");
//       for (var j = 0; j < 9; j++) {
//         buttons[j].innerHTML = PlayerCode[1];
//         buttons[j].style.background = PlayerColor[1];
//         setPlayerName("PLAYER 2 IS THE WINER ...")
//       }
//     }
//   }
//   function reset() {
//     setDivs(Array(9).fill(""));
//     setPlayerName("PLAYER 1 IS PLAYING ...");
//     setColor("#5f5f5f")
//   }

//   return (
//     <>
//       <h1>Tic Tak Toy</h1>
//       <div id="menu">
//         <div id="playerName">{PlayerName}</div>
//         <button onClick={reset}>reset game</button>
//       </div>
//       <div class="page">
//         <div class="grid-container">
//           {Divs.map((button, index) => (
//             <div key={index} onClick={init} className="grid-item" style={{ background: color }}>
//               {button}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
