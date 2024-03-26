import { useState } from "react";
import Board from "./Board";

function Game() {
  // tracks which player is next and the history of the moves
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // like step #, or move #. Let's us go back in history
  const [currentMove, setCurrentMove] = useState(0);
  // to render the squares for the current move
  const currentSquares = history[currentMove];

  /**
   * Updates the game by updating the history and changing the flag on whether X is next (or O is next)
   * Shall be called by Board component
   * Think: If you “go back in time” and then make a new move from that point,
   * you only want to keep the history up to that point.
   * Keep only a portion of the history
   * @param {Array?} nextSquares
   */
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  // transform my history of moves into some React buttons
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
