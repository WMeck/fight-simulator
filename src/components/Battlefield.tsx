import { useState } from "react";
import style from "./battlefield.module.css";

export default function Battlefield() {
  const [firstUnitGrid, setFirstUnitGrid] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [unitFirstStats, setUnitFirstStats] = useState([
    { stat: "ws", value: 5 },
    { stat: "r", value: 3 },
    { stat: "s", value: 3 },
    { stat: "agi", value: 4 },
  ]);

  const [unitSecondStats, setUnitSecondStats] = useState([
    { stat: "ws", value: 2 },
    { stat: "r", value: 5 },
    { stat: "s", value: 5 },
    { stat: "agi", value: 1 },
  ]);

  function setGrid() {
    setFirstUnitGrid(firstUnitGrid);
    console.log(
      firstUnitGrid.map((unit) => {
        unit;
      })
    );
  }

  return (
    <div className={style.battlefield}>
      <button onClick={setGrid}>set</button>
      <div className={style.grid}>
        {firstUnitGrid.map((row, rowIndex) => (
          <div className={style.row} key={rowIndex}>
            {row.map((unit, colIndex) => (
              <div className={style.unit} key={colIndex}>
                {unit}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={style.unitCard}>
        First Unit
        <div className={style.statWrapper}>
          {unitSecondStats.map((stat, index) => (
            <div className={style.statGroup} key={index}>
              <div className={style.statName}>{stat.stat}</div>{" "}
              <div className={style.statValue}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.unitCard}>
        second Unit
        <div className={style.statWrapper}>
          {unitFirstStats.map((stat, index) => (
            <div className={style.statGroup} key={index}>
              <div className={style.statName}>{stat.stat}</div>{" "}
              <div className={style.statValue}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
