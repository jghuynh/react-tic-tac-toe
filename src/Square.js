import { useState } from "react";
import "./Square.css";

/**
 *  Represents a Square on a tic-tac-toe Board
 * @param {value} String state, or the value, of the Square (X or O or null)
 * @param {onSquareClick} Function the function that handles what happens when clicking square
 * @returns
 */
function Square({ value, onSquareClick }) {
  //   const [value, setValue] = useState(null);
  /**
   * A handle click event handler. Everytime you click on a square (of a board),
   * set the value of the square to an X!
   */
  //   function handleClick() {
  //     setValue("X");
  //   }
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default Square;
