import React from "react";

import Square from "../Square/Square";

import styles from "./TicTacToe.module.scss";

const SQUARES = {
  X: "X",
  Y: "Y",
};

const TicTacToe = () => {
  return (
    <div className={styles.board}>
      <div id="row-A" className={styles.row}>
        <Square value={SQUARES.X} />
        <Square value={SQUARES.Y} />
        <Square value={null} />
      </div>
      <div id="row-B" className={styles.row}>
        <Square value={SQUARES.X} />
        <Square value={SQUARES.Y} />
        <Square value={null} />
      </div>
      <div id="row-C" className={styles.row}>
        <Square value={SQUARES.X} />
        <Square value={SQUARES.Y} />
        <Square value={null} />
      </div>
    </div>
  );
};

export default TicTacToe;
