import React from "react";

import styles from "./home.module.css";
import TeamContextProvider from "./TeamContext";
import CurrentScore from "./game/CurrentScore";
const Game = (props) => {
  const { game, changeType } = props;

  return (
    <div className={game === 1 ? null : `${styles.hide}`}>
      <TeamContextProvider>
        <CurrentScore changeType={changeType} />
      </TeamContextProvider>
    </div>
  );
};

export default Game;
