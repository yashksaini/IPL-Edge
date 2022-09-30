import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/scoreCard.module.css";
import { TeamContext } from "../TeamContext";
const Innings = (props) => {
  const {
    modal,
    inn,
    batTeamStats,
    bowlTeamStats,
    closeScoreCard,
    overs,
    batName,
    bowlName,
  } = props;
  const { teams } = useContext(TeamContext);
  const inngsData = inn === 1 ? batTeamStats : bowlTeamStats;
  const bowlData = inn === 1 ? bowlTeamStats : batTeamStats;
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [crr, setCrr] = useState("0.00");
  const [wick, setWick] = useState(0);
  const [batTeam, setBatTeam] = useState(batName);
  const [bowlTeam, setBowlTeam] = useState(bowlName);
  const calculateData = () => {
    if (inn === 1) {
      setBowlTeam(bowlName);
      setBatTeam(batName);
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
      setBowlTeam(batName);
      setBatTeam(bowlName);
      setCrr("0.00");
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
    <div className={modal ? `${styles.modal}` : `${styles.hide}`}>
      <div className={styles.closeBtn} onClick={closeScoreCard}>
        <i className="fas fa-times"></i>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.batScorecard}>
          <div className={styles.card}>
            <img src={teams[batTeam].imgURL} alt="" />
            <div>{inn === 1 ? "1st Innings" : "2nd Innings"}</div>
          </div>
          <div className={styles.topScore}>
            <div>
              {runs} - {wick}
            </div>
            <div>
              {parseInt(balls / 6)} . {balls % 6} ({overs})
            </div>
            <div>
              <span>{crr}</span>
            </div>
          </div>
          <div className={styles.card}>
            <p>Batting ScoreCard</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardName}>
              <p>Batsman</p>
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
          {inngsData.map((data) => {
            if (data.status === 2) {
              return (
                <div className={styles.card}>
                  <div className={styles.cardName}>
                    <p>
                      {data.name} <br />{" "}
                      <span className={styles.outBy}>by {data.outBy}</span>
                    </p>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.runs}>
                      {data.bat_run} ( {data.bat_ball} )
                    </div>
                    <div className={styles.sr}>{data.bat_sr}</div>
                    <div className={styles.four}>{data.bat_4}</div>
                    <div className={styles.six}>{data.bat_6}</div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          {inngsData.map((data) => {
            if (data.status === 1) {
              return (
                <div className={styles.card}>
                  <div className={styles.cardName}>
                    <p>
                      {data.name} <br />{" "}
                      <span className={styles.playing}>not out</span>
                    </p>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.runs}>
                      {data.bat_run} ( {data.bat_ball} )
                    </div>
                    <div className={styles.sr}>{data.bat_sr}</div>
                    <div className={styles.four}>{data.bat_4}</div>
                    <div className={styles.six}>{data.bat_6}</div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className={styles.card}>
            <div className={styles.cardName}>
              <p>Yet to Play</p>
            </div>
          </div>

          <div className={styles.leftPlayers}>
            {inngsData.map((data) => {
              if (data.status === 0) {
                return <span> {data.name} </span>;
              } else {
                return null;
              }
            })}
          </div>
          <div className={styles.line}></div>
          <div className={styles.separate}></div>
          <div className={styles.card}>
            <img src={teams[bowlTeam].imgURL} alt="" />
            <p>Bowling ScoreCard </p>
          </div>
          <div className={styles.line}></div>
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
          {bowlData.map((data) => {
            if ((data.type === 1 || data.type === 2) && data.bowl_ball > 0) {
              return (
                <div className={styles.card}>
                  <div className={styles.cardName}>
                    <p>{data.name}</p>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.ov}>
                      {parseInt(data.bowl_ball / 6)}.{data.bowl_ball % 6}
                    </div>
                    <div className={styles.runs}>{data.bowl_run}</div>
                    <div className={styles.wick}>{data.bowl_w}</div>
                    <div className={styles.eco}>{data.bowl_eco}</div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className={styles.card}>
            <div className={styles.cardName}>
              <p>Yet to Bowl</p>
            </div>
          </div>
          <div className={styles.leftPlayers}>
            {bowlData.map((data) => {
              if (
                (data.type === 1 || data.type === 2) &&
                data.bowl_ball === 0
              ) {
                return <span>{data.name}</span>;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innings;
