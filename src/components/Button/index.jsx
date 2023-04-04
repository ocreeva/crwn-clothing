import * as S from './styles.jsx';

export const ButtonType = Object.freeze({
    Default: Symbol("Default"),
    Inverted: Symbol("Inverted"),
    SignIn: Symbol("SignIn"),
});

const getTypedButton = (buttonType) => ({
    [ButtonType.Default]: S.Button,
    [ButtonType.Inverted]: S.InvertedButton,
    [ButtonType.SignIn]: S.SignInButton,
}[buttonType]);

const Button = ({ children, buttonType = ButtonType.Default, isLoading, ...buttonProps }) => {
    const TypedButton = getTypedButton(buttonType);
    return (
        <TypedButton disabled={isLoading} {...buttonProps}>
            { isLoading ? <S.ButtonLoadingImage /> : children }
        </TypedButton>
    );
}

export default Button;
