import React from "react";
import { TbCalendarUser, TbChartHistogram } from "react-icons/tb";
import { SiAffinitydesigner } from "react-icons/si";

const AboutSpotlyt = () => {
  return (
   <div className="max-w-screen-lg mx-auto">
    <div className="lg:flex mt-24 lg:mt-48 pb-12">
      <div className="lg:w-3/12">
        <h1 className="text-4xl text-center lg:text-start">AboutSpotlyt</h1>
        <div className="border-b-2 border-green-700 w-1/5 py-4 mx-auto lg:mx-0"></div>
      </div>
      <div className="px-2 mt-4 lg:mt-0 lg:px-0 lg:w-9/12 text-2xl text-gray-500">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          provident deleniti tenetur praesentium{" "}
        </h1>

        <h1 className="py-12">
          temporibus, maiores inventore voluptates facilis qui harum rem unde
          quas eos minus id vitae. Tempore praesentium porro maxime quae
          eligendi ut repudiandae. Aliquid voluptatum cupiditate
        </h1>

        <h1> 
          Odio nemo qui nostrum illum, velit totam deleniti similique natus
          beatae provident, reiciendis, dolorem exercitationem? Expedita porro
          autem accusantium minima rerum voluptatibus, et recusandae nam quo
          blanditiis vel.
        </h1>
      </div>
    </div>

    <hr />
<div className="pt-12 px-2 lg:px-0">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div>
      
        <TbCalendarUser className="text-6xl text-green-600" />
        <h4 className="text-2xl font-bold py-4">User Experience</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
    <div>
        <TbChartHistogram className="text-6xl text-green-600"/>
        <h4 className="text-2xl font-bold py-4">Friendly Design</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
    <div>
        < SiAffinitydesigner className="text-6xl text-green-600"/>
        <h4 className="text-2xl font-bold py-4">Modern UI/UX</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
</div>
</div>
<div className="pt-12 px-2 lg:px-0">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div>
      
        <TbCalendarUser className="text-6xl text-green-600" />
        <h4 className="text-2xl font-bold py-4">User Experience</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
    <div>
        <TbChartHistogram className="text-6xl text-green-600"/>
        <h4 className="text-2xl font-bold py-4">Friendly Design</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
    <div>
        < SiAffinitydesigner className="text-6xl text-green-600"/>
        <h4 className="text-2xl font-bold py-4">Modern UI/UX</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi asperiores quasi ipsa nisi, nesciunt dolores architecto expedita. Illum ducimus laborum id quam ullam impedit facere pariatur accusantium ratione, aut animi?</p>
    </div>
</div>
</div>

   </div>
  );
};

export default AboutSpotlyt;
