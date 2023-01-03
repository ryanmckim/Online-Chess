import "./Knight.css";
import React from "react";
import {Colour} from "../../model/piece";

type Props = {
    colour : Colour|null,
    boardColour : Colour
};

const Knight = ({colour, boardColour} : Props) => {

    let imgSrc;

    if (colour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackKnight.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteKnight.png" // white
    }

    
    if (boardColour) { // black
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