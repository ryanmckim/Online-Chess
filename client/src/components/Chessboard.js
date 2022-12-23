import "./Chessboard.css";
import React, { useState } from 'react';

const Chessboard = () => {

    const [board, setBoard] = useState([[],[],[],[],[],[],[],[]]);

    return (
        <div className="board-container app-item">
            <div className="board"></div>
        </div>
    );
};

export default Chessboard;
