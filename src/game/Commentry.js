import React, { useState } from "react";
import styles from "../styles/scoreCard.module.css";

const Commentry = (props) => {
  const { modal, firstComments, secondComments, closeCommentsModal } = props;

  const [inns, setInns] = useState(true);
  return (
    <div className={modal ? `${styles.modal}` : `${styles.hide}`}>
      <div className={styles.closeBtn} onClick={closeCommentsModal}>
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
          <h1>1st Innings Commentary</h1>
          {firstComments
            .slice(0)
            .reverse()
            .map((comment) => {
              let run = "";
              let over = comment.run;
              if (over === 1 || over === 2 || over === 3) {
                run = <span className={styles.single}>{over}</span>;
              } else if (over === "W") {
                run = <span className={styles.out}>{over}</span>;
              } else if (over === 4) {
                run = <span className={styles.four1}>{over}</span>;
              } else if (over === 6) {
                run = <span className={styles.six1}>{over}</span>;
              } else if (over === 0) {
                run = <span className={styles.norun}>{over}</span>;
              }
              return (
                <div className={styles.comment}>
                  <div className={styles.topSide}>
                    <span>
                      {parseInt((comment.ballNo + 1) / 6)} .{" "}
                      {(comment.ballNo + 1) % 6}
                    </span>
                    {run}
                  </div>
                  <div className={styles.bottomSide}>
                    <span>
                      <b>{comment.bowler}</b> to <b>{comment.batsman}</b>
                    </span>
                    <span>{comment.comments}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={inns ? `${styles.hide}` : `${styles.showOvers}`}>
          <h1>2nd Innings Commentary</h1>
          {secondComments
            .slice(0)
            .reverse()
            .map((comment) => {
              let run = "";
              let over = comment.run;
              if (over === 1 || over === 2 || over === 3) {
                run = <span className={styles.single}>{over}</span>;
              } else if (over === "W") {
                run = <span className={styles.out}>{over}</span>;
              } else if (over === 4) {
                run = <span className={styles.four1}>{over}</span>;
              } else if (over === 6) {
                run = <span className={styles.six1}>{over}</span>;
              } else if (over === 0) {
                run = <span className={styles.norun}>{over}</span>;
              }
              return (
                <div className={styles.comment}>
                  <div className={styles.topSide}>
                    <span>
                      {parseInt((comment.ballNo + 1) / 6)} .{" "}
                      {(comment.ballNo + 1) % 6}
                    </span>
                    {run}
                  </div>
                  <div className={styles.bottomSide}>
                    <span>
                      <b>{comment.bowler}</b> to <b>{comment.batsman}</b>
                    </span>
                    <span>{comment.comments}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Commentry;
