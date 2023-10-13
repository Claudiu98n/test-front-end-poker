import { StyledButton } from './Button.styles';

export default function Button({ children, onClick, disabled }) {
    return (
        <StyledButton disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
}
