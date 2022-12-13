import React, { useEffect, useState } from "react";

import Square from "../Square/Square";

import Stack from "../layout/Stack/Stack";

import styles from "./TicTacToe.module.scss";

const SQUARES = {
  X: "X",
  O: "O",
};

const WINNING_COMBINATIONS = [
  // Horizontal wins
  ["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],

  // Vertical wins
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"],

  // Diagonal wins
  ["A1", "B2", "C3"],
  ["A3", "B2", "C1"],
];

const checkIfWinner = (squares) => {
  // Gather all plays of X and O
  const xSquares = [];
  const oSquares = [];
  for (const key of Object.keys(squares)) {
    if (squares[key]) {
      squares[key] === SQUARES.X ? xSquares.push(key) : oSquares.push(key);
    }
  }

  // Check if there is a match with one of the winning combinations
  for (const combination of WINNING_COMBINATIONS) {
    if (combination.every((field) => xSquares.includes(field))) {
      return SQUARES.X;
    }

    if (combination.every((field) => oSquares.includes(field))) {
      return SQUARES.O;
    }
  }

  return false;
};

const TicTacToe = () => {
  const [nextPlayer, setNextPlayer] = useState(SQUARES.X);
  const [squares, setSquares] = useState({
    A1: null,
    A2: null,
    A3: null,
    B1: SQUARES.X,
    B2: SQUARES.O,
    B3: null,
    C1: null,
    C2: null,
    C3: null,
  });
  const [winner, setWinner] = useState();

  const squareClickHandler = (id) => {
    if (squares[id] !== null) {
      return;
    }

    console.log(nextPlayer + " played on square " + id);
    setSquares((prevSquares) => ({ ...prevSquares, [id]: nextPlayer }));
  };

  useEffect(() => {
    const winner = checkIfWinner(squares);
    if (winner) {
      console.log(winner + " wins!");
      setWinner(winner);
      return;
    }

    setNextPlayer((prevPlayer) =>
      prevPlayer === SQUARES.X ? SQUARES.O : SQUARES.X,
    );
  }, [squares]);

  const renderedInfo =
    winner && winner !== "draw" ? (
      <span className={styles.highlight}>{winner} wins!</span>
    ) : (
      <span>
        Next player: <span className={styles.highlight}>{nextPlayer}</span>
      </span>
    );

  return (
    <Stack gap="sm">
      <p className={styles.info}>{renderedInfo}</p>
      <div className={styles.board}>
        <div id="row-A" className={styles.row}>
          <Square id="A1" value={squares.A1} onClick={squareClickHandler} />
          <Square id="A2" value={squares.A2} onClick={squareClickHandler} />
          <Square id="A3" value={squares.A3} onClick={squareClickHandler} />
        </div>
        <div id="row-B" className={styles.row}>
          <Square id="B1" value={squares.B1} onClick={squareClickHandler} />
          <Square id="B2" value={squares.B2} onClick={squareClickHandler} />
          <Square id="B3" value={squares.B3} onClick={squareClickHandler} />
        </div>
        <div id="row-C" className={styles.row}>
          <Square id="C1" value={squares.C1} onClick={squareClickHandler} />
          <Square id="C2" value={squares.C2} onClick={squareClickHandler} />
          <Square id="C3" value={squares.C3} onClick={squareClickHandler} />
        </div>
      </div>
    </Stack>
  );
};

export default TicTacToe;
