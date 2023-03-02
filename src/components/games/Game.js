import React from "react";
import { useParams } from "react-router";
import Tenzies from "./Tenzies";

function Game() {
  const { params } = useParams();

  return (
    <div>
      {!params && <h2>Select your prifer Game</h2>}
      {params === "tenzies" && <Tenzies />}
    </div>
  );
}

export default Game;
