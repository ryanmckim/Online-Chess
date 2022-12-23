import "./Chessboard.css";
import "../models/game";
import "../models/piece";
import "../models/square";

const Chessboard = () => {
    return (
        <div className="board-container app-item">
            <div className="board"></div>
        </div>
    );
};

export default Chessboard;
