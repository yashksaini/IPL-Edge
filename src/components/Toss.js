import React, { useContext, useEffect, useState } from "react";
import hstyles from "../home.module.css";
import { TeamContext } from "../TeamContext";
import styles from "../styles/toss.module.css";
import { Link } from "react-router-dom";
const Toss = (props) => {
  const { currentPage, team1, team2, setToss, changePage } = props;
  const [tossWinner, setTossWinner] = useState(team1);
  const [tossType, setTossType] = useState(1);

  const { teams } = useContext(TeamContext);
  const coinToss = () => {
    const tossValue = Math.floor(Math.random() * 2);
    if (tossValue === 0) {
      setTossWinner(team1);
    } else {
      setTossWinner(team2);
    }
  };
  useEffect(() => {
    coinToss();
  }, [currentPage]);

  return (
    <div className={currentPage === 4 ? null : `${hstyles.hide}`}>
      <div className={hstyles.progress}>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
      </div>
      <div className={styles.box}>
        <div className={styles.match}>
          <img src={teams[team1].imgURL} alt="" />
          <p>Vs</p>
          <img src={teams[team2].imgURL} alt="" />
        </div>
        <div className={styles.tossWin}>
          <img src={teams[tossWinner].imgURL} alt="" />
          <p>Won the toss</p>
        </div>
        <div className={styles.chooseType}>
          <div
            className={tossType === 1 ? `${styles.activeTeam}` : null}
            onClick={() => {
              setTossType(1);
            }}
          >
            <img src="type/Batting.png" />
          </div>
          <div
            className={tossType === 2 ? `${styles.activeTeam}` : null}
            onClick={() => {
              setTossType(2);
            }}
          >
            <img src="type/Bowling.png" />
          </div>
        </div>
        <Link
          to="/game"
          className={styles.playBtn}
          onClick={() => {
            setToss(tossWinner, tossType);
            changePage();
          }}
        >
          START
        </Link>
      </div>
    </div>
  );
};

export default Toss;
