import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
const BowlerCard = (props) => {
  const { bowler, inningsNo, batTeamStats, bowlTeamStats } = props;
  const [bowlData, setBowlData] = useState({
    name: "",
    bowl_run: 0,
    bowl_ball: 0,
    bowl_eco: 0,
    bowl_w: 0,
  });
  const initials = () => {
    if (batTeamStats.length > 0 && bowlTeamStats.length > 0) {
      if (inningsNo === 1) {
        setBowlData(bowlTeamStats[bowler]);
      } else {
        setBowlData(batTeamStats[bowler]);
      }
    }
  };
  useEffect(() => {
    initials();
  }, [batTeamStats, bowlTeamStats, bowler]);
  return (
    <div className={styles.batScorecard}>
      <div className={styles.card}>
        <div className={styles.cardName}>
          <span>Bowler</span>
        </div>
        <div className={styles.details}>
          <div className={styles.ov}>
            <span>Over</span>
          </div>
          <div className={styles.runs}>
            <span>Runs</span>
          </div>
          <div className={styles.wick}>
            <span>W</span>
          </div>
          <div className={styles.eco}>
            <span>Eco</span>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cardActive}>
        <div className={styles.cardName}>
          <p>{bowlData.name}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.ov}>
            {parseInt(bowlData.bowl_ball / 6)}.{bowlData.bowl_ball % 6}
          </div>
          <div className={styles.runs}>{bowlData.bowl_run}</div>
          <div className={styles.wick}>{bowlData.bowl_w}</div>
          <div className={styles.eco}>{bowlData.bowl_eco}</div>
        </div>
      </div>
    </div>
  );
};

export default BowlerCard;
