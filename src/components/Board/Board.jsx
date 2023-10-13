import React from 'react';
import Square from '../Square/Square';
import { BoardGrid } from './Board.styles';

export default function Board({ squares, onClick }) {
    return (
        <BoardGrid>
            {squares.map((value, i) => (
                <Square key={i} value={value} onClick={() => onClick(i)} />
            ))}
        </BoardGrid>
    );
}
