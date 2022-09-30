import React, { useEffect, useContext, useState } from "react";
import styles from "../styles/modalSelect.module.css";
import { TeamContext } from "../TeamContext";
const ModelSelect = (props) => {
  const { teams } = useContext(TeamContext);
  const selType = ["Opener", "Non Striker", "Batsman", "Bowler"];
  const {
    batTeamStats,
    bowlTeamStats,
    inningsNo,
    fixPlayer,
    modal,
    overs,
    selectType,
    batName,
    bowlName,
  } = props;
  const [name, setName] = useState("Select Player");
  const [power, setPower] = useState("Power");
  const [showTeam, setShowTeam] = useState([]);
  const [playerNo, setPlayerNo] = useState(0);
  const [lastIndex, setLastIndex] = useState();
  const [valid, setValid] = useState(false);
  const [logo, setLogo] = useState(batName);
  const initials = () => {
    if (inningsNo === 1) {
      if (selectType === 3) {
        setLogo(bowlName);
        setShowTeam(bowlTeamStats);
      } else {
        setLogo(batName);
        setShowTeam(batTeamStats);
      }
    }
    if (inningsNo === 2) {
      if (selectType === 3) {
        setLogo(batName);
        setShowTeam(batTeamStats);
      } else {
        setLogo(bowlName);
        setShowTeam(bowlTeamStats);
      }
    }
  };
  useEffect(() => {
    initials();
  }, [batTeamStats, bowlTeamStats, selectType]);

  return (
    <div className={modal ? `${styles.modal}` : `${styles.hide}`}>
      <div className={styles.modalBody}>
        <div className={styles.teamName}></div>
        <div className={styles.playerList}>
          <div className={styles.topName}>
            <img src={teams[logo].imgURL} alt="" />
            <span>Select {selType[selectType]}</span>{" "}
          </div>
          <div className={styles.line}></div>
          {showTeam.map((player, index) => {
            if (selectType === 3) {
              if (
                (player.type === 1 || player.type === 2) &&
                player.bowl_ball < (overs * 6) / 5
              ) {
                if (index !== lastIndex) {
                  return (
                    <div
                      className={styles.allPlayers1}
                      onClick={() => {
                        setPower(player.bowl_power);
                        setName(player.name);
                        setPlayerNo(index);
                        setValid(true);
                      }}
                    >
                      <span>{player.name}</span>
                      <span>{parseInt(player.bowl_ball / 6)}.0</span>
                      <span>{player.bowl_power}</span>
                    </div>
                  );
                }
              } else {
                return null;
              }
            } else {
              if (player.status === 0) {
                return (
                  <div
                    className={styles.allPlayers}
                    onClick={() => {
                      setPower(player.bat_power);
                      setName(player.name);
                      setPlayerNo(index);
                      setValid(true);
                    }}
                  >
                    <span>{player.name}</span>
                    <span>{player.bat_power}</span>
                  </div>
                );
              } else {
                return null;
              }
            }
          })}
        </div>

        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.selPlayer}>
          <span>{name}</span>
          <span>{power}</span>
        </div>
        <button
          className={styles.next}
          disabled={!valid}
          onClick={() => {
            setValid(false);
            fixPlayer(playerNo);
            setName("Select Player");
            setPower("Power");
            if (selectType === 3) {
              setLastIndex(playerNo);
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ModelSelect;
