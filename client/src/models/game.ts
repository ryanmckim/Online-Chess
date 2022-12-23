import Piece from './piece';
import {Colour} from './piece';
import {Type} from './piece';
import Square from './square';

class Game {
    private board: Square[][];
    private turnNumber: number;
    private playerColour: Colour; 

    // initial game state
    constructor() {
        this.turnNumber = 1;
        this.playerColour = Colour.white;
        
        this.board = [];
        for (var i = 0; i < 8; i++) {
            this.board[i] = [];
            for(var j = 0; j < 8; j++) {
                this.board[i][j] = new Square(i, j);
            }
        }

        this.board[0][0].setPiece(new Piece(0, 0, Colour.black, Type.rook));
        this.board[0][1].setPiece(new Piece(0, 1, Colour.black, Type.knight));
        this.board[0][2].setPiece(new Piece(0, 2, Colour.black, Type.bishop));
        this.board[0][3].setPiece(new Piece(0, 3, Colour.black, Type.king));
        this.board[0][4].setPiece(new Piece(0, 4, Colour.black, Type.queen));
        this.board[0][5].setPiece(new Piece(0, 5, Colour.black, Type.bishop));
        this.board[0][6].setPiece(new Piece(0, 6, Colour.black, Type.knight));
        this.board[0][7].setPiece(new Piece(0, 7, Colour.black, Type.rook));
        for (var j = 0; j < 8; j++) {
            this.board[1][j].setPiece(new Piece(1, j, Colour.black, Type.pawn));
        }

        this.board[7][0].setPiece(new Piece(7, 0, Colour.white, Type.rook));
        this.board[7][1].setPiece(new Piece(7, 1, Colour.white, Type.knight));
        this.board[7][2].setPiece(new Piece(7, 2, Colour.white, Type.bishop));
        this.board[7][3].setPiece(new Piece(7, 3, Colour.white, Type.king));
        this.board[7][4].setPiece(new Piece(7, 4, Colour.white, Type.queen));
        this.board[7][5].setPiece(new Piece(7, 5, Colour.white, Type.bishop));
        this.board[7][6].setPiece(new Piece(7, 6, Colour.white, Type.knight));
        this.board[7][7].setPiece(new Piece(7, 7, Colour.white, Type.rook));
        for (var j = 0; j < 8; j++) {
            this.board[6][j].setPiece(new Piece(1, j, Colour.white, Type.pawn));
        }

        this.render();
    }

    render() {
        for (var i = 0; i < 8; i++) {
            for(var j = 0; j < 8; j++) {
                var piece = this.board[i][j].getPiece();
                if (piece?.getType() === Type.pawn) {
                    process.stdout.write('p ' );
                } else if (piece?.getType() === Type.rook) {
                    process.stdout.write('r ');
                } else if (piece?.getType() === Type.knight) {
                    process.stdout.write('k ');
                } else if (piece?.getType() === Type.bishop) {
                    process.stdout.write('b ');
                } else if (piece?.getType() === Type.king) {
                    process.stdout.write('k ');
                } else if (piece?.getType() === Type.queen) {
                    process.stdout.write('1 ');
                } else {
                    process.stdout.write('- ')
                }
            }
            console.log();
        }
    }
}

var game = new Game();