import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateSquare, restartGame, startNewGame } from '../../store/slices/gameSlice';
import { paths } from '../../router/paths';
import { GameContainer, ButtonsWrapper, GameStatus } from './Game.styles';
import Button from '../../common/Button/Button';
import Board from '../Board/Board';
import { computeStatus } from './Game.utils';

export default function Game() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { squares, currentPlayer } = useSelector((state) => state.game);

    const handleClick = (i) => {
        if (!currentPlayer) {
            return;
        }

        dispatch(updateSquare(i));
    };

    const handleStartNewGame = () => {
        dispatch(startNewGame());
        navigate(paths.startGame);
    };

    const status = computeStatus(squares, currentPlayer);
    return (
        <GameContainer>
            <GameStatus>{status}</GameStatus>
            <Board squares={squares} onClick={handleClick} />
            <ButtonsWrapper>
                <Button onClick={() => dispatch(restartGame())}>Restart Game</Button>
                <Button onClick={handleStartNewGame}>New Game</Button>
            </ButtonsWrapper>
        </GameContainer>
    );
}
