import "./Queen.css";
import React from "react";

const Queen = ({colour}) => {
    if (colour) { // black
        return (
        <div className="board-space" style="background-color:black">
            <img src="../../../public/images/ChessPieces/BlackPieces/BlackRook.png" alt="Queen" className="queen-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style="background-color:white">
            <img src="../../../public/images/ChessPieces/WhitePieces/WhiteRook.png" alt="Queen" className="queen-piece"></img>
        </div>
        );
    }
};


export default Queen;