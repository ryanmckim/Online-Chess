import "./Chessboard.css";
import React, { useState } from 'react';
import SquareComponent from "./Square";
import Square from "../model/square";
import Piece from "../model/piece";
import Game from "../model/game";


const Chessboard = ({gameState = [[],[],[],[],[],[],[],[],]}) => {

    //const [board, setBoard] = useState(gameState);

    let game = new Game();
    let board = game.getBoard();

 //   let board = [[new Square(5,5,1), new Square(1,1,7)],[new Square(2,2,2)],[],[],[],[],[],[],];

    let count = -1;

    // init map function
    const createRow = (square:Square) => {

        count ++;

        let colour = square.getColour();
        let piece = square.getPiece();
        let pieceColour;
        let type;

        if (piece != null) {
            pieceColour = piece?.getColour();
            type = piece?.getType();
        } else {
            pieceColour = null;
            type = null;
        }

        return (
          <SquareComponent key={count} type={type} boardColour={colour} pieceColour={pieceColour}></SquareComponent>
        );
    }
      

    return (
        <div className="board-container app-item">
            <main className="board">
                <section id = "row-1">
                    {board[0].map(createRow)}
                </section>
                <section id = "row-2">
                    {board[1].map(createRow)}
                </section>
                <section id = "row-3">
                    {board[2].map(createRow)}
                </section>
                <section id = "row-4">
                    {board[3].map(createRow)}
                </section>
                <section id = "row-5">
                    {board[4].map(createRow)}
                </section>
                <section id = "row-6">
                    {board[5].map(createRow)}
                </section>
                <section id = "row-7">
                    {board[6].map(createRow)}
                </section>
                <section id = "row-8">
                    {board[7].map(createRow)}
                </section>
            </main>
        </div>
    );
};

export default Chessboard;
