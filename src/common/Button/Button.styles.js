import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f2f2f2;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
