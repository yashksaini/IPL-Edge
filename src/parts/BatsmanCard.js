import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
const BatsmanCard = (props) => {
  const { bat1, bat2, strike, inningsNo, batTeamStats, bowlTeamStats } = props;
  const [bat1Data, setBat1Data] = useState({
    name: "",
    bat_run: 0,
    bat_ball: 0,
    bat_sr: 0,
    bat_4: 0,
    bat_6: 0,
  });
  const [bat2Data, setBat2Data] = useState({
    name: "",
    bat_run: 0,
    bat_ball: 0,
    bat_sr: 0,
    bat_4: 0,
    bat_6: 0,
  });
  const initials = () => {
    if (batTeamStats.length > 0 && bowlTeamStats.length > 0) {
      if (inningsNo === 1) {
        setBat1Data(batTeamStats[bat1]);
        setBat2Data(batTeamStats[bat2]);
      } else {
        setBat1Data(bowlTeamStats[bat1]);
        setBat2Data(bowlTeamStats[bat2]);
      }
    }
  };
  useEffect(() => {
    initials();
  }, [batTeamStats, bowlTeamStats, bat1, bat2]);

  // console.log(bat1, bat2);
  return (
    <div className={styles.batScorecard}>
      <div className={styles.card}>
        <div className={styles.cardName}>
          <span>Batsman</span>
        </div>
        <div className={styles.details}>
          <div className={styles.runs}>
            <span>Runs</span>
          </div>
          <div className={styles.sr}>
            <span>SR</span>
          </div>
          <div className={styles.four}>
            <span>4s</span>
          </div>
          <div className={styles.six}>
            <span>6s</span>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={strike ? `${styles.cardActive}` : `${styles.card}`}>
        <div className={styles.cardName}>
          <p>{bat1Data.name}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.runs}>
            {bat1Data.bat_run} ( {bat1Data.bat_ball} )
          </div>
          <div className={styles.sr}>{bat1Data.bat_sr}</div>
          <div className={styles.four}>{bat1Data.bat_4}</div>
          <div className={styles.six}>{bat1Data.bat_6}</div>
        </div>
      </div>
      <div className={strike ? `${styles.card}` : `${styles.cardActive}`}>
        <div className={styles.cardName}>
          <p>{bat2Data.name}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.runs}>
            {bat2Data.bat_run} ( {bat2Data.bat_ball} )
          </div>
          <div className={styles.sr}>{bat2Data.bat_sr}</div>
          <div className={styles.four}>{bat2Data.bat_4}</div>
          <div className={styles.six}>{bat2Data.bat_6}</div>
        </div>
      </div>
    </div>
  );
};

export default BatsmanCard;
