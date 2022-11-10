import React from 'react'
import ShowAccount from '../../components/ShowAccount'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f669a8f4-de1e-49d7-bb56-c9bd1f4a9069/39c8d004-e406-410f-a3b7-2f0a314307ef/VN-en-20221031-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
      />
    <div className='bg-black/50 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 sm:p-8'>
      <h2 className='text-3xl md:text-5xl font-bold '>My Shows</h2>
    </div>
    </div>
    <ShowAccount />
    </>
  )
}

export default Account
