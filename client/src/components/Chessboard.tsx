import React, { useState, useEffect } from "react";
import "./Chessboard.css";
import Game from "../models/game";
import {Type} from '../models/piece';
import {Colour} from '../models/piece';
import Piece from '../models/piece';
import Square from "../models/square";
import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";
import Rook from "./pieces/Rook";
import Pawn from "./pieces/Pawn";
import Blank from "./pieces/Blank";

const Chessboard = () => {
    const [board, setBoard] = useState<Square[][]>([[],[],[],[],[],[],[],[]]);

    let game = new Game();

    useEffect(() => {
        setBoard(game.getBoard());
    }, []);

    function generateBoard(board: Square[][]) {
        return board.map((row: Square[], index) => <div key={"row" + (index+1)} className={"row row" + (index+1)} >{determineRow(row)}</div>);
    }
    
    function determineRow(row: Square[]) {
        return row.map((square: Square, index) => <div key={"col" + (index+1)} className={"col col" + (index+1)}>{determinePiece(square)}</div>);
    }
    
    function determinePiece(square: Square) {
        switch (square.getPiece()?.getType()) {
            case Type.pawn:
                return <Pawn colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></Pawn>
            case Type.rook:
                return <Rook colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></Rook>
            case Type.knight:
                return <Knight colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></Knight>
            case Type.bishop:
                return <Bishop colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></Bishop>
            case Type.king:
                return <King colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></King>
            case Type.queen:
                return <Queen colour={square.getPiece()?.getColour()} boardColour={square.getColour()}></Queen>
            default:
                return <Blank boardColour={square.getColour()}></Blank>
        }
    }

    return (
        <div className="board-container app-item">
            <div className="board">
                {generateBoard(board)}
            </div>
        </div>
    );
};

export default Chessboard;

// Old Code
/*
    function produceBoard(board: Square[][]) {
        let boardOutput = "<div className='board'>";

        board.forEach((row, index) => {
            boardOutput += produceRow(row, index+1);
        })

        boardOutput += "</div>";

        return boardOutput;
    }

    function produceRow(row: Square[], index: number) {
        let rowOutput = "<div className='row' + index>";

        row.forEach((square) => {
            rowOutput += producePiece(square);
        });

        rowOutput += "</div>"

        return rowOutput;
    }

    function producePiece(square: Square) {
        return "<h1>Piece</h1>";
        switch (square.getPiece()?.getType()) {
            case Type.pawn:
                return "<h1>King</h1>";
            case Type.rook:
                return "<h1>Rook</h1>";
            case Type.knight:
                return "<h1>Knight</h1>";
            case Type.bishop:
                return "<h1>Bishop</h1>";
            case Type.king:
                return "<h1>King</h1>";
            case Type.queen:
                return "<h1>Queen</h1>";
            default:
                return "<h1>Blank</h1>";
        }
    }
*/
