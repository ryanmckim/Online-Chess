import "./King.css";
import React from "react";

const King = ({colour}) => {
    if (colour) { // black
        return (
        <div className="board-space" style="background-color:black">
            <img src="../../../public/images/ChessPieces/BlackPieces/BlackKing.png" alt="King" className="king-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style="background-color:white">
            <img src="../../../public/images/ChessPieces/WhitePieces/WhiteKing.png" alt="King" className="king-piece"></img>
        </div>
        );
    }
};


export default King;