import React from 'react';
import Logo from '../assets/Logo.png';

export default function Contact() {
  return (
    <footer id="contact_me" className='flex flex-col m-5 gap-4 p-4 relative'>
      <div className='flex flex-col gap-3 md:flex-row justify-between items-center'>
        <img className='h-20 w-40 md:h-26 md:w-52' src={Logo} alt="Logo" />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p>Kinathukadavu, Coimbatore, Tamilnadu</p>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <p>
           <a href="tel:+917418245899">+91 74182 45899</a>,{' '}
            <a href="tel:+919500635060">+91 95006 35060</a>
</p>
          </div>
        </div>
      </div>

      <hr className='my-4 border-t border-gray-200' />

      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
       
        <p className="text-center md:text-left">
          © Copyright 2024, All Rights Reserved
        </p>
      </div>

      <div className='absolute inset-0 bg-white opacity-25 rounded-lg shadow-xl' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}></div>
      <div className='absolute inset-0 rounded-lg shadow-xl' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}></div>
    </footer>
  );
}