import "./Square.css";
import React from 'react';
import Pawn from "./pieces/Pawn";
import Rook from "./pieces/Rook";
import Knight from "./pieces/Knight";
import Bishop from "./pieces/Bishop";
import Queen from "./pieces/Queen";
import King from "./pieces/King";
import {Type, Colour} from "../model/piece";

type Props = {
    type: Type|null,
    boardColour: Colour,
    pieceColour: Colour|null
};

const Square = ({type, boardColour, pieceColour} : Props) => {

    switch(type) {
        
        case 0:
            return <King colour = {pieceColour} boardColour = {boardColour}></King>;
            
        case 1:
            return <Pawn colour = {pieceColour} boardColour = {boardColour}></Pawn>;
            
        case 3:
            return <Bishop colour = {pieceColour} boardColour = {boardColour}></Bishop>;

        case 4:
            return <Knight colour = {pieceColour} boardColour = {boardColour}></Knight>;

        case 5:
            return <Rook colour = {pieceColour} boardColour = {boardColour}></Rook>;

        case 8:
            return <Queen colour = {pieceColour} boardColour = {boardColour}></Queen>;

        default:
            if (boardColour) { // black
                return <div className="board-space" style= {{backgroundColor: "black"}}></div>;
            } else {  // white
                return <div className="board-space" style= {{backgroundColor: "white"}}></div>
            }
    }
};

export default Square;