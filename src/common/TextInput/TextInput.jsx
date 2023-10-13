import { StyledTextInput, StyledTextInputWrapper } from './TextInput.styles';

export default function TextInput({ value, onChange, label }) {
    return (
        <StyledTextInputWrapper>
            {label && <label>{label}</label>}
            <StyledTextInput value={value} onChange={onChange} />
        </StyledTextInputWrapper>
    );
}
