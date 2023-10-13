import { calculateWinner } from '../../utils/calculateWinner';

export const computeStatus = (squares, currentPlayer) => {
    const winner = calculateWinner(squares);

    if (winner) {
        return `Winner: ${winner}`;
    }

    if (squares.every((square) => square)) {
        return 'Draw';
    }

    return `Current Player: ${currentPlayer}`;
};
