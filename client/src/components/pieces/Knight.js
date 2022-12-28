import "./Knight.css";
import React from "react";

const Knight = ({colour}) => {
    if (colour) { // black
        return (
        <div className="board-space" style="background-color:black">
            <img src="../../../public/images/ChessPieces/BlackPieces/BlackKnight.png" alt="Knight" className="knight-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style="background-color:white">
            <img src="../../../public/images/ChessPieces/WhitePieces/WhiteKnight.png" alt="Knight" className="knight-piece"></img>
        </div>
        );
    }
};


export default Knight;