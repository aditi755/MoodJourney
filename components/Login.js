import { Fugaz_One } from 'next/font/google'
import React from 'react'
import Button from './Button'
const fugaz = Fugaz_One({ subsets: ["latin"] , weight: ['400']})
const Login = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4 ">
      <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>Log In  / Register</h3>
      <p>You&#39;re one step away!</p>
      <input className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 outline-none rounded-full hover:border-indigo-600" placeholder="Email"/>
      <input className="w-full max-w-[400px]  mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 outline-none rounded-full hover:border-indigo-600" placeholder='Password' type="password"/>
     
     <div className="max-w-[400px] w-full mx-auto">
     <Button text="Submit" full/>
     </div>
    <p className="text-center">Dont have an account? <span className="text-indigo-600">Sign Up</span></p>
    </div>
  )
}

export default Login