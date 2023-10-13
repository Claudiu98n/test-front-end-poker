import { createSlice } from '@reduxjs/toolkit';
import { calculateWinner } from '../../utils/calculateWinner';

const initialState = {
    player1: '',
    player2: '',
    currentPlayer: null,
    squares: Array(9).fill(null),
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setPlayerNames: (state, action) => {
            state.player1 = action.payload.player1;
            state.player2 = action.payload.player2;
            state.currentPlayer = action.payload.player1;
        },
        updateSquare: (state, action) => {
            const squares = [...state.squares];
            if (squares[action.payload] || calculateWinner(squares)) {
                return;
            }

            const isCurrentPlayerFirstPlayer = state.currentPlayer === state.player1;
            squares[action.payload] = isCurrentPlayerFirstPlayer ? 'X' : 'O';
            state.squares = squares;
            state.currentPlayer = isCurrentPlayerFirstPlayer ? state.player2 : state.player1;
        },
        restartGame: (state) => {
            state.squares = Array(9).fill(null);
            state.currentPlayer = state.player1;
        },
        startNewGame: (state) => {
            state.player1 = '';
            state.player2 = '';
            state.currentPlayer = null;
            state.squares = Array(9).fill(null);
        },
    },
});

export const { setPlayerNames, updateSquare, restartGame, startNewGame } = gameSlice.actions;

export default gameSlice.reducer;
