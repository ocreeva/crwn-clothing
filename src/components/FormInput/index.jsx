import * as S from './styles';

const FormInput = ({ labelText, ...otherProps }) => {
    return (
        <S.FormInput>
            <S.InputField {...otherProps} />
            {labelText && (
                <S.InputLabel $shrink={otherProps.value.length}>{labelText}</S.InputLabel>
            )}
        </S.FormInput>
    )
}

export default FormInput;
