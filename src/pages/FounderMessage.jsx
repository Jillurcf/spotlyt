import React from "react";
import ceoImg from '../assets/Images/CEO.jpg'

const FounderMessage = () => {
  return (
    <div className="max-w-screen-lg mx-auto lg:mt-24">
      <div className="text-center">
        <h1 className=" font-bold text-4xl">Message from our Founder</h1>
        <div className="border-b-2 border-green-700 w-1/12 py-4 mx-auto"></div>
      </div>
      <h2 className="text-4xl py-8 text-center">
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fuga
        dolorum eos, placeat aspernatur nostrum laudantium. Neque praesentium
        fuga voluptatem.Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Eum fuga dolorum eos, placeat aspernatur nostrum laudantium. Neque
        praesentium fuga voluptatem. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eum fuga dolorum eos, placeat aspernatur nostrum
        laudantium. Neque praesentium fuga voluptatem."
      </h2>
      {/* CEO */}
      <div className="mx-auto mt-4">
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden mx-auto">
      <img src={ceoImg} alt="image" />
      </div>
      <h1 className="text-center">CODCEND NKUNA</h1>
      <h4 className="text-center">CEO, Spotlyt</h4>
      </div>
    </div>
  );
};

export default FounderMessage;
