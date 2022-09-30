import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/playerSelect.module.css";
import { TeamContext } from "../TeamContext";
import hstyles from "../home.module.css";
import { PlayerContext } from "../PlayerContex";

const PlayerSelect = (props) => {
  const { teams } = useContext(TeamContext);
  const { players } = useContext(PlayerContext);
  const { currentPage, overs, team1, team2, finalTeams } = props;
  const [teamno, setTeamno] = useState(team1);
  const [currTeam, setCurrTeam] = useState(1);
  const [team1Added, setTeam1Added] = useState([]);
  const [team1Left, setTeam1Left] = useState([]);
  const [left, setLeft] = useState(0);
  const [allIds, setAllIds] = useState([]);
  const [added, setAdded] = useState(0);
  const [team1Bowl, setTeam1Bowl] = useState(0);
  const [team1WK, setTeam1WK] = useState(0);
  const [team1Overseas, setTeam1Overseas] = useState(0);
  const [valid1, setValid1] = useState(false);

  const [team2Added, setTeam2Added] = useState([]);
  const [team2Left, setTeam2Left] = useState([]);
  const player_types = [
    "type/Bat.png",
    "type/Ball.png",
    "type/Allround.png",
    "type/WK.png",
  ];
  let arr1 = [];
  const countPlayers = (arr, ids) => {
    let p = 0;
    let q = 0;
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
      let a = ids.indexOf(arr[i]);
      if (a !== -1) {
        if (players[a].type == "1" || players[a].type == "2") {
          p++;
        }
        if (players[a].type == "3") {
          q++;
        }
        if (players[a].overseas === true) {
          r++;
        }
      }
    }
    checkValidTeam(p, q, r);
    setTeam1Bowl(p);
    setTeam1WK(q);
    setTeam1Overseas(r);
  };
  const setTeams = () => {
    setTeamno(team1);
    arr1 = [];
    let arr2 = [];
    let idArray = [];
    for (let i = 0; i < players.length; i++) {
      idArray.push(players[i].id);
      if (players[i].team_id === teams[team1].id) {
        arr1.push(players[i].id);
      }
      if (players[i].team_id === teams[team2].id) {
        arr2.push(players[i].id);
      }
    }

    setAllIds(idArray);
    let temp = [];
    let temp2 = [];
    for (let i = 0; i < 11; i++) {
      temp.push(arr1[i]);
      temp2.push(arr2[i]);
    }
    countPlayers(temp, idArray);
    setTeam1Added(temp);
    setTeam2Added(temp2);
    let temp1 = [];
    let temp3 = [];
    for (let i = 11; i < arr1.length; i++) {
      temp1.push(arr1[i]);
    }
    for (let i = 11; i < arr2.length; i++) {
      temp3.push(arr2[i]);
    }
    setTeam1Left(temp1);
    setTeam2Left(temp3);
  };

  useEffect(() => {
    setTeams();
  }, [team1, team2]);
  const checkValidTeam = (a, b, c) => {
    let p = false;
    let q = false;
    let r = false;
    if (a > 5) {
      p = true;
    }
    if (b > 0) {
      q = true;
    }
    if (c < 5) {
      r = true;
    }
    if (p && q && r) {
      setValid1(true);
    } else {
      setValid1(false);
    }
  };
  return (
    <div className={currentPage === 3 ? null : `${hstyles.hide}`}>
      <div className={hstyles.progress}>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
        <span className={hstyles.done}></span>
        <div className={hstyles.done}></div>
        <span></span>
        <div></div>
      </div>
      <div className={styles.topBox}>
        <div>{overs} </div>
        <div
          className={currTeam === 1 ? `${styles.switch}` : `${styles.hide}`}
          onClick={() => {
            let arr1 = [];
            arr1 = [...team1Left];
            let arr2 = [];
            arr2 = [...team1Added];
            let temp;
            temp = arr1[left];
            arr1[left] = arr2[added];
            arr2[added] = temp;

            setTeam1Left(arr1);
            setTeam1Added(arr2);
            countPlayers(arr2, allIds);
          }}
        >
          <i className="fas fa-sync"></i>
        </div>
        <div
          className={currTeam === 2 ? `${styles.switch}` : `${styles.hide}`}
          onClick={() => {
            let arr1 = [];
            arr1 = [...team2Left];
            let arr2 = [];
            arr2 = [...team2Added];
            let temp;
            temp = arr1[left];
            arr1[left] = arr2[added];
            arr2[added] = temp;

            setTeam2Left(arr1);
            setTeam2Added(arr2);
            countPlayers(arr2, allIds);
          }}
        >
          <i className="fas fa-sync"></i>
        </div>
        <img src={teams[teamno].imgURL} alt="" />
      </div>
      <div className={currTeam === 1 ? `${styles.teamBox}` : `${hstyles.hide}`}>
        <div className={styles.teamSelect}>
          <div className={styles.bigCard}>
            <div className={styles.topBar}>
              <div className={styles.topName}>Name</div>
              <div className={styles.power}>
                <div>Bat</div>
                <div>
                  <i className="fas fa-dot-circle"></i>
                </div>
              </div>
            </div>
            {team1Left.map((player, index) => {
              let l = allIds.indexOf(player);
              if (left === index) {
                return (
                  <div className={styles.selectBar}>
                    <div className={styles.topName}>
                      <img src={player_types[players[l].type]} alt="" />
                      <p
                        className={
                          players[l].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[l].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[l].bat}</div>
                      <div>{players[l].bowl}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.eachBar}
                    onClick={() => {
                      setLeft(index);
                    }}
                  >
                    <div className={styles.topName}>
                      <img src={player_types[players[l].type]} alt="" />
                      <p
                        className={
                          players[l].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[l].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[l].bat}</div>
                      <div>{players[l].bowl}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div className={styles.bigCard}>
            <div className={styles.topBar}>
              <div
                className={
                  team1Bowl > 5 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                <i className="fas fa-dot-circle"></i>&nbsp; - {team1Bowl}
              </div>
              <div
                className={
                  team1WK > 0 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                WK - {team1WK}
              </div>
              <div
                className={
                  team1Overseas < 5 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                <i className="fas fa-plane"></i>&nbsp; - {team1Overseas}
              </div>
            </div>
            {team1Added.map((player, index) => {
              let a = allIds.indexOf(player);

              if (index === added) {
                return (
                  <div className={styles.selectBar}>
                    <div className={styles.topName}>
                      <img src={player_types[players[a].type]} alt="" />
                      <p
                        className={
                          players[a].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[a].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[a].bat}</div>
                      <div>{players[a].bowl}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.eachBar}
                    onClick={() => {
                      setAdded(index);
                    }}
                  >
                    <div className={styles.topName}>
                      <img src={player_types[players[a].type]} alt="" />
                      <p
                        className={
                          players[a].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[a].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[a].bat}</div>
                      <div>{players[a].bowl}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <button
          disabled={!valid1}
          className={styles.playBtn}
          onClick={() => {
            setCurrTeam(2);
            setTeamno(team2);
            setLeft(0);
            setAdded(0);
            countPlayers(team2Added, allIds);
          }}
        >
          NEXT
        </button>
      </div>
      <div className={currTeam === 2 ? `${styles.teamBox}` : `${hstyles.hide}`}>
        <div className={styles.teamSelect}>
          <div className={styles.bigCard}>
            <div className={styles.topBar}>
              <div className={styles.topName}>Name</div>
              <div className={styles.power}>
                <div>Bat</div>
                <div>
                  <i className="fas fa-dot-circle"></i>
                </div>
              </div>
            </div>
            {team2Left.map((player, index) => {
              let l = allIds.indexOf(player);
              if (left === index) {
                return (
                  <div className={styles.selectBar}>
                    <div className={styles.topName}>
                      <img src={player_types[players[l].type]} alt="" />
                      <p
                        className={
                          players[l].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[l].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[l].bat}</div>
                      <div>{players[l].bowl}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.eachBar}
                    onClick={() => {
                      setLeft(index);
                    }}
                  >
                    <div className={styles.topName}>
                      <img src={player_types[players[l].type]} alt="" />
                      <p
                        className={
                          players[l].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[l].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[l].bat}</div>
                      <div>{players[l].bowl}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.bigCard}>
            <div className={styles.topBar}>
              <div
                className={
                  team1Bowl > 5 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                <i className="fas fa-dot-circle"></i>&nbsp; - {team1Bowl}
              </div>
              <div
                className={
                  team1WK > 0 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                WK - {team1WK}
              </div>
              <div
                className={
                  team1Overseas < 5 ? `${styles.topName}` : `${styles.danger}`
                }
              >
                <i className="fas fa-plane"></i> &nbsp; - {team1Overseas}
              </div>
            </div>
            {team2Added.map((player, index) => {
              let a = allIds.indexOf(player);

              if (index === added) {
                return (
                  <div className={styles.selectBar}>
                    <div className={styles.topName}>
                      <img src={player_types[players[a].type]} alt="" />
                      <p
                        className={
                          players[a].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[a].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[a].bat}</div>
                      <div>{players[a].bowl}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.eachBar}
                    onClick={() => {
                      setAdded(index);
                    }}
                  >
                    <div className={styles.topName}>
                      <img src={player_types[players[a].type]} alt="" />
                      <p
                        className={
                          players[a].overseas ? `${styles.greenDot}` : null
                        }
                      >
                        {players[a].name}
                      </p>
                    </div>
                    <div className={styles.power}>
                      <div>{players[a].bat}</div>
                      <div>{players[a].bowl}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <button
          disabled={!valid1}
          className={styles.playBtn}
          onClick={() => {
            finalTeams(team1Added, team2Added);
          }}
        >
          TOSS
        </button>
      </div>
    </div>
  );
};

export default PlayerSelect;
