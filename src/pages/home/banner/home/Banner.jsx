import React, { useEffect, useState } from "react";
import backgroundImage from "../../../../assets/Images/bannerBackground.jpg";
import { FaRegArrowAltCircleDown, FaWhatsapp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import mobileImg from '../../../../assets/Images/mobile.jpg'
import {motion} from "framer-motion";

const Banner = () => {
  const bannerStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
// const [scale, setScale] = useState(1);
const [isHovered, setIsHovered] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      // setScale(1.2);
      setIsHovered(true)
    } else {
      // setScale(1)
      setIsHovered(true)
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

// const handleHover = () => {
//   setScale(1.2);
// }
const handleHoverStart = () => setIsHovered(true);
const handleHoverEnd = () => setIsHovered(false)

// const handleHoverEnd = () => {
//   setScale(1)
// }


  return (
    <motion.div
    className="flex-1"
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    onDrag={handleHoverStart}
    style={bannerStyle}>
      <div className="items-center mx-auto lg:flex justify-between">
        <div className="flex-1 mx-auto lg:px-24 px-4 text-white ">
          <div className=" h-[100vh] py-[20vh] flex-1 space-y-3">
            <h4 className="lg:text-2xl">WELCOME TO SPOTLYT</h4>
            <h1 className="lg:text-6xl text-xl text-white font-bold">
              Get Paid For <br /> Doing Short Tasks <br /> Through Spotlyt
            </h1>
            <div className="lg:flex lg:space-x-8 py-8">
              <div className="py-2">
                <button className="flex items-center px-4 py-2 border-2 hover:border-none text-white font-bold hover:bg-white hover:text-green-900 transition-colors duration-0 rounded">
                  <FaWhatsapp className="mr-2 text-lg hover:text-green-900 transition-colors duration-0" />
                  <span>Download App</span>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 border-2 hover:border-none text-white font-bold hover:bg-white hover:text-green-900 transition-colors duration-0 rounded">
                  <FaRegArrowAltCircleDown className="mr-2 text-lg hover:text-green-900 transition-colors duration-0" />
                  <span>WhatsApp Channel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="flex-1">
         <div className="flex">
         <div className="lg:w-[80%] w-[50vw] mx-auto lg:mx-0 -mt-10">
            <img className="lg:w-[80%] lg:mt-36 rounded-3xl" src={mobileImg} alt="" />
          </div>
          <motion.div
          // style={{scale}}
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? 30 : 0,
          }}
          transition={{type: "bounce", stiffness: 300}}
          //  whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 1.1 }}
           drag="x"
           dragConstraints={{ left: -100, right: 100 }}
          className="lg:mt-96 text-white hidden lg:inline-block ">
            <h4 className="rotate-90 ">
            <span className="">SCROLL-DOWN</span>  <BsArrowRight className="absolute left-32 bottom-1" />
          
          </h4>
        
          </motion.div>
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
