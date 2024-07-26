import React from 'react'
import downloadImg from '../assets/Images/downloadApp.png'

const CommingSoon = () => {
  return (
    <div className='bg-green-500 h-[600px] mt-36'>
       <div className="text-center">
        <h1 className=" font-bold text-4xl py-12 text-white">Spotlyt App Comming Soon</h1>
        <div className="border-b-2 border-green-700 w-1/12 py-2 mx-auto"></div>
       <div className='max-w-screen-md mx-auto'>
       <h4 className='text-gray-500 text-2xl py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nihil facere ex, quod ab deserunt magni enim officia voluptates?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi nihil facere ex, quod ab deserunt magni enim officia voluptates?
        </h4>
       </div>
      </div>
    <div className='flex space-x-6 mx-auto max-w-screen-md py-8'>
        <div>
            <img src={downloadImg} alt="" />
        </div>
        <div>
        <img src={downloadImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default CommingSoon