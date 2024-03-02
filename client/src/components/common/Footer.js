import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between mt-4 p-5 text-neutral-600 bg-neutral-300'>
            
            <div className='w-1/2 ml-4'>
            <p className='font-bold text-xl'>About Us</p>
            <br></br>
            <p className='h-20'>BloodUnity is a platform that connects blood doners with patients in need of blood. It aim to provide faster blood services and raise awareness through NGO blood donation campaigns.</p>
            </div>
            
            <div className='w-1/7 mr-4'>
            <p className='font-bold text-xl'>Contact Us</p>
            <br></br>
            <p>abc@gmail.com</p>
            <p>+91 XXXXXXXXXX</p>
            </div>
            
        </div>
        <div className='flex mb-0  justify-center p-6 text-center bg-neutral-700'>
            <p className='text-white'>© 2024 Copyright</p>
        </div>
    </div>
  )
}

export default Footer