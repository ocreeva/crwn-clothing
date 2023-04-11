import { ButtonType } from "./ButtonType";

import * as S from "./Button.styles";

import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const getTypedButton: (buttonType: ButtonType) => typeof S.Button = (buttonType) => ({
    [ButtonType.Default]: S.Button,
    [ButtonType.Inverted]: S.InvertedButton,
    [ButtonType.SignIn]: S.SignInButton,
}[buttonType]);

type ButtonProps = {
    buttonType: ButtonType;
    isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, buttonType = ButtonType.Default, isLoading = false, ...buttonProps }) => {
    const TypedButton = getTypedButton(buttonType);
    return (
        <TypedButton disabled={isLoading} {...buttonProps}>
            { isLoading ? <S.ButtonLoadingImage /> : children }
        </TypedButton>
    );
}

export default Button;
