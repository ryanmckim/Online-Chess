import "./Rook.css";
import React from "react";
import {Colour} from "../../model/piece";

type Props = {
    colour : Colour|null,
    boardColour : Colour
};

const Rook = ({colour, boardColour} : Props) => {

    let imgSrc;

    if (colour) {
        imgSrc = "../../..public/images/ChessPieces/BlackPieces/BlackRook.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteRook.png" // white
    }


    if (boardColour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={imgSrc} alt="Rook" className="rook-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="Rook" className="rook-piece"></img>
        </div>
        );
    }
};


export default Rook;