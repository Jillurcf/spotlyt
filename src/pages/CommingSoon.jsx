import React, { useEffect, useRef, useState } from 'react'
import downloadImg from '../assets/Images/downloadApp.png'
import {motion} from "framer-motion";

const CommingSoon = () => {

const ref = useRef(null);
const [inView, setInView] = useState(false)

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if(entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    }
  );
  if(ref.current) {
    observer.observe(ref.current)
  }

  return () => {
    if(ref.current) {
      observer.unobserve(ref.current);
    }
  }
}, [])



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
        <motion.div
        // animate={{ x: [null, 100, 0] }}
        // animate={{ x: [0, 100, 0] }}
        ref={ref}
        initial={{ opacity: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        animate={inView ? {opacity: 1, scale: 1} : {}}
        transition={{ duration: 0.5 }}
        >
            <img src={downloadImg} alt="" />
        </motion.div>
        <div>
        <img src={downloadImg} alt="" />
        </div>
    </div>
    </div>
  )
}

export default CommingSoon;