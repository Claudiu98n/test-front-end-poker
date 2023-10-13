import React from 'react';
import { StyledSquare } from './Square.styles';

export default function Square({ value, onClick }) {
    return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
}
