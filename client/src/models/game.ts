import Piece from './piece';
import {Colour} from './piece';
import {Type} from './piece';
import Square from './square';

export class Game {
    private board: Square[][];
    private readonly length: number;
    private turnNumber: number;
    private playerColour: Colour; 
    private whitePieces: Array<Piece>;
    private blackPieces: Array<Piece>;

    private lastMovedPieceWasPawnWithTwoMovement: Piece | null;
    
    // initial game state
    constructor() {
        this.turnNumber = 1;
        this.playerColour = Colour.white;
        this.lastMovedPieceWasPawnWithTwoMovement = null;

        this.length = 8;
        this.board = [];
        for (var i = 0; i < 8; i++) {
            this.board[i] = [];
            for(var j = 0; j < 8; j++) {
                this.board[i][j] = new Square(i, j);
            }
        }
        var whiteRook1 = new Piece(7, 0, Colour.white, Type.rook);
        var whiteKnight1 = new Piece(7, 1, Colour.white, Type.knight);
        var whiteBishop1 = new Piece(7, 2, Colour.white, Type.bishop);
        var whiteQueen = new Piece(7, 3, Colour.white, Type.queen);
        var whiteKing = new Piece(7, 4, Colour.white, Type.king);
        var whiteBishop2 = new Piece(7, 5, Colour.white, Type.bishop);
        var whiteKnight2 = new Piece(7, 6, Colour.white, Type.knight);
        var whiteRook2 = new Piece(7, 7, Colour.white, Type.rook);
        var whitePawn1 = new Piece(6, 0, Colour.white, Type.pawn);
        var whitePawn2 = new Piece(6, 1, Colour.white, Type.pawn);
        var whitePawn3 = new Piece(6, 2, Colour.white, Type.pawn);
        var whitePawn4 = new Piece(6, 3, Colour.white, Type.pawn);
        var whitePawn5 = new Piece(6, 4, Colour.white, Type.pawn);
        var whitePawn6 = new Piece(6, 5, Colour.white, Type.pawn);
        var whitePawn7 = new Piece(6, 6, Colour.white, Type.pawn);
        var whitePawn8 = new Piece(6, 7, Colour.white, Type.pawn);
        this.whitePieces = new Array<Piece>(whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2,
            whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8);

        this.board[7][0].setPiece(whiteRook1);
        this.board[7][1].setPiece(whiteKnight1);
        this.board[7][2].setPiece(whiteBishop1);
        this.board[7][3].setPiece(whiteQueen);
        this.board[7][4].setPiece(whiteKing);
        this.board[7][5].setPiece(whiteBishop2);
        this.board[7][6].setPiece(whiteKnight2);
        this.board[7][7].setPiece(whiteRook2);
        this.board[6][0].setPiece(whitePawn1);
        this.board[6][1].setPiece(whitePawn2);
        this.board[6][2].setPiece(whitePawn3);
        this.board[6][3].setPiece(whitePawn4);
        this.board[6][4].setPiece(whitePawn5);
        this.board[6][5].setPiece(whitePawn6);
        this.board[6][6].setPiece(whitePawn7);
        this.board[6][7].setPiece(whitePawn8);

        var blackRook1 = new Piece(0, 0, Colour.black, Type.rook);
        var blackKnight1 = new Piece(0, 1, Colour.black, Type.knight);
        var blackBishop1 = new Piece(0, 2, Colour.black, Type.bishop);
        var blackQueen = new Piece(0, 3, Colour.black, Type.queen);
        var blackKing = new Piece(0, 4, Colour.black, Type.king);
        var blackBishop2 = new Piece(0, 5, Colour.black, Type.bishop);
        var blackKnight2 = new Piece(0, 6, Colour.black, Type.knight);
        var blackRook2 = new Piece(0, 7, Colour.black, Type.rook);
        var blackPawn1 = new Piece(1, 0, Colour.black, Type.pawn);
        var blackPawn2 = new Piece(1, 1, Colour.black, Type.pawn);
        var blackPawn3 = new Piece(1, 2, Colour.black, Type.pawn);
        var blackPawn4 = new Piece(1, 3, Colour.black, Type.pawn);
        var blackPawn5 = new Piece(1, 4, Colour.black, Type.pawn);
        var blackPawn6 = new Piece(1, 5, Colour.black, Type.pawn);
        var blackPawn7 = new Piece(1, 6, Colour.black, Type.pawn);
        var blackPawn8 = new Piece(1, 7, Colour.black, Type.pawn);
        this.blackPieces = new Array<Piece>(blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2,
            blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8);

        this.board[0][0].setPiece(blackRook1);
        this.board[0][1].setPiece(blackKnight1);
        this.board[0][2].setPiece(blackBishop1);
        this.board[0][3].setPiece(blackQueen);
        this.board[0][4].setPiece(blackKing);
        this.board[0][5].setPiece(blackBishop2);
        this.board[0][6].setPiece(blackKnight2);
        this.board[0][7].setPiece(blackRook2);
        this.board[1][0].setPiece(blackPawn1);
        this.board[1][1].setPiece(blackPawn2);
        this.board[1][2].setPiece(blackPawn3);
        this.board[1][3].setPiece(blackPawn4);
        this.board[1][4].setPiece(blackPawn5);
        this.board[1][5].setPiece(blackPawn6);
        this.board[1][6].setPiece(blackPawn7);
        this.board[1][7].setPiece(blackPawn8);

        this.render();
        this.getMovableSpaces(this.board[1][2].getPiece());
    }

    getMovableSpaces(piece: Piece | null) {
        if (piece != null) {
            var locX = piece.getLocation()[0];
            var locY = piece.getLocation()[1];
            var squares: Square[] = [];
        
            switch (piece.getType()) {
                case Type.pawn: {
                    if (piece.getColour() === Colour.white && locX - 1 >= 0) {
                        // default move
                        if (!this.board[locX - 1][locY].isOccupied()) {
                            squares.push(this.board[locX - 1][locY]);
                            // two spaces possible if first move
                            if (locX - 2 >= 0) {
                                if (piece.isFirstMove() && !this.board[locX - 2][locY].isOccupied()) squares.push(this.board[locX - 2][locY]); 
                            }
                        }
                        if (locY - 1 >= 0) {
                            // if capture on left
                            if (this.board[locX - 1][locY - 1].isOccupied() && 
                            this.board[locX - 1][locY - 1].getPiece()?.getColour() === Colour.black) {
                                squares.push(this.board[locX - 1][locY - 1]);
                            }
                            // en passant on left
                            if (this.board[locX][locY - 1].isOccupied() && 
                            this.board[locX][locY - 1].getPiece()?.getColour() === Colour.black &&
                            this.board[locX][locY - 1].getPiece() == this.lastMovedPieceWasPawnWithTwoMovement) {
                                squares.push(this.board[locX - 1][locY - 1]);
                            }
                        } 
                        if (locY + 1 <= this.length - 1) {
                            // if capture on right
                            if (this.board[locX - 1][locY + 1].isOccupied() && 
                            this.board[locX - 1][locY + 1].getPiece()?.getColour() === Colour.black) {
                                squares.push(this.board[locX - 1][locY + 1]);
                            }
                            // en passant on right
                            if (this.board[locX][locY + 1].isOccupied() && 
                            this.board[locX][locY + 1].getPiece()?.getColour() === Colour.black &&
                            this.board[locX][locY + 1].getPiece() == this.lastMovedPieceWasPawnWithTwoMovement) {
                                squares.push(this.board[locX - 1][locY + 1]);
                            }
                        }
                    }

                    if (piece.getColour() == Colour.black && locX + 1 <= this.length - 1) {
                        // default move
                        if (!this.board[locX + 1][locY].isOccupied()) {
                            squares.push(this.board[locX + 1][locY]);
                            // two spaces possible if first move
                            if (locX + 2 <= this.length - 1) {
                                if (!this.board[locX + 2][locY].isOccupied() && piece.isFirstMove()) squares.push(this.board[locX + 2][locY]); 
                            }
                        }
                        if (locY - 1 >= 0) {
                            // if capture on left
                            if (this.board[locX + 1][locY - 1].isOccupied() && 
                            this.board[locX + 1][locY - 1].getPiece()?.getColour() === Colour.white) {
                                squares.push(this.board[locX + 1][locY - 1]);
                            }
                            // en passant on left
                            if (this.board[locX][locY - 1].isOccupied() && 
                            this.board[locX][locY - 1].getPiece()?.getColour() === Colour.white &&
                            this.board[locX][locY - 1].getPiece() == this.lastMovedPieceWasPawnWithTwoMovement) {
                                squares.push(this.board[locX + 1][locY - 1]);
                            }
                        } 
                        if (locY + 1 <= this.length - 1) {
                            // if capture on right
                            if (this.board[locX + 1][locY + 1].isOccupied() && 
                            this.board[locX + 1][locY + 1].getPiece()?.getColour() === Colour.white) {
                                squares.push(this.board[locX + 1][locY + 1]);
                            }
                            // en passant on right
                            if (this.board[locX][locY + 1].isOccupied() && 
                            this.board[locX][locY + 1].getPiece()?.getColour() === Colour.white &&
                            this.board[locX][locY + 1].getPiece() == this.lastMovedPieceWasPawnWithTwoMovement) {
                                squares.push(this.board[locX + 1][locY + 1]);
                            }
                        } 
                    }
                    break;
                }
                case Type.rook: {
                    // downwards movement to bottom of board
                    var i = locX + 1;
                    while (i <= this.length - 1) {
                        if (!this.board[i][locY].isOccupied()) {
                            squares.push(this.board[i][locY]);
                        } else if (this.board[i][locY].isOccupied() && this.board[i][locY].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[i][locY]);
                            break;
                        } else {
                            break;
                        }
                        i++
                    }
                    // upwards movement to top of board
                    var j = locX - 1;
                    while (j >= 0) {
                        if (!this.board[j][locY].isOccupied()) {
                            squares.push(this.board[j][locY]);
                        } else if (this.board[j][locY].isOccupied() && this.board[j][locY].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[j][locY]);
                            break;
                        } else {
                            break;
                        }
                        j--;
                    }
                    // righwards movement to right of board
                    var k = locY + 1;
                    while (k <= this.length - 1) {
                        if (!this.board[locX][k].isOccupied()) {
                            squares.push(this.board[locX][k]);
                        } else if (this.board[locX][k].isOccupied() && this.board[locX][k].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[locX][k]);
                            break;
                        } else {
                            break;
                        }
                        k++;
                    }
                    // leftward movement to left of board
                    var l = locY - 1;
                    while (l >= 0) {
                        if (!this.board[locX][l].isOccupied()) {
                            squares.push(this.board[locX][l]);
                        } else if (this.board[locX][l].isOccupied() && this.board[locX][l].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[locX][l]);
                            break;
                        } else {
                            break;
                        }
                        l--;
                    }
                    break;
                }
                case Type.knight: {
                    // Right-Right-Up
                    if (locX - 1 >= 0 && locY + 2 <= this.length - 1) {
                        if (!this.board[locX - 1][locY + 2].isOccupied() || 
                        (this.board[locX - 1][locY + 2].isOccupied() && 
                        this.board[locX - 1][locY + 2].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 1][locY + 2]);
                        }
                    }
                    // Right-Right-Down
                    if (locX + 1 <= this.length - 1 && locY + 2 <= this.length - 1) {
                        if (!this.board[locX + 1][locY + 2].isOccupied() || 
                        (this.board[locX + 1][locY + 2].isOccupied() 
                        && this.board[locX + 1][locY + 2].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 1][locY + 2]);
                        }
                    } 
                    // Down-Down-Right
                    if (locX + 2 <= this.length - 1 && locY + 1 <= this.length - 1) {
                        if (!this.board[locX + 2][locY + 1].isOccupied() || 
                        (this.board[locX + 2][locY + 1].isOccupied() 
                        && this.board[locX + 2][locY + 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 2][locY + 1]);
                        }
                    }
                    // Down-Down-Left
                    if (locX + 2 <= this.length - 1 && locY - 1 >= 0) {
                        if (!this.board[locX + 2][locY - 1].isOccupied() || 
                        (this.board[locX + 2][locY - 1].isOccupied() 
                        && this.board[locX + 2][locY - 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 2][locY - 1]);
                        }
                    }
                    // Left-Left-Down
                    if (locX + 1 <= this.length - 1 && locY - 2 >= 0) {
                        if (!this.board[locX + 1][locY - 2].isOccupied() || 
                        (this.board[locX + 1][locY - 2].isOccupied() 
                        && this.board[locX + 1][locY - 2].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 1][locY - 2]);
                        }
                    }
                    // Left-Left-Up
                    if (locX - 1 >= 0 && locY - 2 >= 0) {
                        if (!this.board[locX - 1][locY - 2].isOccupied() || 
                        (this.board[locX - 1][locY - 2].isOccupied() 
                        && this.board[locX - 1][locY - 2].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 1][locY - 2]);
                        }
                    }
                    // Up-Up-Left
                    if (locX - 2 >= 0 && locY - 1 >= 0) {
                        if (!this.board[locX - 2][locY - 1].isOccupied() || 
                        (this.board[locX - 2][locY - 1].isOccupied() 
                        && this.board[locX - 2][locY - 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 2][locY - 1]);
                        }
                    }
                    // Up-Up-Right
                    if (locX - 2 >= 0 && locY + 1 <= this.length - 1) {
                        if (!this.board[locX - 2][locY + 1].isOccupied() || 
                        (this.board[locX - 2][locY + 1].isOccupied() 
                        && this.board[locX - 2][locY + 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 2][locY + 1]);
                        }
                    }                     
                    break;
                }
                case Type.bishop: {
                    // Southeast movement to SE corner
                    var i = locX + 1;
                    var j = locY + 1;
                    while (i <= this.length - 1 && j <= this.length - 1) {
                        if (!this.board[i][j].isOccupied()) {
                            squares.push(this.board[i][j]);
                        } else if (this.board[i][j].isOccupied() && this.board[i][j].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[i][j]);
                            break;
                        } else {
                            break;
                        }
                        i++;
                        j++;
                    }
                    // Southwest movement to SW corner
                    var k = locX + 1;
                    var l = locY - 1;
                    while (k <= this.length - 1 && l >= 0) {
                        if (!this.board[k][l].isOccupied()) {
                            squares.push(this.board[k][l]);
                        } else if (this.board[k][l].isOccupied() && this.board[k][l].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[k][l]);
                            break;
                        } else {
                            break;
                        }
                        k++;
                        l--;
                    }
                    // Northwest movement to NW corner
                    var m = locX - 1;
                    var n = locY - 1;
                    while (m >= 0 && n >= 0) {
                        if (!this.board[m][n].isOccupied()) {
                            squares.push(this.board[m][n]);
                        } else if (this.board[m][n].isOccupied() && this.board[m][n].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[m][n]);
                            break;
                        } else {
                            break;
                        }
                        m--;
                        n--;
                    }
                    // Northeast movement to NE corner
                    var o = locX - 1;
                    var p = locY + 1;
                    while (o >= 0 && p <= this.length - 1) {
                        if (!this.board[o][p].isOccupied()) {
                            squares.push(this.board[o][p]);
                        } else if (this.board[o][p].isOccupied() && this.board[o][p].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[o][p]);
                            break;
                        } else {
                            break;
                        }
                        o--;
                        p++;
                    }
                    break;
                }
                case Type.king: {
                    var captureSquares: Square[] = this.findEnemyMoves(piece.getColour());
                    // SE
                    if (locX <= this.length - 2 && locY <= this.length - 2) {
                        if (!captureSquares.includes(this.board[locX + 1][locY + 1]) &&
                        (this.board[locX + 1][locY + 1].isOccupied() && this.board[locX + 1][locY + 1].getPiece()?.getColour() !== piece.getColour())) {    
                            squares.push(this.board[locX + 1][locY + 1]);
                        }
                    }
                    
                        
                    // SW
                    if (locX <= this.length - 2 && locY >= 1) {
                        if (!captureSquares.includes(this.board[locX + 1][locY - 1]) &&
                        (this.board[locX + 1][locY - 1].isOccupied() && this.board[locX + 1][locY - 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 1][locY - 1]);
                        }
                    }  
                    
                        
                    // NW
                    if (locX >= 1 && locY >= 1) {
                        if (!captureSquares.includes(this.board[locX - 1][locY - 1]) &&
                        (this.board[locX - 1][locY - 1].isOccupied() && this.board[locX - 1][locY - 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 1][locY - 1]);
                        }
                    } 
                    
                        
                    // NE
                    if (locX >= 1 && locY <= this.length - 2) {
                        if (!captureSquares.includes(this.board[locX - 1][locY + 1]) &&
                        (this.board[locX - 1][locY + 1].isOccupied() && this.board[locX - 1][locY + 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 1][locY + 1]);
                        }
                    }
                    
                        
                    // S
                    if (locX <= this.length - 2) {
                        if (!captureSquares.includes(this.board[locX + 1][locY]) &&
                        (this.board[locX + 1][locY].isOccupied() && this.board[locX + 1][locY].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX + 1][locY]);
                        }
                    }
                    
                        
                    // N
                    if (locX >= 1) {
                        if (!captureSquares.includes(this.board[locX - 1][locY]) &&
                        (this.board[locX - 1][locY].isOccupied() && this.board[locX - 1][locY].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX - 1][locY]);
                        }
                    } 
                    
                    // E
                    if (locY <= this.length - 2) {
                        if (!captureSquares.includes(this.board[locX][locY + 1]) &&
                        (this.board[locX][locY + 1].isOccupied() && this.board[locX][locY + 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX][locY + 1]);
                        }
                    } 
                    

                    // W
                    if (locY >= 1) {
                        if (!captureSquares.includes(this.board[locX][locY - 1]) &&
                        (this.board[locX][locY - 1].isOccupied() && this.board[locX][locY - 1].getPiece()?.getColour() !== piece.getColour())) {
                            squares.push(this.board[locX][locY - 1]);
                        }
                    }
                    

                    // Castling
                    if (piece.isFirstMove()) {
                        if (piece.getColour() == Colour.white && !captureSquares.includes(this.board[7][4])) {
                            // white castle left
                            if (this.board[7][0].getPiece()?.getColour() === Colour.white && 
                            this.board[7][0].getPiece()?.getType() === Type.rook && 
                            this.board[7][0].getPiece()?.isFirstMove() &&
                            (!this.board[7][1].isOccupied() && !captureSquares.includes(this.board[7][1])) && 
                            (!this.board[7][2].isOccupied() && !captureSquares.includes(this.board[7][2])) &&
                            (!this.board[7][3].isOccupied() && !captureSquares.includes(this.board[7][3]))) {
                                squares.push(this.board[7][2]);
                            }
                            // white castle right
                            if (this.board[7][7].getPiece()?.getColour() === Colour.white &&
                            this.board[7][7].getPiece()?.getType() === Type.rook && 
                            this.board[7][7].getPiece()?.isFirstMove() &&
                            (!this.board[7][5].isOccupied() && !captureSquares.includes(this.board[7][5])) &&
                            (!this.board[7][6].isOccupied() && !captureSquares.includes(this.board[7][6]))) {
                                squares.push(this.board[7][6]);
                            }

                        }
                        if (piece.getColour() == Colour.black && !captureSquares.includes(this.board[0][4])) {
                            // black castle left
                            if (this.board[0][0].getPiece()?.getColour() === Colour.black && 
                            this.board[0][0].getPiece()?.getType() === Type.rook && 
                            this.board[0][0].getPiece()?.isFirstMove() &&
                            (!this.board[0][1].isOccupied() && !captureSquares.includes(this.board[0][1])) && 
                            (!this.board[0][2].isOccupied() && !captureSquares.includes(this.board[0][2])) &&
                            (!this.board[0][3].isOccupied() && !captureSquares.includes(this.board[0][3]))) {
                                squares.push(this.board[0][2]);
                            }
                            // black castle right
                            if (this.board[0][7].getPiece()?.getColour() === Colour.white &&
                            this.board[0][7].getPiece()?.getType() === Type.rook && 
                            this.board[0][7].getPiece()?.isFirstMove() &&
                            (!this.board[0][5].isOccupied() && !captureSquares.includes(this.board[0][5])) &&
                            (!this.board[0][6].isOccupied() && !captureSquares.includes(this.board[0][6]))) {
                                squares.push(this.board[0][6]);
                            }

                        }
                    }
                    break;    
                }
                
                case Type.queen: {
                    // downwards movement to bottom of board
                    var i = locX + 1;
                    while (i <= this.length - 1) {
                        if (!this.board[i][locY].isOccupied()) {
                            squares.push(this.board[i][locY]);
                        } else if (this.board[i][locY].isOccupied() && this.board[i][locY].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[i][locY]);
                            break;
                        } else {
                            break;
                        }
                        i++
                    }
                    // upwards movement to top of board
                    var j = locX - 1;
                    while (j >= 0) {
                        if (!this.board[j][locY].isOccupied()) {
                            squares.push(this.board[j][locY]);
                        } else if (this.board[j][locY].isOccupied() && this.board[j][locY].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[j][locY]);
                            break;
                        } else {
                            break;
                        }
                        j--;
                    }
                    // righwards movement to right of board
                    var k = locY + 1;
                    while (k <= this.length - 1) {
                        if (!this.board[locX][k].isOccupied()) {
                            squares.push(this.board[locX][k]);
                        } else if (this.board[locX][k].isOccupied() && this.board[locX][k].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[locX][k]);
                            break;
                        } else {
                            break;
                        }
                        k++;
                    }
                    // leftward movement to left of board
                    var l = locY - 1;
                    while (l >= 0) {
                        if (!this.board[locX][l].isOccupied()) {
                            squares.push(this.board[locX][l]);
                        } else if (this.board[locX][l].isOccupied() && this.board[locX][l].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[locX][l]);
                            break;
                        } else {
                            break;
                        }
                        l--;
                    }
                    // Southeast movement to SE corner
                    var i = locX + 1;
                    var j = locY + 1;
                    while (i <= this.length - 1 && j <= this.length - 1) {
                        if (!this.board[i][j].isOccupied()) {
                            squares.push(this.board[i][j]);
                        } else if (this.board[i][j].isOccupied() && this.board[i][j].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[i][j]);
                            break;
                        } else {
                            break;
                        }
                        i++;
                        j++;
                    }
                    // Southwest movement to SW corner
                    var k = locX + 1;
                    var l = locY - 1;
                    while (k <= this.length - 1 && l >= 0) {
                        if (!this.board[k][l].isOccupied()) {
                            squares.push(this.board[k][l]);
                        } else if (this.board[k][l].isOccupied() && this.board[k][l].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[k][l]);
                            break;
                        } else {
                            break;
                        }
                        k++;
                        l--;
                    }
                    // Northwest movement to NW corner
                    var m = locX - 1;
                    var n = locY - 1;
                    while (m >= 0 && n >= 0) {
                        if (!this.board[m][n].isOccupied()) {
                            squares.push(this.board[m][n]);
                        } else if (this.board[m][n].isOccupied() && this.board[m][n].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[m][n]);
                            break;
                        } else {
                            break;
                        }
                        m--;
                        n--;
                    }
                    // Northeast movement to NE corner
                    var o = locX - 1;
                    var p = locY + 1;
                    while (o >= 0 && p <= this.length - 1) {
                        if (!this.board[o][p].isOccupied()) {
                            squares.push(this.board[o][p]);
                        } else if (this.board[o][p].isOccupied() && this.board[o][p].getPiece()?.getColour() !== piece.getColour()) {
                            squares.push(this.board[o][p]);
                            break;
                        } else {
                            break;
                        }
                        o--;
                        p++;
                    }
                    break;
                }
            }  

            for (var i = 0; i < squares.length; i++) {
                console.log("[" + squares[i].getCoord()[0] + ", " + squares[i].getCoord()[1] + "]");
            }
            return squares;
        }
    }

    move(piece: Piece) {

    }

    findEnemyMoves(colour: Colour) {
        var captureSquares: Square[] = [];
        if (colour === Colour.white) {
            for (var i = 0; i < this.blackPieces.length; i++) {
                if (this.blackPieces[i].getType() === Type.king) {
                    var locX = this.blackPieces[i].getLocation()[0];
                    var locY = this.blackPieces[i].getLocation()[1];
                    if (locX <= this.length - 2 && locY <= this.length - 2) captureSquares.push(this.board[locX + 1][locY + 1]); // SE
                    if (locX <= this.length - 2 && locY >= 1) captureSquares.push(this.board[locX + 1][locY - 1]); // SW
                    if (locX >= 1 && locY >= 1) captureSquares.push(this.board[locX - 1][locY - 1]); // NW
                    if (locX >= 1 && locY <= this.length - 2) captureSquares.push(this.board[locX - 1][locY + 1]); // NE
                    if (locX <= this.length - 2) captureSquares.push(this.board[locX + 1][locY]); // S
                    if (locX >= 1) captureSquares.push(this.board[locX - 1][locY]); // N
                    if (locY <= this.length - 2) captureSquares.push(this.board[locX][locY + 1]); // E
                    if (locY >= 1) captureSquares.push(this.board[locX][locY - 1]); // W
                } else if (this.getMovableSpaces(this.blackPieces[i])!) {
                    captureSquares.concat(this.getMovableSpaces(this.blackPieces[i])!);
                }
            }
        }
        if (colour === Colour.black) {
            for (var i = 0; i < this.whitePieces.length; i++) {
                if (this.whitePieces[i].getType() === Type.king) {
                    var locX = this.whitePieces[i].getLocation()[0];
                    var locY = this.whitePieces[i].getLocation()[1];
                    // SE
                    if (locX <= this.length - 2 && locY <= this.length - 2) captureSquares.push(this.board[locX + 1][locY + 1]);
                    // SW
                    if (locX <= this.length - 2 && locY >= 1) captureSquares.push(this.board[locX + 1][locY - 1]);
                    // NW
                    if (locX >= 1 && locY >= 1) captureSquares.push(this.board[locX - 1][locY - 1]);
                    // NE
                    if (locX >= 1 && locY <= this.length - 2) captureSquares.push(this.board[locX - 1][locY + 1]);
                    // S
                    if (locX <= this.length - 2) captureSquares.push(this.board[locX + 1][locY]);
                    // N
                    if (locX >= 1) captureSquares.push(this.board[locX - 1][locY]);
                    // E
                    if (locY <= this.length - 2) captureSquares.push(this.board[locX][locY + 1]);
                    // W
                    if (locY >= 1) captureSquares.push(this.board[locX][locY - 1]);
                } else if (this.getMovableSpaces(this.whitePieces[i])!) {
                    captureSquares.concat(this.getMovableSpaces(this.whitePieces[i])!);
                }
            }
        }
        return captureSquares;
    }

    render() {
        for (var i = 0; i < 8; i++) {
            for(var j = 0; j < 8; j++) {
                if (this.board[i][j] == null) {
                    process.stdout.write('- ');
                } else {
                    var piece = this.board[i][j].getPiece();
                if (piece?.getType() === Type.pawn) {
                    process.stdout.write('p ' );
                } else if (piece?.getType() === Type.rook) {
                    process.stdout.write('r ');
                } else if (piece?.getType() === Type.knight) {
                    process.stdout.write('n ');
                } else if (piece?.getType() === Type.bishop) {
                    process.stdout.write('b ');
                } else if (piece?.getType() === Type.king) {
                    process.stdout.write('k ');
                } else if (piece?.getType() === Type.queen) {
                    process.stdout.write('q ');
                } else {
                    process.stdout.write('* ')
                }
                }
                
            }
            console.log();
        }
    }
}

export default Game;