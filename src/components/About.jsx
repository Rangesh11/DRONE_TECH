import React from 'react'

export default function About() {
  return (
    <section id="about"className='max-w-full flex flex-row max-lg:flex-col max-lg:gap-4 justify-center items-center'>

            <div className=" px-4 py2  space-y-4 text-xl ">

            <h1 className='font-bold'>About</h1>

            <div className="max-w-6xl text-justify">
            Sri Eshwar Drone Tech Pvt Ltd is a DGCA authorised Remote Pilot Training Organisation. 
            It offers Remote Pilot Training Certificate (RPC) course for Drone pilots.
            By offering a comprehensive curriculum, it aims to enhance your skills for agriculture, photography, videography, surveillance, mapping, inspection, public safety, and other aerial industrial solutions.
            The facility is equipped with state-of-the-art infrastructure to support theoretical knowledge, practical skills, and safety procedures required for remote pilot certification and operations.
            </div>
            
            </div>

            <aside className= 'max-w-fit p-2 rounded-full'>
                <img
                src='https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_23766_1686923452020917.jpg'
                alt="Drone"
                className='rounded-3xl'
               
                />
            </aside>

    </section>
  )
}