import "./Bishop.css";
import React from "react";
import {Colour} from "../../models/piece";

type Props = {
    colour : Colour|null,
    boardColour : Colour
};

const Bishop = ({colour, boardColour} : Props) => {

    let imgSrc;

    if (colour) {
        imgSrc = "../../../public/images/ChessPieces/BlackPieces/BlackBishop.png" // black
    } else {
        imgSrc = "../../../public/images/ChessPieces/WhitePieces/WhiteBishop.png" // white
    }


    if (boardColour) { // black
        return (
        <div className="board-space" style={{backgroundColor: "black"}}>
            <img src={require(imgSrc)} alt="Bishop" className="bishop-piece"></img> 
        </div>
    );
    } else { // white
    return (
        <div className="board-space" style={{backgroundColor: "white"}}>
            <img src={imgSrc} alt="Bishop" className="bishop-piece"></img>
        </div>
        );
    }
};


export default Bishop;