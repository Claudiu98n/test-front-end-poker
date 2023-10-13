// StartGame.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPlayerNames } from '../../store/slices/gameSlice';
import Button from '../../common/Button/Button';
import TextInput from '../../common/TextInput/TextInput';
import { paths } from '../../router/paths';
import { StartGameContainer, StartGameHeading, TextInputWrapper } from './StartGame.styles';

export default function StartGame() {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleStartGame = () => {
        dispatch(setPlayerNames({ player1, player2 }));
        navigate(paths.game);
    };

    const isDisabled = !player1 || !player2 || player1 === player2;
    return (
        <StartGameContainer>
            <StartGameHeading>Start New Game</StartGameHeading>
            <TextInputWrapper>
                <TextInput
                    label='Choose Player 1 name:'
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                />
            </TextInputWrapper>
            <TextInputWrapper>
                <TextInput
                    label='Choose Player 2 name:'
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                />
            </TextInputWrapper>
            <Button disabled={isDisabled} onClick={handleStartGame}>
                Start New Game
            </Button>
        </StartGameContainer>
    );
}
