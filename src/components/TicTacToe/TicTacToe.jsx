import React, { useEffect, useState } from "react";
import Square from "../Square/Square";
import Button from "../ui/Button/Button";
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

const checkIfDraw = (squares) => {
  if (!Object.values(squares).includes(null)) {
    return "draw";
  }

  return null;
};

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

const defaultSquares = {
  A1: null,
  A2: null,
  A3: null,
  B1: null,
  B2: null,
  B3: null,
  C1: null,
  C2: null,
  C3: null,
};

const TicTacToe = () => {
  const [nextPlayer, setNextPlayer] = useState(SQUARES.X);
  const [squares, setSquares] = useState(defaultSquares);
  const [winner, setWinner] = useState(null);

  const squareClickHandler = (id) => {
    if (squares[id] !== null || winner !== null) {
      return;
    }

    setSquares((prevSquares) => ({ ...prevSquares, [id]: nextPlayer }));
    setNextPlayer((prevPlayer) =>
      prevPlayer === SQUARES.X ? SQUARES.O : SQUARES.X,
    );
  };

  const resetGameHandler = () => {
    setSquares(defaultSquares);
    setWinner(null);
    setNextPlayer(SQUARES.X);
  };

  useEffect(() => {
    // Check win conditions when game board is updated
    const winner = checkIfWinner(squares);
    if (winner) {
      setWinner(winner);
      return;
    }

    const draw = checkIfDraw(squares);
    if (draw) {
      setWinner(draw);
      return;
    }
  }, [squares]);

  let renderedGameStatus = (
    <span>
      Next player: <span className={styles.highlight}>{nextPlayer}</span>
    </span>
  );

  if (winner) {
    winner === "draw"
      ? (renderedGameStatus = <span className={styles.highlight}>It's a draw!</span>)
      : (renderedGameStatus = (
          <span className={styles.highlight}>{winner} wins!</span>
        ));
  }

  return (
    <Stack>
      <div>
        <p className={styles.info}>{renderedGameStatus}</p>
        <div className={styles.board}>
          {/* TODO: loop? */}
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
      </div>
      {winner && (
        <p className={styles.newGame}>
          <Button
            focusOnRender={true}
            label="Start a new game"
            onClick={resetGameHandler}
          />
        </p>
      )}
    </Stack>
  );
};

export default TicTacToe;
