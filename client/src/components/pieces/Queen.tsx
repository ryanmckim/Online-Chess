import "./Queen.css";
import React from "react";
import {Colour} from "../../model/piece";

type Props = {
    colour : Colour|null,
    boardColour : Colour
};

const Queen = ({colour, boardColour} : Props) => {

    let imgSrc;

    if (boardColour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackQueen.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteQueen.png" // white
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