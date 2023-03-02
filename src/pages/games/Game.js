import React from "react";
import { useParams } from "react-router";
import { RockPaperScissors } from "./RockPaperScissors";
import Tenzies from "./Tenzies";

function Game() {
  const { params } = useParams();

  return (
    <div>
      {!params && <h2>Select your preferred Game</h2>}
      {params === "tenzies" && <Tenzies />}
      {params === "rock-paper-scissors" && <RockPaperScissors />}
    </div>
  );
}

export default Game;
