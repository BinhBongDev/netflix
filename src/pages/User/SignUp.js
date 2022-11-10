import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import {UserAuth} from '../../context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {user, signUp} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/39c8d004-e406-410f-a3b7-2f0a314307ef/VN-en-20221031-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed top-0 left-0 w-full px-4 py-24 z-100'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h2 className='text-3xl font-bold'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='flex w-full flex-col py-4'>
              <input className='p-3 my-2 rounded bg-gray-700' type={'email'} placeholder={"Enter your Email"}
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email" />
              <input className='p-3 my-2 rounded bg-gray-700' type={'password'} placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete='current-password' />
              <button type={'submit'} className='bg-red-600 rounded py-3 my-6 font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-500'>
                <p><input type={'checkbox'} /> Remember me?</p>
                <p>Need help?</p>
              </div>
              <p className='py-4'><span className='text-gray-600'>Already subscribled to Nextflix? </span><Link to={'/login'}> {' '}Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp