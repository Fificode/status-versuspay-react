import React from 'react'
import logo from '../assets/img/versuspaylogo.svg'
const Login = () => {
  return (
    <>
     <div className='h-[100vh]'>
        <div className="bg-bground-blue h-20 shadow-md">
            <img src={logo} alt="Versus pay logo" className='w-40 h-20 p-3' />
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-20 px-4 w-80 h-80 shadow-md bg-white">
            <h1 className="text-3xl pt-4 font-[600] text-black text-center">Log in</h1>
            <div className="flex flex-col  p-3">
              <form >
                <div className="py-3 flex flex-col">
                  <label htmlFor="email" className='text-l font-[500] pb-1'>Email</label>
                  <input type="email" name="email" id="email" autoComplete="off" value="" required  className='w-full px-3 py-2 border border-black border-solid outline-bground-blue rounded' placeholder='Enter email address' />
                </div>
                <div className="py-3 flex flex-col">
                  <label htmlFor="password" className='text-l font-[500] pb-1'>Password</label>
                  <input type="password" name="password" id="password"  required className='w-full px-3 py-2 border border-black border-solid outline-bground-blue rounded' placeholder='Enter password' />
                </div>
                <div className="py-3 flex justify-center">
                  <button type="submit" className='w-full px-4 py-3 text-white bg-bground-blue rounded text-center text-[17px] font-[500]'>Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login