import React, { useContext, useEffect, useState } from "react";
import { TeamContext } from "../TeamContext";
import hstyles from "../home.module.css";
import styles from "../styles/select.module.css";
const Select = (props) => {
  const { selectTeams, currentPage } = props;
  const [modal, setModal] = useState(false);
  const { teams } = useContext(TeamContext);
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(1);
  const [currentTeam, setCurrentTeam] = useState("Team 1");
  const [valid, setValid] = useState(false);

  const checkValid = () => {
    if (team1 === team2) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  useEffect(() => {
    checkValid();
  }, [team1, team2]);

  return (
    <div className={currentPage === 1 ? null : `${hstyles.hide}`}>
      <div className={hstyles.title}>
        IPL EDGE
        <span>Version 30.5.22.7</span>
      </div>

      <div className={hstyles.progress}>
        <div className={hstyles.done}></div>
        <span></span>
        <div></div>
        <span></span>
        <div></div>
        <span></span>
        <div></div>
      </div>
      <div className={styles.selectTeam}>
        <div>
          <img src={teams[team1].imgURL} alt="" />
          <button
            className={styles.selectBtn}
            onClick={() => {
              setModal(true);
              setCurrentTeam("Team 1");
            }}
          >
            SELECT
          </button>
        </div>
        <p>Vs</p>
        <div>
          <img src={teams[team2].imgURL} alt="" />
          <button
            className={styles.selectBtn}
            onClick={() => {
              setModal(true);
              setCurrentTeam("Team 2");
            }}
          >
            SELECT
          </button>
        </div>
        <button
          disabled={valid}
          className={styles.playBtn}
          onClick={() => {
            selectTeams(team1, team2);
          }}
        >
          PLAY
        </button>
      </div>

      <div className={modal === true ? `${styles.modal}` : `${styles.hide}`}>
        <div className={styles.modalHead}>
          <h1>{currentTeam}</h1>
          <i
            className="fas fa-times"
            onClick={() => {
              setModal(false);
            }}
          ></i>
        </div>
        <div className={styles.modalBody}>
          {teams.map((team, index) => {
            if (currentTeam === "Team 1") {
              if (index === team1) {
                return (
                  <div key={team.id} className={styles.activeTeam}>
                    <img alt="" src={team.imgURL} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={team.id}
                    onClick={() => {
                      setTeam1(index);
                      setModal(false);
                    }}
                  >
                    <img alt="" src={team.imgURL} />
                  </div>
                );
              }
            } else {
              if (index === team2) {
                return (
                  <div key={team.id} className={styles.activeTeam}>
                    <img alt="" src={team.imgURL} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={team.id}
                    onClick={() => {
                      setTeam2(index);
                      setModal(false);
                    }}
                  >
                    <img alt="" src={team.imgURL} />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
