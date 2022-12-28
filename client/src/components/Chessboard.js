import "./Chessboard.css";
import React, { useState } from 'react';
import Square from "./Square";

const Chessboard = ({gameState}) => {

    const [board, setBoard] = useState(gameState);


    let count = 0;
    let rowCount = 0;

    // init map function
    const createRow = (square) => {

        let boardColour;

        const {type, colour} = square;

        if (count % 2 == rowCount) {
            boardColour = "white";
        } else {
            boardColour = "black"
        }
        count++;

        if (count%8 == 0) {
            rowCount++;
        }

        return (
          <Square type={type} boardColour={boardColour} colour={colour}></Square>
        );
      }

    return (
        <div className="board-container app-item">
            <main className="board">
                <section id = "row 1">
                    {board[0].map(createRow)}
                </section>
                <section id = "row 2">
                    {board[1].map(createRow)}
                </section>
                <section id = "row 3">
                    {board[2].map(createRow)}
                </section>
                <section id = "row 4">
                    {board[3].map(createRow)}
                </section>
                <section id = "row 5">
                    {board[4].map(createRow)}
                </section>
                <section id = "row 6">
                    {board[5].map(createRow)}
                </section>
                <section id = "row 7">
                    {board[6].map(createRow)}
                </section>
                <section id = "row 8">
                    {board[7].map(createRow)}
                </section>
            </main>
        </div>
    );
};

export default Chessboard;
