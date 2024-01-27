import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate(); 

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

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
      setErr("")
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      } )
      const data = await res.json();

      if(data){
        navigate('/sign-in');
      }
      setErr("")
    } catch (error) {
      console.log("error in data input")
      setErr(error?.message)
    }finally{
      setLoading(false);
    }
  }



  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold m-6'>Sign Up</h1>
      <div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input type="text" placeholder='username' className='rounded-lg border-2 px-4 py-2' id='username' onChange={handleChange}/>
          <input type="text" placeholder='email' className='rounded-lg border-2 px-4 py-2' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='rounded-lg border-2 px-4 py-2' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 p-3 text-white rounded-lg hover:bg-slate-800 disabled:opacity-80'>{loading?"Loading...":"Sign Up"}</button>
        </form>
        <p className='py-2 text-center text-red-600'>{err}</p>
        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to={'/sign-in'} className='text-blue-600 '>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
