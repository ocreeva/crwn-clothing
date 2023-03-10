import { useState } from 'react';

import { signInWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';

import Button from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';

import './AuthenticationForm.styles.scss';

const defaultAuthentication = {
    email: '',
    password: '',
};

const AuthenticationForm = () => {
    const [ authentication, setAuthentication ] = useState(defaultAuthentication);
    const { email, password } = authentication;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try
        {
            const { user } = await signInWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user);
            setAuthentication(defaultAuthentication);
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                alert("Incorrect email or password")
            } else {
                console.log("Error in email/password authentication", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAuthentication({ ...authentication, [name]: value });
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="authentication">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput labelText="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput labelText="Password" required type="password" onChange={handleChange} name="password" value={password} minLength={6} />
                <div className="button-container">
                    <Button>Sign In</Button>
                    <Button type='button' buttonType="sign-in" onClick={logGoogleUser}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default AuthenticationForm;
