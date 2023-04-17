import { useAppDispatch } from "App/hooks";
import { setRegistrationProperties } from "features/user";

import { useState } from "react";

import { registerUserWithEmailAndPassword } from "services/auth";
import { FirebaseError } from "firebase/app";

import * as S from "./RegistrationForm.styles";
import Button from "components/Button";
import FormInput from "components/FormInput";

import type { ChangeEventHandler, FC, FormEventHandler } from "react";

const defaultRegistration = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const RegistrationForm: FC = () => {
    const [ registration, setRegistration ] = useState(defaultRegistration);
    const { displayName, email, password, confirmPassword } = registration;

    const dispatch = useAppDispatch();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try
        {
            dispatch(setRegistrationProperties({ displayName }));
            await registerUserWithEmailAndPassword(email, password);
        } catch (error) {
            if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
                alert("Email has already been registered.");
            } else {
                console.log("Error in email/password registration", error);
            }
        }
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const { name, value } = event.target;
        setRegistration({ ...registration, [name]: value });
    }

    return (
        <S.RegistrationForm>
            <S.FormTitle>Don't have an account?</S.FormTitle>
            <S.FormDescription>Sign up with your email and password</S.FormDescription>
            <form onSubmit={handleSubmit}>
                <FormInput labelText="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput labelText="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput labelText="Password" required type="password" onChange={handleChange} name="password" value={password} minLength={6} />
                <FormInput labelText="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} minLength={6} />
                <Button type="submit">Sign Up</Button>
            </form>
        </S.RegistrationForm>
    );
};

export default RegistrationForm;
