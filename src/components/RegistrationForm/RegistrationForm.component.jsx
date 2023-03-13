import { useContext, useState } from 'react';

import { registerUserWithEmailAndPassword } from '../../utility/firebase/firebase.utility';
import UserContext from '../../context/UserContext';

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
    const { setAdditionalProperties } = useContext(UserContext);
    const [ registration, setRegistration ] = useState(defaultRegistration);
    const { displayName, email, password, confirmPassword } = registration;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try
        {
            setAdditionalProperties({ displayName });
            await registerUserWithEmailAndPassword(email, password);
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
            <span>Sign up with your email and password</span>
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
