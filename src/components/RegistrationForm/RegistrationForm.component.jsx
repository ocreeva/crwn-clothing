import { useState } from 'react';

import { createUserDocumentFromAuth, registerUserWithEmailAndPassword } from '../../utility/firebase/firebase.utility';

import Button from '../Button/Button.component';
import FormInput from '../FormInput/FormInput.component';

import './RegistrationForm.styles.scss';

const defaultRegistration = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const RegistrationForm = () => {
    const [ registration, setRegistration ] = useState(defaultRegistration);
    const { displayName, email, password, confirmPassword } = registration;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try
        {
            const { user } = await registerUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth({ ...user, displayName });
            setRegistration(defaultRegistration);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email has already been registered.");
            } else {
                console.log("Error in email/password registration", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegistration({ ...registration, [name]: value });
    }

    return (
        <div className="registration">
            <h2>Don't have an account?</h2>
            <span>Sign up with email/password</span>
            <form onSubmit={handleSubmit}>
                <FormInput labelText="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput labelText="Email" required type="email" onChange={handleChange} name="email" value={email} />
                <FormInput labelText="Password" required type="password" onChange={handleChange} name="password" value={password} minLength={6} />
                <FormInput labelText="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} minLength={6} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default RegistrationForm;
