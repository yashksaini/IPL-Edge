import React, { useState, useContext, useEffect } from "react";
import { TeamContext } from "../TeamContext";
import styles from "../styles/scorebar.module.css";
const ScoreBar = (props) => {
  const {
    team1,
    team2,
    choose,
    tossWon,
    overs,
    inningsNo,
    batName,
    bowlName,
    batTeamStats,
    bowlTeamStats,
  } = props;
  const { teams } = useContext(TeamContext);
  const statusType = ["BAT", "FIELD"];
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [crr, setCrr] = useState("0.00");
  const [wick, setWick] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(batName);
  const calculateData = () => {
    if (inningsNo === 1) {
      let countRun = 0;
      let countWick = 0;
      let countBall = 0;
      for (let i = 0; i < batTeamStats.length; i++) {
        if (batTeamStats[i].out === true) {
          countWick++;
        }
        countRun += batTeamStats[i].bat_run;
        countBall += batTeamStats[i].bat_ball;
      }
      if (countBall > 0) {
        let temp = (countRun * 6) / countBall;
        setCrr(temp.toFixed(2));
      }
      setRuns(countRun);
      setBalls(countBall);
      setWick(countWick);
    } else {
      setCurrentTeam(bowlName);
      let countRun = 0;
      let countWick = 0;
      let countBall = 0;
      for (let i = 0; i < bowlTeamStats.length; i++) {
        if (bowlTeamStats[i].out === true) {
          countWick++;
        }
        countRun += bowlTeamStats[i].bat_run;
        countBall += bowlTeamStats[i].bat_ball;
      }
      if (countBall > 0) {
        let temp = (countRun * 6) / countBall;
        setCrr(temp.toFixed(2));
      }
      setRuns(countRun);
      setBalls(countBall);
      setWick(countWick);
    }
  };

  useEffect(() => {
    calculateData();
  });

  return (
    <div className={styles.scoreboard}>
      <div className={styles.vsShow}>
        <img src={teams[team1].imgURL} alt="" />
        <span>Vs</span>
        <img src={teams[team2].imgURL} alt="" />
      </div>
      <div className={styles.scoreShow}>
        <img src={teams[currentTeam].imgURL} alt="" />
        <div className={styles.score}>
          {runs} - {wick}
        </div>
        <div className={styles.overs}>
          ({parseInt(balls / 6)}.{balls % 6})&nbsp; <b>{overs}</b>
        </div>
        <div className={styles.crr}>
          CRR <span>{crr}</span>
        </div>
      </div>

      <div className={styles.tossShow}>
        <img src={teams[tossWon].imgURL} alt="" />
        <span>
          decided to <b>{statusType[choose - 1]}</b>
        </span>
      </div>
    </div>
  );
};

export default ScoreBar;
