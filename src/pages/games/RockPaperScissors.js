import React, { useState } from "react";
import "./../../util/styles/RockPaperScissors.css";
import rock from "./img/rock.png";
import paper from "./img/paper.png";
import scessors from "./img/scessors.png";

export const RockPaperScissors = () => {
  const arrItems = ["rock.png", "paper.png", "scessors.png"];
  const [message, setMessage] = useState("Good time");
  const [imgSrc, setImgSrc] = useState(null);
  const [partnerCount, setPartnerCount] = useState(0);
  const [youCount, setYouCount] = useState(0);

  const handleClick = (selectedItem) => {
    let idx = Math.round(Math.random() * 2);
    setImgSrc(arrItems[idx]);

    if (selectedItem === arrItems[idx]) {
      setMessage("You equal!");
    } else if (
      (selectedItem === "paper.png" && arrItems[idx] === "scessors.png") ||
      (selectedItem === "rock.png" && arrItems[idx] === "paper.png") ||
      (selectedItem === "scessors.png" && arrItems[idx] === "rock.png")
    ) {
      setMessage("You lost!");
      setPartnerCount((prev) => prev + 1);
    } else {
      setMessage("You won!");
      setYouCount((prev) => prev + 1);
    }
  };

  return (
    <div className="RockPaperScissors">
      <h1>Rock, Paper or Scissors</h1>
      <div className="wrapper">
        <div className="row">
          <div className="col imgs">
            <img onClick={() => handleClick("rock.png")} src={rock} alt="" />
            <img onClick={() => handleClick("paper.png")} src={paper} alt="" />
            <img
              onClick={() => handleClick("scessors.png")}
              src={scessors}
              alt=""
            />
          </div>
          <div className="col message">
            <h2>{message}</h2>
          </div>
          <div className="col partCard">
            {imgSrc && (
              <img
                className="partimg"
                alt=""
                src={require(`./img/${imgSrc}`)}
              />
            )}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>You</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h3>{youCount}</h3>
              </td>
              <td>
                <h3>{partnerCount}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
