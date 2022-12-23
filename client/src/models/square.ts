import Piece from "./piece";

type Nullable<T> = T | null;

export class Square {
    private x: number;
    private y: number;
    private piece: Nullable<Piece>;

    constructor(x: number, y: number) {
        this.x = x; // int 0 < x < 7
        this.y = y; // int 0 < y < 7
        this.piece = null;
    }

    getCoord() { return [this.x, this.y]; }

    getPiece() { return this.piece; }

    setPiece(newPiece: Piece) {
        this.piece = newPiece;
    }

    removePiece() {
        this.piece = null;
    }

    isOccupied() { 
        return this.piece != null; 
    }
}

export default Square