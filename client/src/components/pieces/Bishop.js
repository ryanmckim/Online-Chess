import "./Bishop.css";
import React from "react";

const Bishop = ({colour}) => {
    if (colour) { // black
        return (
        <div className="board-space" style="background-color:black">
            <img src="../../../public/images/ChessPieces/BlackPieces/BlackBishop.png" alt="Bishop" className="bishop-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style="background-color:white">
            <img src="../../../public/images/ChessPieces/WhitePieces/WhiteBishop.png" alt="Bishop" className="bishop-piece"></img>
        </div>
        );
    }
};


export default Bishop;