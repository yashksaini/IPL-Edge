import React, { useEffect, useState } from "react";
import styles from "../styles/currentScore.module.css";
const CurrentOver = (props) => {
  const { innOvers, overNo } = props;
  const [overData, setOverData] = useState([]);
  const [lastOver, setLastOver] = useState([]);
  const [runs, setRuns] = useState(0);
  const [lastRuns, setLastRuns] = useState(0);
  // console.log(innOvers);
  const sumValues = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== "W") {
        sum += parseInt(a[i]);
      }
    }
    return sum;
  };
  // console.log(innOvers, overNo);
  useEffect(() => {
    if (innOvers) {
      if (overNo > 0) {
        setLastOver(innOvers[overNo - 1]);
        setLastRuns(sumValues(innOvers[overNo - 1]));
      } else {
        setLastOver([]);
      }
      setOverData(innOvers[overNo]);
    } else {
      setLastOver([]);
    }
  }, [innOvers, overNo]);
  useEffect(() => {
    setRuns(sumValues(innOvers[overNo]));
  });
  return (
    <div>
      <div className={styles.currentOver}>
        <div className={styles.overNo}>
          <span>Ov {overNo + 1}</span> <span>{runs} runs</span>
        </div>
        <div className={styles.overBalls}>
          {overData.map((over) => {
            if (over === 1 || over === 2 || over === 3) {
              return <div className={styles.single}>{over}</div>;
            } else if (over === "W") {
              return <div className={styles.out}>{over}</div>;
            } else if (over === 4) {
              return <div className={styles.four}>{over}</div>;
            } else if (over === 6) {
              return <div className={styles.six}>{over}</div>;
            } else if (over === 0) {
              return <div className={styles.norun}>{over}</div>;
            }
          })}
        </div>
      </div>
      <div
        className={
          lastOver.length > 0 ? `${styles.currentOver}` : `${styles.hide}`
        }
      >
        <div className={styles.overNo}>
          <span>Ov {overNo} </span>
          <span>{lastRuns} runs</span>
        </div>

        <div className={styles.overBalls}>
          {lastOver.map((over) => {
            if (over === 1 || over === 2 || over === 3) {
              return <div className={styles.single}>{over}</div>;
            } else if (over === "W") {
              return <div className={styles.out}>{over}</div>;
            } else if (over === 4) {
              return <div className={styles.four}>{over}</div>;
            } else if (over === 6) {
              return <div className={styles.six}>{over}</div>;
            } else if (over === 0) {
              return <div className={styles.norun}>{over}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrentOver;
