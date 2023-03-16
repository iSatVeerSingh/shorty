import React from 'react';
import LinkButton from '../components/Buttons/LinkButton';

const Home = () => {
  return (
    <div className='text-center py-12'>
      <h1 className='text-5xl mb-4'>Simple and fast link shortening service</h1>
      <h2 className='text-3xl'>
        Track who clicks on your links and get notified
      </h2>
      <div className='flex flex-col gap-4 items-center mt-5'>
        <LinkButton to='/signup' btnText='SignUp' />
        <LinkButton to='/login' btnText='Login' />
      </div>
    </div>
  );
};

export default Home;
