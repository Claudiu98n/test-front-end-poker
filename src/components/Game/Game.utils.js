import { calculateWinner } from '../../utils/calculateWinner';

export const computeStatus = (squares, currentPlayer, player1, player2) => {
    const winner = calculateWinner(squares);

    if (winner) {
        const winnerName = winner === 'X' ? player1 : player2;
        return `Winner: ${winnerName} (${winner})`;
    }

    if (squares.every((square) => square)) {
        return 'Draw';
    }

    return `Current Player: ${currentPlayer}`;
};
