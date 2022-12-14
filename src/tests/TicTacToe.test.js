import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TicTacToe from "../components/TicTacToe/TicTacToe";

describe("TicTacToe component", () => {
  const setup = () => {
    const { container } = render(<TicTacToe />);

    const squareA1 = container.querySelector("#A1");
    const squareA2 = container.querySelector("#A2");
    const squareA3 = container.querySelector("#A3");
    const squareB1 = container.querySelector("#B1");
    const squareB2 = container.querySelector("#B2");
    const squareB3 = container.querySelector("#B3");
    const squareC1 = container.querySelector("#C1");
    const squareC2 = container.querySelector("#C2");
    const squareC3 = container.querySelector("#C3");

    return {
      container,
      squareA1,
      squareA2,
      squareA3,
      squareB1,
      squareB2,
      squareB3,
      squareC1,
      squareC2,
      squareC3,
    };
  };

  test("When game starts, first player should be X", () => {
    // Arrange
    const { container } = setup();

    // Assert
    const gameStatus = container.querySelector("#game-status");
    expect(gameStatus.textContent).toBe("Next player: X");
  });

  test("When X plays, should draw a X square on game board", () => {
    // Arrange
    const { squareA1 } = setup();

    // Act
    userEvent.click(squareA1);

    // Assert
    expect(squareA1.textContent).toBe("X");
  });

  test("When X plays, next player should be O", () => {
    // Arrange
    const { squareA1, container } = setup();

    // Act
    userEvent.click(squareA1);

    // Assert
    const gameStatus = container.querySelector("#game-status");
    expect(gameStatus.textContent).toBe("Next player: O");
  });

  test("When O plays, should draw a O square on game board", () => {
    // Arrange
    const { squareA1, squareA2 } = setup();

    // Act
    userEvent.click(squareA1); // X
    userEvent.click(squareA2); // O

    // Assert
    expect(squareA2.textContent).toBe("O");
  });

  test("When O plays, next player should be X", () => {
    // Arrange
    const { squareA1, squareA2, container } = setup();

    // Act
    userEvent.click(squareA1); // X
    userEvent.click(squareA2); // O

    // Assert
    const gameStatus = container.querySelector("#game-status");
    expect(gameStatus.textContent).toBe("Next player: X");
  });

  test('When victory by player X (middle game), game status should switch to "X wins!"', () => {
    // Arrange
    const { squareB1, squareB2, squareC1, squareC2, squareA1 } = setup();

    // Act
    userEvent.click(squareB1); // X
    userEvent.click(squareB2); // O
    userEvent.click(squareC1); // X
    userEvent.click(squareC2); // O
    userEvent.click(squareA1); // X wins!

    // Assert
    const gameStatus = screen.getByText("X wins!");
    expect(gameStatus).toBeInTheDocument();
  });

  test('When victory by player O (middle game), game status should switch to "O wins!"', () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareA2); // O
    userEvent.click(s.squareA3); // X
    userEvent.click(s.squareB2); // O
    userEvent.click(s.squareB1); // X
    userEvent.click(s.squareC1); // O
    userEvent.click(s.squareB3); // X
    userEvent.click(s.squareC2); // O wins!

    // Assert
    const gameStatus = screen.getByText("O wins!");
    expect(gameStatus).toBeInTheDocument();
  });

  test('When victory by player X (end game), game status should switch to "X wins!"', () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareA2); // O
    userEvent.click(s.squareA3); // X
    userEvent.click(s.squareB3); // O
    userEvent.click(s.squareC3); // X
    userEvent.click(s.squareC2); // O
    userEvent.click(s.squareC1); // X
    userEvent.click(s.squareB1); // O
    userEvent.click(s.squareB2); // X wins!

    // Assert
    const gameStatus = screen.getByText("X wins!");
    expect(gameStatus).toBeInTheDocument();
  });

  test('When draw (end game), game status should switch to "It\'s a draw!"', () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareA2); // O
    userEvent.click(s.squareA3); // X
    userEvent.click(s.squareB3); // O
    userEvent.click(s.squareC3); // X
    userEvent.click(s.squareC1); // O
    userEvent.click(s.squareB1); // X
    userEvent.click(s.squareB2); // O
    userEvent.click(s.squareC2); // X It's a draw!

    // Assert
    const gameStatus = screen.getByText("It's a draw!");
    expect(gameStatus).toBeInTheDocument();
  });

  test('When reseting the game, game status should switch to "Next player: X"', () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareB1); // O
    userEvent.click(s.squareA2); // X
    userEvent.click(s.squareB2); // O
    userEvent.click(s.squareA3); // X wins!

    const resetBtn = screen.getByText("Start a new game");
    userEvent.click(resetBtn);

    // Assert
    const gameStatus = s.container.querySelector("#game-status");
    expect(gameStatus.textContent).toBe("Next player: X");
  });

  test("When reseting the game, all board squares should blank again", () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareB1); // O
    userEvent.click(s.squareA2); // X
    userEvent.click(s.squareB2); // O
    userEvent.click(s.squareA3); // X wins!

    const resetBtn = screen.getByText("Start a new game");
    userEvent.click(resetBtn);

    // Assert
    expect(s.squareA1.textContent).toBe("");
    expect(s.squareA2.textContent).toBe("");
    expect(s.squareA3.textContent).toBe("");
    expect(s.squareB1.textContent).toBe("");
    expect(s.squareB2.textContent).toBe("");
    expect(s.squareB3.textContent).toBe("");
    expect(s.squareC1.textContent).toBe("");
    expect(s.squareC2.textContent).toBe("");
    expect(s.squareC3.textContent).toBe("");
  });

  test("When game is over, players should not be able to draw new symbols on the game board", () => {
    // Arrange
    const s = setup();

    // Act
    userEvent.click(s.squareA1); // X
    userEvent.click(s.squareB1); // O
    userEvent.click(s.squareA2); // X
    userEvent.click(s.squareB2); // O
    userEvent.click(s.squareA3); // X wins!

    userEvent.click(s.squareC3); // Should not do anything

    // Assert
    expect(s.squareC3.textContent).toBe("");
  });
});
