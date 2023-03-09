import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utility/firebase/firebase.utility';

import Button from '../../components/Button/Button.component';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <Button buttonType='signIn' onClick={logGoogleUser}>Sign in with Google</Button>
            <RegistrationForm />
        </div>
    )
}

export default SignIn;
