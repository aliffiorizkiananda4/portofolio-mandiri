import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TicTacToe.css';

const WINNING_LINES = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6],          // diagonals
];

function checkWinner(board) {
  for (const [a,b,c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a,b,c] };
    }
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const navigate = useNavigate();

  const result = checkWinner(board);
  const isDraw = !result && board.every(Boolean);

  const handleClick = (i) => {
    if (board[i] || result) return;
    const next = board.slice();
    next[i] = isX ? 'X' : 'O';
    setBoard(next);
    const newResult = checkWinner(next);
    if (newResult) {
      setScores(s => ({ ...s, [newResult.winner]: s[newResult.winner] + 1 }));
    }
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  const resetAll = () => {
    reset();
    setScores({ X: 0, O: 0 });
  };

  const status = result
    ? `${result.winner} Menang!`
    : isDraw
    ? 'Seri!'
    : `Giliran ${isX ? 'X' : 'O'}`;

  return (
    <div className="ttt-page">
      <button className="ttt-back" onClick={() => navigate('/')}>
        ← Kembali ke Portofolio
      </button>

      <div className="ttt-container">
        <h1 className="ttt-title">Tic Tac <span>Toe</span></h1>

        <div className="ttt-scores">
          <div className={`ttt-score ${isX && !result && !isDraw ? 'active' : ''}`}>
            <span className="ttt-score-label">Player X</span>
            <span className="ttt-score-num">{scores.X}</span>
          </div>
          <div className="ttt-score-divider">VS</div>
          <div className={`ttt-score ${!isX && !result && !isDraw ? 'active' : ''}`}>
            <span className="ttt-score-label">Player O</span>
            <span className="ttt-score-num">{scores.O}</span>
          </div>
        </div>

        <div className={`ttt-status ${result ? 'win' : isDraw ? 'draw' : ''}`}>
          {status}
        </div>

        <div className="ttt-board">
          {board.map((cell, i) => {
            const isWinCell = result?.line.includes(i);
            return (
              <button
                key={i}
                className={`ttt-cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''} ${isWinCell ? 'win-cell' : ''}`}
                onClick={() => handleClick(i)}
                disabled={!!cell || !!result}
              >
                {cell}
              </button>
            );
          })}
        </div>

        <div className="ttt-actions">
          <button className="ttt-btn" onClick={reset}>Main Lagi</button>
          <button className="ttt-btn ttt-btn-outline" onClick={resetAll}>Reset Skor</button>
        </div>
      </div>
    </div>
  );
}
