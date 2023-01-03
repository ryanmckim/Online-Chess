import "./King.css";
import React from "react";
import {Colour} from "../../model/piece";

type Props = {
    colour : Colour|null,
    boardColour : Colour
};

const King = ({colour, boardColour} : Props) => {

    let imgSrc;

    if (boardColour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackKing.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteKing.png" // white
    }


    if (colour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={imgSrc} alt="King" className="king-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="King" className="king-piece"></img>
        </div>
        );
    }
};


export default King;