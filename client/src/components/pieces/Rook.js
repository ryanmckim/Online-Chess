import "./Queen.css";
import React from "react";

const Queen = ({colour, boardColour}) => {

    let imgSrc;

    if (boardColour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackRook.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteRook.png" // white
    }


    if (colour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={imgSrc} alt="Queen" className="queen-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="Queen" className="queen-piece"></img>
        </div>
        );
    }
};


export default Queen;