import { useState } from "react";
import Square from "./Square";

/**
 *
 * @param {} xIsNext: a boolean dictating whether X or O is next
 * @param onPlay: an onPlay function
 * @returns
 */
function Board({ xIsNext, squares, onPlay }) {
  // keep track of who is winning
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  /**
   * Handles what happens when you click on a square.
   * Note that we passed it down as a prop
   */
  function handleClick(i) {
    // if a square already has a value (ie, not null), don't change it!
    // also,
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    // get a shallow copy of the squares state variable
    const nextSquares = squares.slice();

    // choosing whether to set the square as X or O
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // Board will update Game whenever user clicks a square by passing updated squares  
    onPlay(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

/**
 * Determines if we have a winner
 * @param {Array} squares the array that represents all squares of the board
 * @returns
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Board;
