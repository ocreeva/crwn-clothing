import * as S from './FormInput.styles';

import type { FC, InputHTMLAttributes } from 'react';

type FormInputProps = {
    labelText: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ labelText, ...otherProps }) => {
    const $shrink = Boolean(typeof otherProps.value === "string" && otherProps.value.length);

    return (
        <S.FormInput>
            <S.InputField {...otherProps} />
            <S.InputLabel $shrink={$shrink}>{labelText}</S.InputLabel>
        </S.FormInput>
    )
}

export default FormInput;
