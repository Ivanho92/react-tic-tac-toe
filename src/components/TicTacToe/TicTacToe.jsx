import React from "react";

import Square from "../Square/Square";

import Stack from "../utils/Stack/Stack";

import styles from "./TicTacToe.module.scss";

const SQUARES = {
  X: "X",
  Y: "Y",
};

const TicTacToe = () => {
  return (
    <Stack gap="sm">
      <p className={styles.info}>
        Next player: <span className={styles.nextPlayer}>X</span>
      </p>
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
    </Stack>
  );
};

export default TicTacToe;
