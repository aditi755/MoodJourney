import { Fugaz_One } from 'next/font/google'
import React from 'react'
import Button from './Button'
import Calender from './Calender'
import Link from 'next/link'
const fugaz = Fugaz_One({ subsets: ["latin"] , weight: ['400']})

const Hero = () => {
  return (
    <div className="py-10 sm:py-14 md:py-20 flex flex-col sm:gap-8">
     <h1 className={'text-center text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-0 ' + fugaz.className}> <span className='textGradient'>Broodl </span>

     <span>
         helps you track your <span className='textGradient '>daily</span> <span>mood!</span>
        </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">Create your mood record and see how you feel on <span className='font-semibold'>every day of year.</span></p>

        <div className="grid grid-cols-2 gap-4 mx-auto w-fit mt-5 mb-3 sm:mb-0 md:mb-0 sm:mt-0 md:mt-0 ">
          <Link href={'/dashboard'}>
          <Button text="Sign Up"/>
          
          </Link>
           <Link href={'/dashboard'}>
           <Button text="Login" dark/>
           </Link>
           
        </div>
        <Calender demo/>
    </div>
  )
}

export default Hero