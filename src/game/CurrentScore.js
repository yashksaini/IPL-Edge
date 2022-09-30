import React, { useState, useContext, useEffect } from "react";
import { PlayerContext } from "../PlayerContex";
import styles from "../styles/currentScore.module.css";
import BatsmanCard from "../parts/BatsmanCard";
import BowlerCard from "../parts/BowlerCard";
import ScoreBar from "../parts/ScoreBar";
import ModelSelect from "../parts/ModelSelect";
import OversData from "../parts/OversData";
import Innings from "./Innings";
import CurrentOver from "../parts/CurrentOver";
import { Link } from "react-router-dom";
import Commentry from "./Commentry";

const CurrentScore = (props) => {
  const { changeType } = props;
  const { players } = useContext(PlayerContext);
  const MatchData = JSON.parse(localStorage.getItem("MatchData"));
  const TeamNames = [
    "CSK",
    "DC",
    "GT",
    "KKR",
    "LSG",
    "MI",
    "PBKS",
    "RCB",
    "RR",
    "SRH",
  ];
  const BatArray = [
    [6, 4, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4, 6, 2],
    [6, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4, 6, 2],
    [1, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 6, 2],
    [1, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 6, 2],
    [1, 4, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 4, 4, 4, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4, 4, 4, "W", 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 4, 4, "W", "W", 0],
  ];
  const BowlArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 4, 4, 6, "W", "W", "W"],
    [4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 4, 4, 6, "W", "W", "W"],
    [4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 6, "W", "W"],
    [6, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 2, 2, 4, 4, 6, "W", "W"],
    [6, 0, 0, 0, 0, 1, 0, 2, 1, 1, 1, 1, 2, 2, 2, 4, 4, 6, "W", "W"],
    [6, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 2, 2, 4, 4, 4, 6, "W"],
    [6, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 6, "W"],
    [6, 0, 0, 0, 0, 0, 1, 4, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 6, "W"],
    [6, 0, 0, 4, 2, 2, 1, 6, 1, 1, 6, 6, 6, 2, 2, 4, 4, 4, 6, "W"],
  ];
  const BatPowers = [95, 90, 85, 80, 75, 70, 65, 60, 40, 30];
  const BowlPowers = [95, 90, 85, 80, 75, 70, 65, 60, 40];

  const PreData = {
    team1: 1,
    team2: 1,
    overs: 20,
    players1: [],
    players2: [],
    tossWon: 0,
    choose: 1,
  };
  const { team1, team2, players1, players2, tossWon, choose, overs } =
    MatchData || PreData;
  const [batName, setBatName] = useState(team1);
  const [bowlName, setBowlName] = useState(team2);
  const [inningsNo, setInningsNo] = useState(1);
  const [batTeamStats, setBatTeamStats] = useState([]);
  const [bowlTeamStats, setBowlTeamStats] = useState([]);
  const [team1Player, setTeam1Players] = useState(players1);
  const [team2Player, setTeam2Players] = useState(players2);
  const firstPart = [
    4, 4, 4, 1, 1, 6, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2,
  ];
  const secondPart = [
    4, 4, 0, 0, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3,
  ];
  const thirdPart = [
    4, 6, 1, 2, 6, 0, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 2, 3, 1, 1,
  ];
  const [gameArray, setGameArray] = useState(firstPart);
  const [countBalls, setCountBalls] = useState(0);
  const commentry = [
    [
      "0 Run, missed the bowl.",
      "0 Run, hit's the ball but fielder there.",
      "0 Run, strike the ball and it goes straight to the fielder and no run.",
      "0 Run, tries to clear the field but unsuccessful and no run.",
      "0 Run, tries to hit nearly wide ball but missed and no run.",
      "0 Run, missed the ball and the ball hit the pads and was not given out.",
    ],
    [
      "1 Run, pushed the ball to third man for single.",
      "1 Run, pushed the ball to mid-on for single.",
      "1 Run, pushed the ball to mid-off for single.",
      "1 Run, pushed the ball to deep fine-leg for single.",
      "1 Run, pushed the ball to mid-wicket for single.",
      "1 Run, pushed the ball to square-leg for single.",
      "1 Run, played the ball towards deep-mid-wicket for a single.",
      "1 Run, played the ball towards deep cover for a single.",
      "1 Run, played the ball towards long On for a single.",
      "1 Run, played the ball towards deep-square-leg for a single.",
    ],
    [
      "2 Runs, pushed the ball to third man for double.",
      "2 Runs, pushed the ball to mid-on for quick double.",
      "2 Runs, pushed the ball to mid-off for quick double.",
      "2 Runs, pushed the ball to deep fine-leg for quick double.",
      "2 Runs, pushed the ball to mid-wicket for quick double.",
      "2 Runs, pushed the ball to square-leg for quick double.",
      "2 Runs, played the ball towards deep-mid-wicket for double.",
      "2 Runs, played the ball towards deep cover for double.",
      "2 Runs, played the ball towards long On for double.",
      "2 Runs, played the ball towards deep-square-leg for double.",
    ],
    [
      "3 Runs, played the ball towards deep-mid-wicket for 3 runs, lazy fielding in deep.",
      "3 Runs, played the ball towards deep cover for 3 runs, lazy fielding in deep.",
      "3 Runs, played the ball towards long On for 3 runs, lazy fielding in deep.",
      "3 Runs, played the ball towards deep-square-leg for 3 runs, lazy fielding in deep.",
      "3 Runs, smashed the ball towards deep-square-leg good fielding in deep, saved runs for the team.",
    ],
    [
      "FOUR! 4 Runs, smashed the ball towards third man for boundary.",
      "FOUR! 4 Runs, smashed the ball towards mid-on for boundary.",
      "FOUR! 4 Runs, smashed the ball towards mid-off for boundary.",
      "FOUR! 4 Runs, smashed the ball towards deep fine-leg for boundary.",
      "FOUR! 4 Runs, smashed the ball towards mid-wicket for boundary.",
      "FOUR! 4 Runs, smashed the ball towards square-leg for boundary.",
      "FOUR! 4 Runs, smashed the ball towards deep-mid-wicket for boundary.",
      "FOUR! 4 Runs, smashed the ball towards deep cover for boundary.",
      "FOUR! 4 Runs, smashed the ball towards long On for boundary.",
      "FOUR! 4 Runs, smashed the ball towards deep-square-leg for boundary.",
      "FOUR! 4 Runs, straight drive for four.",
      "FOUR! 4 Runs, straight drive for four.",
      "FOUR! 4 Runs, straight drive for four.",
      "FOUR! 4 Runs, straight drive for four.",
      "FOUR! 4 Runs, straight drive for four.",
      "FOUR! 4 Runs, sweeped the ball away for four.",
      "FOUR! 4 Runs, sweeped the ball away for four.",
      "FOUR! 4 Runs, sweeped the ball away for four.",
      "FOUR! 4 Runs, sweeped the ball away for four.",
      "FOUR! 4 Runs, strikes the wide line ball for four.",
      "FOUR! 4 Runs, strikes the wide line ball for four.",
      "FOUR! 4 Runs, strikes the wide line ball for four.",
      "FOUR! 4 Runs, strikes the wide line ball for four.",
    ],
    [
      "SIX!! 6 Runs, smashed over the third man for SIX.",
      "SIX!! 6 Runs, smashed over the mid-on for SIX.",
      "SIX!! 6 Runs, smashed over the mid-off for SIX.",
      "SIX!! 6 Runs, smashed over the deep fine-leg for SIX.",
      "SIX!! 6 Runs, smashed over the mid-wicket for SIX.",
      "SIX!! 6 Runs, smashed over the square-leg for SIX.",
      "SIX!! 6 Runs, smashed over the deep-mid-wicket for SIX.",
      "SIX!! 6 Runs, smashed over the deep cover for SIX.",
      "SIX!! 6 Runs, smashed over the long On for SIX.",
      "SIX!! 6 Runs, smashed over deep-square-leg for SIX.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, pulled away for six.",
      "SIX!! 6 Runs, just timed over the third man for SIX.",
      "SIX!! 6 Runs, just timed over the mid-on for SIX.",
      "SIX!! 6 Runs, just timed over the mid-off for SIX.",
      "SIX!! 6 Runs, just timed over the deep fine-leg for SIX.",
      "SIX!! 6 Runs, just timed over the mid-wicket for SIX.",
      "SIX!! 6 Runs, just timed over the square-leg for SIX.",
      "SIX!! 6 Runs, just timed over the deep-mid-wicket for SIX.",
      "SIX!! 6 Runs, just timed over the deep cover for SIX.",
      "SIX!! 6 Runs, just timed over the long On for SIX.",
      "SIX!! 6 Runs, just timed over deep-square-leg for SIX.",
      "SIX!! 6 Runs, strikes the wide line ball for a huge straight six.",
      "SIX!! 6 Runs, strikes the wide line ball for a huge straight six.",
      "SIX!! 6 Runs, strikes the wide line ball for a huge straight six.",
      "SIX!! 6 Runs, strikes the wide line ball for a huge straight six.",
    ],
    [
      "OUT!! Wicket, is clean bowled.",
      "OUT!! Wicket, is clean bowled.",
      "OUT!! Wicket, is caught and bowled",
      "OUT!! Wicket, is edged and taken.",
      "OUT!! Wicket, is edged and taken.",
      "OUT!! Wicket, is edged and taken.",
      "OUT!! Wicket, is edged and taken.",
      "OUT!! Wicket, is edged and taken.",
      "OUT!! Wicket, miss hit the ball up in the air and taken",
      "OUT!! Wicket, miss hit the ball up in the air and taken",
      "OUT!! Wicket, miss hit the ball up in the air and taken",
      "OUT!! Wicket, miss hit the ball up in the air and taken",
      "OUT!! Wicket, has inside edge and bowled",
      "OUT!! Wicket, has inside edge and bowled",
      "OUT!! Wicket, has inside edge and bowled",
      "OUT!! Wicket, has inside edge and bowled",
      "OUT!! Wicket, has inside edge and bowled",
      "OUT!! Wicket, missed the ball and bowler appeal for LBW and its given out.",
      "OUT!! Wicket, missed the ball and bowler appeal for LBW and its given out.",
      "OUT!! Wicket, missed the ball and bowler appeal for LBW and its given out.",
      "OUT!! Wicket, missed the ball and bowler appeal for LBW and its given out.",
      "OUT!! Wicket, missed the ball and bowler appeal for LBW and its given out.",
      "OUT!! Wicket, is in front of three stumps, clear LBW",
      "OUT!! Wicket, is in front of three stumps, clear LBW",
      "OUT!! Wicket, is in front of three stumps, clear LBW",
      "OUT!! Wicket, is clear LBW totally missed the line",
      "OUT!! Wicket, is clear LBW totally missed the line",
      "OUT!! Wicket, is clear LBW totally missed the line",
      "OUT!! Wicket, was caught on slip",
      "OUT!! Wicket, was caught on slip",
      "OUT!! Wicket, was caught on slip",
      "OUT!! Wicket, was caught on slip",
    ],
  ];
  const overRuns = [0, 1, 2, 3, 4, 6, "W"];

  const initials = () => {
    let team1Players = team1Player;
    let team2Players = team2Player;
    if (
      (tossWon === team1 && choose === 2) ||
      (tossWon === team2 && choose === 1)
    ) {
      setBowlName(team1);
      setBatName(team2);
      team1Players = players2;
      team2Players = players1;
      setTeam1Players(players2);
      setTeam2Players(players1);
    }
    let arr = [];
    let arr1 = [];
    for (let i = 0; i < players1.length; i++) {
      let BatTeamData = {
        name: players[
          players.map((object) => object.id).indexOf(team1Players[i])
        ].name,
        player_id:
          players[players.map((object) => object.id).indexOf(team1Players[i])]
            .id,
        bat_power:
          players[players.map((object) => object.id).indexOf(team1Players[i])]
            .bat,
        bowl_power:
          players[players.map((object) => object.id).indexOf(team1Players[i])]
            .bowl,
        type: players[
          players.map((object) => object.id).indexOf(team1Players[i])
        ].type,
        bat_4: 0,
        bat_6: 0,
        bat_run: 0,
        bat_ball: 0,
        bat_sr: 0,
        bowl_run: 0,
        bowl_ball: 0,
        bowl_w: 0,
        bowl_eco: 0,
        status: 0,
        outBy: "",
        out: false,
      };
      let BowlTeamData = {
        name: players[
          players.map((object) => object.id).indexOf(team2Players[i])
        ].name,
        player_id:
          players[players.map((object) => object.id).indexOf(team2Players[i])]
            .id,
        bat_power:
          players[players.map((object) => object.id).indexOf(team2Players[i])]
            .bat,
        bowl_power:
          players[players.map((object) => object.id).indexOf(team2Players[i])]
            .bowl,
        type: players[
          players.map((object) => object.id).indexOf(team2Players[i])
        ].type,
        bat_4: 0,
        bat_6: 0,
        bat_run: 0,
        bat_ball: 0,
        bat_sr: 0,
        bowl_run: 0,
        bowl_ball: 0,
        bowl_w: 0,
        bowl_eco: 0,
        status: 0,
        outBy: "",
        out: false,
      };
      arr.push(BatTeamData);
      arr1.push(BowlTeamData);
    }
    setBatTeamStats(arr);
    setBowlTeamStats(arr1);
  };
  // Game Variables
  const [strike, setStrike] = useState(true);
  const [bat1, setBat1] = useState(0);
  const [bat2, setBat2] = useState(0);
  const [bowler, setBowler] = useState(0);
  const [modal, setModal] = useState(true);
  const [selectType, setSelectType] = useState(0);
  const [innOvers, setInnOvers] = useState([[]]);
  const [overNo, setOverNo] = useState(0);
  const [overBalls, setOverBalls] = useState(0);
  const [scoreModal, setScoreModal] = useState(false);
  const [modalInn, setModalInn] = useState(1);
  const [chaseTarget, setChaseTarget] = useState(0);
  const [ballLeft, setBallLeft] = useState(overs * 6);
  const [runLeft, setRunLeft] = useState(0);
  const [remBtn, setRemBtn] = useState(true);
  const [bat1Power, setBat1Power] = useState(30);
  const [bat2Power, setBat2Power] = useState(30);
  const [bowlPower, setBowlPower] = useState(60);
  const [currBatPower, setCurrBatPower] = useState(30);
  const [message, setMessage] = useState("");

  const [firstInnOvers, setFirstInnOvers] = useState([]);
  const [secondInnOvers, setSecondInnOvers] = useState([]);
  const [oversModal, setOversModal] = useState(false);
  const [firstBowlers, setFirstBowlers] = useState([]);
  const [secondBowlers, setSecondBowlers] = useState([]);

  const [firstComments, setFirstComments] = useState([]);
  const [secondComments, setSecondComments] = useState([]);
  const [commentsModal, setCommentsModal] = useState(false);
  const [currentCommentry, setCurrentCommentry] = useState("");

  const closeCommentsModal = () => {
    setCommentsModal(false);
  };

  const fixPlayer = (a) => {
    if (inningsNo === 1) {
      let arr = batTeamStats;
      let arr1 = bowlTeamStats;
      if (selectType === 0) {
        setBat1(a);
        arr[a].status = 1;
        setBat1Power(arr[a].bat_power);
        setBatTeamStats(arr);
        setSelectType(1);
      } else if (selectType === 1) {
        setBat2(a);
        arr[a].status = 1;
        setBat2Power(arr[a].bat_power);
        setBatTeamStats(arr);
        setSelectType(3);
      } else if (selectType === 3) {
        setBowler(a);
        setBowlPower(arr1[a].bowl_power);
        setModal(false);
        let temp = firstBowlers;
        temp.push(arr1[a].name);
        setFirstBowlers(temp);
      } else if (selectType === 2) {
        if (strike) {
          setBat1(a);
          setBat1Power(arr[a].bat_power);
        } else {
          setBat2(a);
          setBat2Power(arr[a].bat_power);
        }
        arr[a].status = 1;
        setBatTeamStats(arr);
        setModal(false);
        if (overBalls === 6) {
          changeStrike(1, 1);
          setSelectType(3);
          setModal(true);
        }
      }
    } else {
      let arr1 = batTeamStats;
      let arr = bowlTeamStats;
      if (selectType === 0) {
        setBat1(a);
        arr[a].status = 1;
        setBat1Power(arr[a].bat_power);
        setBowlTeamStats(arr);
        setSelectType(1);
      } else if (selectType === 1) {
        setBat2(a);
        arr[a].status = 1;
        setBat2Power(arr[a].bat_power);
        setBowlTeamStats(arr);
        setSelectType(3);
      } else if (selectType === 3) {
        setBowler(a);
        setModal(false);
        setBowlPower(arr1[a].bowl_power);
        let temp = secondBowlers;
        temp.push(arr1[a].name);
        setSecondBowlers(temp);
      } else if (selectType === 2) {
        if (strike) {
          setBat1(a);
          setBat1Power(arr[a].bat_power);
        } else {
          setBat2(a);
          setBat2Power(arr[a].bat_power);
        }
        arr[a].status = 1;
        setBowlTeamStats(arr);
        setModal(false);
        if (overBalls === 6) {
          changeStrike(1, 1);
          setSelectType(3);
          setModal(true);
        }
      }
    }
  };
  const gameOn = () => {
    let runs = [...gameArray];
    let gameBalls = countBalls;
    gameBalls++;
    // console.log(gameBalls);
    setCountBalls(gameBalls);
    if (0 < gameBalls && gameBalls < 36) {
      // console.log("1-6 Overs");
      setGameArray(firstPart);
    } else if (36 < gameBalls && gameBalls < 90) {
      setGameArray(secondPart);
      // console.log("7-15 Overs");
    } else if (90 < gameBalls && gameBalls < 120) {
      // console.log("16-20 Overs");
      setGameArray(thirdPart);
    }
    const bowlIndex = BowlPowers.indexOf(bowlPower);
    const batIndex = BatPowers.indexOf(currBatPower);
    let xo = runs.concat(
      BatArray[batIndex],
      BatArray[batIndex],
      BowlArray[bowlIndex],
      BowlArray[bowlIndex]
    );
    runs = [...xo];
    let arr1 = innOvers;
    let a = overBalls;
    let x = overNo;
    a++;
    setOverBalls(a);
    if (a === 7) {
      x++;
      setOverNo(x);
      setOverBalls(1);
      arr1.push([]);
      setInnOvers(arr1);
    }
    if (a === 6 && x === overs - 1) {
      arr1.push([]);
      setInnOvers(arr1);
    }
    let run = runs[Math.floor(Math.random() * runs.length)];
    arr1[x].push(run);
    createCommentry(run);
    changeBatStatus(run);
    changeBowlStatus(run);
    if (run === "W") {
      setSelectType(2);
      setModal(true);
    } else {
      if (a === 6) {
        setModal(true);
        setSelectType(3);
      }
      changeStrike(run, a);
    }
    if (inningsNo === 1) {
      setFirstInnOvers(arr1);
    }
    if (inningsNo === 2) {
      setSecondInnOvers(arr1);
      let countWick = 0;
      let runs = 0;
      let ball_count = 0;
      for (let i = 0; i < bowlTeamStats.length; i++) {
        if (bowlTeamStats[i].out === true) {
          countWick++;
        }
        runs += bowlTeamStats[i].bat_run;
        ball_count += bowlTeamStats[i].bat_ball;
      }
      if (overs * 6 - ball_count > 0) {
        setBallLeft(overs * 6 - ball_count);
        setRunLeft(chaseTarget - runs + 1);
        if (countWick === 10) {
          setModal(false);
          setRemBtn(false);
          setMessage(`${TeamNames[batName]} won by ${chaseTarget - runs} runs`);
        }
      } else {
        setModal(false);
        setRemBtn(false);
        if (runs < chaseTarget) {
          setMessage(`${TeamNames[batName]} won by ${chaseTarget - runs} runs`);
        }
        if (runs === chaseTarget) {
          setMessage("Match Tied");
        }
        setRunLeft(0);
      }
      if (runs > chaseTarget) {
        setBallLeft(0);
        setRunLeft(0);
        setRemBtn(false);
        setModal(false);
        setMessage(`${TeamNames[bowlName]} won by ${10 - countWick} Wickets`);
      }
    }
    checkSwitchInns();
  };
  const createCommentry = (run) => {
    let runIndex = overRuns.indexOf(run);
    let commentNo = commentry[runIndex];
    let comments = commentNo[Math.floor(Math.random() * commentNo.length)];
    if (inningsNo === 1) {
      let batStrike = bat1;
      if (strike === false) {
        batStrike = bat2;
      }
      let countBall = 0;
      for (let i = 0; i < batTeamStats.length; i++) {
        countBall += batTeamStats[i].bat_ball;
      }
      let data = {
        batsman: batTeamStats[batStrike].name,
        bowler: bowlTeamStats[bowler].name,
        run: run,
        comments: comments,
        ballNo: countBall,
      };
      setCurrentCommentry(data.batsman + ", " + data.comments.split(",")[1]);
      let arr = firstComments;
      arr.push(data);
      setFirstComments(arr);
    } else {
      let batStrike = bat1;
      if (strike === false) {
        batStrike = bat2;
      }
      let countBall = 0;
      for (let i = 0; i < bowlTeamStats.length; i++) {
        countBall += bowlTeamStats[i].bat_ball;
      }
      let data = {
        batsman: bowlTeamStats[batStrike].name,
        bowler: batTeamStats[bowler].name,
        run: run,
        comments: comments,
        ballNo: countBall,
      };
      setCurrentCommentry(data.batsman + ", " + data.comments.split(",")[1]);
      let arr = secondComments;
      arr.push(data);
      setSecondComments(arr);
    }
  };
  const checkSwitchInns = () => {
    if (inningsNo === 1) {
      let countWick = 0;
      let runs = 0;
      for (let i = 0; i < batTeamStats.length; i++) {
        if (batTeamStats[i].out === true) {
          countWick++;
        }
        runs += batTeamStats[i].bat_run;
      }
      setChaseTarget(runs);
      if (countWick === 10 || innOvers.length === overs + 1) {
        setInningsNo(2);
        setStrike(true);
        setSelectType(0);
        setModal(true);
        setInnOvers([[]]);
        setOverBalls(0);
        setOverNo(0);
        setRunLeft(runs + 1);
        setCountBalls(0);
        setGameArray(firstPart);
      }
    }
  };
  const changeBatStatus = (a) => {
    if (inningsNo === 1) {
      if (strike) {
        let arr = batTeamStats;
        if (a === "W") {
          arr[bat1].status = 2;
          arr[bat1].out = true;
          arr[bat1].outBy = bowlTeamStats[bowler].name;
        } else if (a === 4) {
          arr[bat1].bat_4 += 1;
          arr[bat1].bat_run += a;
        } else if (a === 6) {
          arr[bat1].bat_6 += 1;
          arr[bat1].bat_run += a;
        } else {
          arr[bat1].bat_run += a;
        }
        arr[bat1].bat_ball += 1;
        let p = (arr[bat1].bat_run * 100) / arr[bat1].bat_ball;
        arr[bat1].bat_sr = p.toFixed(2);
        setBatTeamStats(arr);
      } else {
        let arr = batTeamStats;
        if (a === "W") {
          arr[bat2].status = 2;
          arr[bat2].out = true;
          arr[bat2].outBy = bowlTeamStats[bowler].name;
        } else if (a === 4) {
          arr[bat2].bat_4 += 1;
          arr[bat2].bat_run += a;
        } else if (a === 6) {
          arr[bat2].bat_6 += 1;
          arr[bat2].bat_run += a;
        } else {
          arr[bat2].bat_run += a;
        }
        arr[bat2].bat_ball += 1;
        let p = (arr[bat2].bat_run * 100) / arr[bat2].bat_ball;
        arr[bat2].bat_sr = p.toFixed(2);
        setBatTeamStats(arr);
      }
    } else {
      if (strike) {
        let arr = bowlTeamStats;
        if (a === "W") {
          arr[bat1].status = 2;
          arr[bat1].out = true;
          arr[bat1].outBy = batTeamStats[bowler].name;
        } else if (a === 4) {
          arr[bat1].bat_4 += 1;
          arr[bat1].bat_run += a;
        } else if (a === 6) {
          arr[bat1].bat_6 += 1;
          arr[bat1].bat_run += a;
        } else {
          arr[bat1].bat_run += a;
        }
        arr[bat1].bat_ball += 1;
        let p = (arr[bat1].bat_run * 100) / arr[bat1].bat_ball;
        arr[bat1].bat_sr = p.toFixed(2);
        setBowlTeamStats(arr);
      } else {
        let arr = bowlTeamStats;
        if (a === "W") {
          arr[bat2].status = 2;
          arr[bat2].out = true;
          arr[bat2].outBy = batTeamStats[bowler].name;
        } else if (a === 4) {
          arr[bat2].bat_4 += 1;
          arr[bat2].bat_run += a;
        } else if (a === 6) {
          arr[bat2].bat_6 += 1;
          arr[bat2].bat_run += a;
        } else {
          arr[bat2].bat_run += a;
        }
        arr[bat2].bat_ball += 1;
        let p = (arr[bat2].bat_run * 100) / arr[bat2].bat_ball;
        arr[bat2].bat_sr = p.toFixed(2);
        setBowlTeamStats(arr);
      }
    }
  };
  const changeBowlStatus = (a) => {
    if (inningsNo === 1) {
      let arr = bowlTeamStats;
      if (a === "W") {
        arr[bowler].bowl_w += 1;
      } else {
        arr[bowler].bowl_run += a;
      }
      arr[bowler].bowl_ball += 1;
      let eco = (arr[bowler].bowl_run * 6) / arr[bowler].bowl_ball;
      arr[bowler].bowl_eco = eco.toFixed(2);
      setBowlTeamStats(arr);
    } else {
      let arr = batTeamStats;
      if (a === "W") {
        arr[bowler].bowl_w += 1;
      } else {
        arr[bowler].bowl_run += a;
      }
      arr[bowler].bowl_ball += 1;
      let eco = (arr[bowler].bowl_run * 6) / arr[bowler].bowl_ball;
      arr[bowler].bowl_eco = eco.toFixed(2);
      setBatTeamStats(arr);
    }
  };
  const changeStrike = (run, ballNo) => {
    let a = strike;
    if (run % 2 !== 0 && ballNo !== 6) {
      a = !a;
      setStrike(a);
    } else if (run % 2 === 0 && ballNo === 6) {
      a = !a;
      setStrike(a);
    }
    if (a) {
      setCurrBatPower(bat1Power);
    } else {
      setCurrBatPower(bat2Power);
    }
  };
  const closeScoreCard = () => {
    setScoreModal(false);
  };
  const closeOversModal = () => {
    setOversModal(false);
  };
  useEffect(() => {
    initials();
  }, []);

  return (
    <div>
      <ScoreBar
        team1={team1}
        team2={team2}
        inningsNo={inningsNo}
        batName={batName}
        bowlName={bowlName}
        batTeamStats={batTeamStats}
        bowlTeamStats={bowlTeamStats}
        tossWon={tossWon}
        choose={choose}
        overs={overs}
        chaseTarget={chaseTarget}
      />
      <div
        className={inningsNo === 2 ? `${styles.needruns}` : `${styles.hide}`}
      >
        <div className={runLeft > 0 ? null : `${styles.hide}`}>
          RR : {((runLeft * 6) / ballLeft).toFixed(2)}
        </div>

        <div className={runLeft > 0 ? null : `${styles.hide}`}>
          <span>{runLeft}</span> NEED <span>{ballLeft}</span> BALLS
        </div>
        <div className={runLeft > 0 ? `${styles.hide}` : null}>{message}</div>
        <div>Target - {chaseTarget + 1}</div>
      </div>

      <BatsmanCard
        batTeamStats={batTeamStats}
        bowlTeamStats={bowlTeamStats}
        bat1={bat1}
        bat2={bat2}
        strike={strike}
        inningsNo={inningsNo}
      />
      <BowlerCard
        batTeamStats={batTeamStats}
        bowlTeamStats={bowlTeamStats}
        bowler={bowler}
        strike={strike}
        inningsNo={inningsNo}
      />
      <ModelSelect
        batTeamStats={batTeamStats}
        bowlTeamStats={bowlTeamStats}
        inningsNo={inningsNo}
        fixPlayer={fixPlayer}
        overs={overs}
        modal={modal}
        selectType={selectType}
        batName={batName}
        bowlName={bowlName}
      />

      <div className={remBtn ? `${styles.gameBtn}` : `${styles.hide}`}>
        <div>{currentCommentry}</div>
        <button onClick={gameOn}>HIT</button>
      </div>
      <CurrentOver innOvers={innOvers} overNo={overNo} />
      <div className={remBtn ? `${styles.hide}` : `${styles.gameBtn}`}>
        {/* <Link
          to="/game"
          onClick={() => {
            changeType(false);
          }}
        >
          <i className="fas fa-redo"></i>
        </Link> */}
        <Link
          to="/"
          onClick={() => {
            changeType(true);
          }}
        >
          <i className="fas fa-play"></i>
        </Link>
      </div>
      <div className={styles.stats}>
        <button
          className={styles.innOvers}
          onClick={() => {
            setOversModal(true);
          }}
        >
          <i className="fas fa-spinner"></i>
        </button>

        <button
          className={styles.innCommentry}
          onClick={() => {
            setCommentsModal(true);
          }}
        >
          <i className="far fa-comment-dots"></i>
        </button>
        <button
          className={styles.first}
          onClick={() => {
            setModalInn(1);
            setScoreModal(true);
          }}
        >
          1<sup>st</sup>
        </button>
        <button
          className={styles.second}
          onClick={() => {
            setModalInn(2);
            setScoreModal(true);
          }}
        >
          2<sup>nd</sup>
        </button>
        <button className={styles.threeDots}>
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
      <Innings
        modal={scoreModal}
        inn={modalInn}
        batTeamStats={batTeamStats}
        bowlTeamStats={bowlTeamStats}
        closeScoreCard={closeScoreCard}
        overs={overs}
        batName={batName}
        bowlName={bowlName}
      />
      <OversData
        modal={oversModal}
        firstInnOvers={firstInnOvers}
        secondInnOvers={secondInnOvers}
        firstBowlers={firstBowlers}
        secondBowlers={secondBowlers}
        closeOversModal={closeOversModal}
      />
      <Commentry
        modal={commentsModal}
        closeCommentsModal={closeCommentsModal}
        firstComments={firstComments}
        secondComments={secondComments}
      />
      {/* <ResultModal /> */}
    </div>
  );
};

export default CurrentScore;
