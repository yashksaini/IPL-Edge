import React, { useState } from "react";
import Select from "./components/Select";
import TeamContextProvider from "./TeamContext";
import styles from "./home.module.css";
import Overs from "./components/Overs";
import Toss from "./components/Toss";
import PlayerSelect from "./components/PlayerSelect";

const Home = (props) => {
  const { game, changePage } = props;
  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(1);
  const [overs, setOvers] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [tossWonBy, setTossWonBy] = useState(0);
  const [tossSelect, setTossSelect] = useState(1);
  const selectTeams = (a, b) => {
    setTeam1(a);
    setTeam2(b);
    setCurrentPage(2);
  };
  const selectOvers = (a) => {
    setOvers(a);
    setCurrentPage(3);
  };
  const finalTeams = (a, b) => {
    setTeam1Players(a);
    setTeam2Players(b);
    setCurrentPage(4);
  };
  const setToss = (a, b) => {
    setTossWonBy(a);
    setTossSelect(b);
    const data = {
      team1: team1,
      team2: team2,
      overs: overs,
      players1: team1Players,
      players2: team2Players,
      tossWon: a,
      choose: b,
    };
    localStorage.setItem("MatchData", JSON.stringify(data));
  };
  return (
    <div className={game === 0 ? null : `${styles.hide}`}>
      <TeamContextProvider>
        <Select selectTeams={selectTeams} currentPage={currentPage} />
        <Overs
          selectOvers={selectOvers}
          currentPage={currentPage}
          team1={team1}
          team2={team2}
        />
        <PlayerSelect
          team1={team1}
          team2={team2}
          currentPage={currentPage}
          overs={overs}
          finalTeams={finalTeams}
        />
        <Toss
          team1={team1}
          team2={team2}
          currentPage={currentPage}
          setToss={setToss}
          changePage={changePage}
        />
      </TeamContextProvider>
    </div>
  );
};

export default Home;
