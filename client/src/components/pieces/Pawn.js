import "./Pawn.css";
import React from "react";

const Pawn = ({colour, boardColour}) => {
    if (colour) { // black
        return (
        <div className="board-space" style="background-color:black">
            <img src="../../../public/images/ChessPieces/BlackPieces/BlackPawn.png" alt="Pawn" className="pawn-piece"></img> 
        </div>
    );
    } else {
    return (
        <div className="board-space" style="background-color:white">
            <img src="../../../public/images/ChessPieces/WhitePieces/WhitePawn.png" alt="Pawn" className="pawn-piece"></img>
        </div>
        );
    }
};


export default Pawn;