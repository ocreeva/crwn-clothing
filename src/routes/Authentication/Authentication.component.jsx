import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm.component';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.component';

import './Authentication.styles.scss';

const SignIn = () => {
    return (
        <div className='form-container'>
            <AuthenticationForm />
            <RegistrationForm />
        </div>
    )
}

export default SignIn;
