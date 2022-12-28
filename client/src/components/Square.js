import "./Square.css";
import React from 'react';
import Pawn from "./pieces/Pawn";
import Rook from "./pieces/Rook";
import Knight from "./pieces/Knight";
import Bishop from "./pieces/Bishop";
import Queen from "./pieces/Queen";
import King from "./pieces/King";

const Square = ({type, boardColour, colour}) => {
    switch(type) {
        
        case 0:
            return <Pawn colour = {colour} boardColour = {boardColour}></Pawn>;
            
        case 1:
            return <Rook colour = {colour} boardColour = {boardColour}></Rook>;
            
        case 2:
            return <Knight colour = {colour} boardColour = {boardColour}></Knight>;

        case 3:
            return <Bishop colour = {colour} boardColour = {boardColour}></Bishop>;

        case 4:
            return <King colour = {colour} boardColour = {boardColour}></King>;

        case 5:
            return <Queen colour = {colour} boardColour = {boardColour}></Queen>;

        default:
            if (backgroundColour == "black") { // black
                return <div class="board-space" style="background-color: black"></div>;
            } else {  // white
                return <div class="board-space" style ="background-color: white"></div>
            }
    }
};

export default Square;