import './Button.styles.scss';

const BUTTON_TYPE = {
    inverted: 'inverted',
    signIn: 'sign-in'
}

const Button = ({ children, buttonType, ...buttonProps }) => {
    return (
        <button className={`${BUTTON_TYPE[buttonType]}`} {...buttonProps}>
            { children }
        </button>
    );
}

export default Button;
