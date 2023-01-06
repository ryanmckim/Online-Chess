import "./Queen.css";
import "./Piece.css"
import React from "react";
import {Colour} from "../../models/piece";

type Props = {
    colour : Colour|undefined,
    boardColour : Colour
};

const Queen = ({colour, boardColour} : Props) => {

    let pieceClass;
    let spaceClass;

    if (colour == Colour.white) {
        pieceClass = "white-queen";
    } else {
        pieceClass = "black-queen";
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


export default Queen;