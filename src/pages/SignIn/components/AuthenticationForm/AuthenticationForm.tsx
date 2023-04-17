import { useState } from "react";

import { signInWithEmailAndPassword, signInWithGooglePopup } from "services/auth";
import { FirebaseError } from "firebase/app";

import * as S from "./AuthenticationForm.styles";
import Button, { ButtonType } from "components/Button";
import FormInput from "components/FormInput";

import type { ChangeEventHandler, FC, FormEventHandler } from "react";

const defaultAuthentication = {
    email: "",
    password: "",
};

const AuthenticationForm: FC = () => {
    const [ authentication, setAuthentication ] = useState(defaultAuthentication);
    const { email, password } = authentication;

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        try
        {
            await signInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error instanceof FirebaseError && error.code === 'auth/wrong-password') {
                alert("Incorrect email or password")
            } else {
                console.log("Error in email/password authentication", error);
            }
        }
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setAuthentication({ ...authentication, [name]: value });
    };

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    return (
        <S.AuthenticationForm>
            <S.FormTitle>I already have an account</S.FormTitle>
            <S.FormDescription>Sign in with your email and password</S.FormDescription>
            <form onSubmit={handleSubmit}>
                <FormInput labelText="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput labelText="Password" required type="password" onChange={handleChange} name="password" value={password} minLength={6} />
                <S.FormButtonContainer>
                    <Button>Sign In</Button>
                    <Button type='button' buttonType={ButtonType.SignIn} onClick={logGoogleUser}>Sign In with Google</Button>
                </S.FormButtonContainer>
            </form>
        </S.AuthenticationForm>
    );
}

export default AuthenticationForm;
