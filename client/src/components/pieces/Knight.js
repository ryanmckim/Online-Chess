import "./Knight.css";
import React from "react";

const Knight = ({colour, boardColour}) => {

    let imgSrc;

    if (boardColour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackKnight.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteKnight.png" // white
    }

    
    if (colour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={imgSrc} alt="Knight" className="knight-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="Knight" className="knight-piece"></img>
        </div>
        );
    }
};


export default Knight;