import "./Pawn.css";
import React from "react";

const Pawn = ({colour, boardColour}) => {

    let imgSrc;

    if (boardColour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackPawn.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhitePawn.png" // white
    }

    if (colour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={imgSrc} alt="Pawn" className="pawn-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="Pawn" className="pawn-piece"></img>
        </div>
        );
    }
};


export default Pawn;