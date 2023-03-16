import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailVerification from '../components/Account/EmailVerification';
import SubmitButton from '../components/Buttons/SubmitButton';
import InputBox from '../components/Input/InputBox';
import Loading from '../components/Loading/Loading';
import { userSignup } from '../services/userApi';
import validateForm from '../utils/validateForm';

const Signup = () => {
  const [formErrors, setFormErrors] = useState(null);
  const [isSignup, setIsSignup] = useState({
    loading: false,
    data: false,
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);

    const formdata = {
      name: formValues.get('name')?.toString().trim(),
      email: formValues.get('email')?.toString().trim(),
      password: formValues.get('password')?.toString().trim(),
    };

    const isInvalid = validateForm(formdata, 'signup');

    if (isInvalid) {
      setFormErrors(isInvalid);
      return;
    }
    setFormErrors(null);
    setIsSignup({ loading: true });
    const { success, error, data } = await userSignup(formdata);
    if (success && !error) {
      setIsSignup({ loading: false, data: data });
    } else {
      setIsSignup({ loading: false });
      setFormErrors({ email: data });
    }
  };

  if (isSignup.loading) {
    return <Loading />;
  }
  if (isSignup.data) {
    return <EmailVerification data={isSignup.data} />;
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='bg-emerald-100 p-4 rounded min-w-[400px]'>
        <h1 className='text-4xl'>Create New Account</h1>
        <form className='mt-3' onSubmit={handleSignup}>
          <InputBox
            type='text'
            name='name'
            id='signup_name'
            label='Name'
            placeholder='Enter your name'
            inputError={formErrors?.name}
          />
          <InputBox
            type='text'
            name='email'
            id='signup_email'
            label='Email'
            placeholder='Enter your email'
            inputError={formErrors?.email}
          />
          <InputBox
            type='password'
            name='password'
            id='signup_password'
            label='Password'
            placeholder='Enter your password'
            inputError={formErrors?.password}
          />
          <SubmitButton btnText='Signup' />
        </form>
        <p className='mt-4'>
          <span>Already have an account </span>{' '}
          <Link className='text-red-400' to='/login'>Login Here</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
