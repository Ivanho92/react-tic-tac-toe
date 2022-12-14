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

  const renderSquares = (rows = 3, columns = 3) => {
    const squaresToRender = [];

    // Looping through rows (A,B,C,...)
    for (let i = 0; i < rows; i++) {
      const rowID = (i + 10).toString(36).toUpperCase();

      // Looping through columns (1,2,3,...)
      const squaresInRow = [];
      for (let j = 0; j < columns; j++) {
        const columnID = j + 1;
        const squareID = rowID + columnID;
        squaresInRow.push(
          <Square
            key={squareID}
            id={squareID}
            value={squares[squareID]}
            onClick={squareClickHandler}
          />,
        );
      }

      const rowToRender = (
        <div
          key={`row-${rowID}`}
          id={`row-${rowID}`}
          className={styles.row}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, minmax(50px, 1fr))`,
          }}>
          {squaresInRow}
        </div>
      );
      squaresToRender.push(rowToRender);
    }

    return squaresToRender;
  };

  return (
    <Stack>
      <div>
        <p className={styles.info} id="game-status">
          {renderedGameStatus}
        </p>
        <div className={styles.board}>{renderSquares()}</div>
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
