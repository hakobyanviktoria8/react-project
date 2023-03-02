import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./../../util/styles/Tenzies.css";

const generatePoin = () => {
  return {
    id: nanoid(),
    val: Math.floor(Math.random() * 9) + 1,
    isChoosen: false,
  };
};

const generatePointArr = () => {
  let pointArr = [];
  for (let i = 0; i < 10; i++) {
    pointArr.push(generatePoin());
  }
  return pointArr;
};

function Tenzies() {
  const [allPoints, setAllPoints] = useState(generatePointArr());
  const [tenzies, setTenzies] = useState(false);
  const [arr, setArr] = useState([]);
  const [firstVal, setFirstVal] = useState(null);

  useEffect(() => {
    const allTrue = allPoints.every((obj) => obj.isChoosen);
    setFirstVal(arr[0]?.val);
    const allSameVal = allPoints.every((obj) => obj.val === firstVal);

    if (allSameVal && allTrue) {
      setTenzies(true);
    }
  }, [allPoints]);

  function refreshPage() {
    if (!tenzies) {
      setAllPoints((prev) =>
        prev.map((obj) => {
          return obj.isChoosen ? obj : generatePoin();
        })
      );
    } else {
      setAllPoints(generatePointArr());
      setTenzies(false);
    }
  }

  const handleClick = (id) => {
    let curr = allPoints.find((obj) => obj.id === id);
    setArr([...arr, curr]);

    setAllPoints((prev) =>
      prev.map((obj) => {
        return obj.id === id && obj.val === firstVal
          ? { ...obj, isChoosen: !obj.isChoosen }
          : obj;
      })
    );
  };

  return (
    <div className="Tenzies">
      {tenzies && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <h2>Tenzies game</h2>
      <div className="tenziesWrapper">
        <div className="tenziesPoints">
          {allPoints.map((item) => (
            <p
              key={item.id}
              className={item.isChoosen ? "isChoosen" : ""}
              onClick={() => handleClick(item.id)}
            >
              {item.val}
            </p>
          ))}
        </div>
        <button onClick={refreshPage}>{!tenzies ? "Roll" : "New Game"}</button>
      </div>
    </div>
  );
}

export default Tenzies;
