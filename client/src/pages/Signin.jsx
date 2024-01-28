import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../config/user/userSlice';

function Signin() {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const {loading, error} = useSelector((state) => state.user);

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    )
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      } )
      const data = await res.json();
      
      if(!data.success && !data._doc) {
        dispatch(signInFailure(data.message)); 
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(data.message)); 
    }
  }

  return (
    <div>
     <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold m-6'>Sign In</h1>
      <div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type="text" placeholder='email' className='rounded-lg border-2 px-4 py-2' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='rounded-lg border-2 px-4 py-2' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg hover:bg-slate-800 disabled:opacity-80'>{loading?"Loading...":"Sign In"}</button>
        </form>
        <p className='py-2 text-center text-red-600'>{error}</p>
        <div className='flex gap-2 mt-5'>
          <p>New User?</p>
          <Link to={'/sign-up'} className='text-blue-600 '>Sign Up</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signin
