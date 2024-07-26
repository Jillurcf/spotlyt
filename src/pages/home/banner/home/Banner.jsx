import React, { useEffect, useState } from "react";
import backgroundImage from "../../../../assets/Images/bannerBackground.jpg";
import { FaRegArrowAltCircleDown, FaWhatsapp, FaFacebookSquare, FaInstagram, FaTiktok  } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import mobileImg from '../../../../assets/Images/mobile1.png'
import {motion} from "framer-motion";

const Banner = () => {
  const whatsappNumber = "01643989705";

  const bannerStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
// const [scale, setScale] = useState(1);
const [isHovered, setIsHovered] = useState(false);
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      // setScale(1.2);
      setIsHovered(true)
      setIsVisible(true)
    } else {
      // setScale(1)
      setIsHovered(true)
      setIsVisible(true)
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
const handleHoverStart = () => {
  setIsHovered(true);
  setIsVisible(true);

}
const handleHoverEnd = () => {
  setIsHovered(false)
}

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
      <div className=" items-center mx-auto lg:flex justify-between">
        <div className="flex-1 mx-auto px-4 text-white ">
          <div className=" mx-auto h-[100vh] py-[20vh]  space-y-3 lg:w-7/12">
            <h4 className="lg:text-2xl">WELCOME TO SPOTLYT</h4>
            <h1 className="lg:text-5xl text-2xl text-white font-bold">
              Get Paid For <br /> Doing Short Tasks <br /> Through Spotlyt
            </h1>
            <div className="lg:flex lg:space-x-8 py-8">
              <div className="py-2 lg:py-0 lg:py">
                <button className="flex items-center px-4 py-2 border-2 hover:border-none text-white font-bold hover:bg-white hover:text-green-900 transition-colors duration-0 rounded">
                  <FaWhatsapp className="mr-2 text-lg hover:text-green-900 transition-colors duration-0" />
                  <span>Download App</span>
                </button>
              </div>
              <div className="relative">
                <button 
                 onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hello%20World`, '_blank')}
                // onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="flex items-center px-4 py-2 border-2 hover:border-none text-white font-bold hover:bg-white hover:text-green-900 transition-colors duration-0 rounded">
                  <FaRegArrowAltCircleDown className="mr-2 text-lg hover:text-green-900 transition-colors duration-0" />
                  <span>WhatsApp Channel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="lg:w-5/12 mt-14 lg:mt-0">
         <div className="flex">
         <motion.div
         initial={{opacity: 0, y: 20}}
         animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
         }}
         transition={{duration: 1}}
         className="lg:w-[80%] w-[50vw] mx-auto lg:mx-0 -mt-10">
            <img className="lg:w-[70%] lg:mt-36 rounded-3xl" src={mobileImg} alt="" />
          </motion.div>


        
        <div  className="mt-36">
          {/* Social Icon */}

        <div className="flex lg:block pr-2 lg:pr-0 lg:space-y-4 space-x-2 lg:space-x-0 text-white lg:pl-12">
         <div className=" pb-12 opacity-40 border-b-2 rotate-90"></div>
  <FaFacebookSquare />
  <FaInstagram />
  <FaTiktok />
</div>


  {/* Drop Down */}
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
          className="lg:mt-24 text-white hidden lg:inline-block ">
            <h4 className="rotate-90 ">
            <span className="">SCROLL DOWN</span>  <BsArrowRight className="absolute left-32 bottom-1" />
          
          </h4>
        
          </motion.div>
        </div>
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
