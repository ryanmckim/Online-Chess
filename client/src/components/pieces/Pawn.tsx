import "./Pawn.css";
import "./Piece.css"
import React from "react";
import {Colour} from "../../models/piece";

type Props = {
    colour : Colour|undefined,
    boardColour : Colour
};

const Pawn = ({colour, boardColour} : Props) => {

    let pieceClass;
    let spaceClass;

    if (colour == Colour.white) {
        pieceClass = "white-piece";
    } else {
        pieceClass = "black-piece";
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

/*
    if (boardColour == Colour.white) { // black
        return (
            <div className="board-space black-space">
                <div className="black-piece" style={{backgroundColor: "black"}}> 
                </div>
            </div>    
        );
    } else { // white
        return (
            <div className="board-space white-space">
                <div className="white-piece" style={{backgroundColor: "white"}}> 
                </div>
            </div>  
        );
    }
*/

export default Pawn;