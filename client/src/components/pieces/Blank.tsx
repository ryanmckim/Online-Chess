import "./Blank.css";
import "./Piece.css"
import React from "react";
import {Colour} from "../../models/piece";

type Props = {
    boardColour : Colour
};

const Blank = ({boardColour} : Props) => {

    let spaceClass;

    if (boardColour == Colour.white) {
        spaceClass = "white-space";
    } else {
        spaceClass = "black-space";
    }

    return (
        <div className={"board-space " + spaceClass}>
        </div>
    )
};

export default Blank;