import * as S from "./styles";
import AuthenticationForm from "./AuthenticationForm";
import RegistrationForm from "./RegistrationForm";

const SignInPage = () => {
    return (
        <S.FormContainer>
            <AuthenticationForm />
            <RegistrationForm />
        </S.FormContainer>
    );
};

export default SignInPage;
