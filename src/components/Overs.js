import React, { useContext, useEffect, useState } from "react";
import hstyles from "../home.module.css";
import { TeamContext } from "../TeamContext";
import styles from "../styles/overs.module.css";
const Overs = (props) => {
  const { currentPage, selectOvers, team1, team2 } = props;
  const [overs, setOvers] = useState(20);
  const { teams } = useContext(TeamContext);
  return (
    <div className={currentPage === 2 ? null : `${hstyles.hide}`}>
      <div className={hstyles.progress}>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
        <span></span>
        <div></div>
        <span></span>
        <div></div>
      </div>
      <div className={styles.box}>
        <div className={styles.match}>
          <img src={teams[team1].imgURL} alt="" />
          <p>Vs</p>
          <img src={teams[team2].imgURL} alt="" />
        </div>
        <h1>SELECT OVERS</h1>
        <div className={styles.overs}>
          <div className={styles.row}>
            <div
              className={overs === 20 ? `${styles.selected}` : null}
              onClick={() => {
                setOvers(20);
              }}
            >
              20
            </div>
            <div
              className={overs === 10 ? `${styles.selected}` : null}
              onClick={() => {
                setOvers(10);
              }}
            >
              10
            </div>
          </div>
          <div className={styles.row}>
            <div
              className={overs === 5 ? `${styles.selected}` : null}
              onClick={() => {
                setOvers(5);
              }}
            >
              5
            </div>
            <div
              className={overs === 2 ? `${styles.selected}` : null}
              onClick={() => {
                setOvers(2);
              }}
            >
              2
            </div>
          </div>
        </div>
        <button
          className={styles.playBtn}
          onClick={() => {
            selectOvers(overs);
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Overs;
