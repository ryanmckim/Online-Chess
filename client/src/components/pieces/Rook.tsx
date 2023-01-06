import "./Rook.css";
import "./Piece.css"
import React from "react";
import {Colour} from "../../models/piece";

type Props = {
    colour : Colour|undefined,
    boardColour : Colour
};


const Rook = ({colour, boardColour} : Props) => {

    let pieceClass;
    let spaceClass;

    if (colour == Colour.white) {
        pieceClass = "white-rook";
    } else {
        pieceClass = "black-rook";
    }

    if (boardColour == Colour.white) {
        spaceClass = "white-space";
    } else {
        spaceClass = "black-space";
    }

    return (
        <div className={"board-space " + spaceClass}>
            <div className={"board-piece " + pieceClass}></div>
        </div>
    )
};


export default Rook;