export enum Type {
    pawn = 1, rook = 5, knight = 4, bishop = 3, king = 0, queen = 8
}

export enum Colour {
    white, black
}

export class Piece {
    private x: number;
    private y: number;
    private type: Type;
    private colour: Colour;
    
    private firstMove: boolean;

    constructor(x: number, y: number, colour: Colour, type: Type) {
        this.x = x; // int 0 < x < 7
        this.y = y; // int 0 < y < 7
        this.type = type;
        this.colour = colour;
        this.firstMove = true;
    }

    getLocation() { return [this.x, this.y]; }

    setLocation(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getType() { return this.type; }

    getColour() { return this.colour; }

    isFirstMove() { return this.firstMove; }

    setHasMoved() {
        this.firstMove = false;
    }

    // Pawn Promotion
    setType(type: Type) {
        this.type = type;
    }

}

export default Piece;