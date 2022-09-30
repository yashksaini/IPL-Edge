import React, { useState } from "react";
import styles from "../styles/scoreCard.module.css";
const OversData = (props) => {
  const {
    modal,
    firstInnOvers,
    secondInnOvers,
    closeOversModal,
    firstBowlers,
    secondBowlers,
  } = props;
  const [inns, setInns] = useState(true);
  const sumValues = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== "W") {
        sum += parseInt(a[i]);
      }
    }
    return sum;
  };
  return (
    <div className={modal ? `${styles.modal}` : `${styles.hide}`}>
      <div className={styles.closeBtn} onClick={closeOversModal}>
        <i className="fas fa-times"></i>
      </div>
      <div className={styles.modalBody}>
        <div className={styles.changeOvInns}>
          <div
            onClick={() => {
              setInns(true);
            }}
          >
            1st Innings
          </div>
          <div
            onClick={() => {
              setInns(false);
            }}
          >
            2nd Innings
          </div>
        </div>
        <div className={inns ? `${styles.showOvers}` : `${styles.hide}`}>
          <h1>1st Innings Overs</h1>
          {firstInnOvers.map((overData, index) => {
            if (overData.length > 0) {
              return (
                <div className={styles.eachOver}>
                  <div className={styles.rowLine}>
                    <div className={styles.colRow}>Ov {index + 1}</div>
                    <div className={styles.colRow}>{firstBowlers[index]}</div>
                  </div>
                  <div className={styles.rowLine}>
                    <div className={styles.colRow}>
                      {sumValues(overData)} runs
                    </div>
                    <div className={styles.colRow}>
                      {overData.map((over) => {
                        if (over === 1 || over === 2 || over === 3) {
                          return <div className={styles.single}>{over}</div>;
                        } else if (over === "W") {
                          return <div className={styles.out}>{over}</div>;
                        } else if (over === 4) {
                          return <div className={styles.four1}>{over}</div>;
                        } else if (over === 6) {
                          return <div className={styles.six1}>{over}</div>;
                        } else if (over === 0) {
                          return <div className={styles.norun}>{over}</div>;
                        }
                      })}
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className={inns ? `${styles.hide}` : `${styles.showOvers}`}>
          <h1>2nd Innings Overs</h1>
          {secondInnOvers.map((overData, index) => {
            if (overData.length > 0) {
              return (
                <div className={styles.eachOver}>
                  <div className={styles.rowLine}>
                    <div className={styles.colRow}>Ov {index + 1}</div>
                    <div className={styles.colRow}>{secondBowlers[index]}</div>
                  </div>
                  <div className={styles.rowLine}>
                    <div className={styles.colRow}>
                      {sumValues(overData)} runs
                    </div>
                    <div className={styles.colRow}>
                      {overData.map((over) => {
                        if (over === 1 || over === 2 || over === 3) {
                          return <div className={styles.single}>{over}</div>;
                        } else if (over === "W") {
                          return <div className={styles.out}>{over}</div>;
                        } else if (over === 4) {
                          return <div className={styles.four1}>{over}</div>;
                        } else if (over === 6) {
                          return <div className={styles.six1}>{over}</div>;
                        } else if (over === 0) {
                          return <div className={styles.norun}>{over}</div>;
                        }
                      })}
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OversData;
