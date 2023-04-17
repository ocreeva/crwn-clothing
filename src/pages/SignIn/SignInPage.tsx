import * as S from "./SignInPage.styles";
import AuthenticationForm from "./components/AuthenticationForm";
import RegistrationForm from "./components/RegistrationForm";

import type { FC } from "react";

const SignInPage: FC = () => {
    return (
        <S.FormContainer>
            <AuthenticationForm />
            <RegistrationForm />
        </S.FormContainer>
    );
};

export default SignInPage;
