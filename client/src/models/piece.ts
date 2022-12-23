import Square from "./square";

type Nullable<T> = T | null;

export const enum Type {
    pawn = 0, rook = 1, knight = 2, bishop = 3, king = 4, queen = 5
}

export const enum Colour {
    white = 0, 
    black = 1
}

export class Piece {
    private x: number;
    private y: number;
    private type: Type;
    private colour: Colour;
    private square: Nullable<Square>;

    constructor(x: number, y: number, colour: Colour, type: Type) {
        this.x = x; // int 0 < x < 7
        this.y = y; // int 0 < y < 7
        this.type = type;
        this.colour = colour;
        this.square = null;
    }

    getLocation() { return [this.x, this.y]; }

    getType() { return this.type; }

    getColour() { return this.colour; }

    getSquare() { return this.square; }

    setSquare(newSquare: Square) {
        this.square?.removePiece();
        this.x = newSquare.getCoord()[0];
        this.y = newSquare.getCoord()[1];
        this.square = newSquare; 
        newSquare.setPiece(this);
    }

    // Pawn Promotion
    setType(type: Type) {
        this.type = type;
    }

}

export default Piece;