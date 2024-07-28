

import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { motion } from "framer-motion";
import logo from "../../../assets/Images/logo.png";

const PrivacyPolicy = () => {
  const mountRef = () => useRef(null);

  useEffect(() => {

    if (!mountRef.current) {
      return; // Exit if the ref is not set correctly
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({antialias: true});
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
  
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    camera.position.z = 5;
  
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      }
      animate();
      // return () => {
      //   mountRef.current.removeChild(renderer.domElement);
      // }
      },[])

  return (
    <div  className="h-auto lg:mt-36 max-w-screen-lg mx-auto">
      {/* <div>  
      <img className='w-1/4' src={logo} alt="" /></div> */}
      <div>
      <motion.h1
          className="py-6 text-6xl font-bold text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Privacy Policy
        </motion.h1>
        <h1 className="text-6xl font-bold">For Spotlyt Task App</h1>
        <p className="text-start py-4">
          Your privacy is important to us at Spotlyt Task App. This Privacy
          Policy outlines how we collect, use, disclose, and protect your
          personal information. Please read this policy carefully before using
          our services.
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-xl">1. Information We Collect</span>{" "}
          <br />
          <span className="text-xl  text-gray-500">
            - Personal Information:
          </span>{" "}
          When you sign up for Spotlyt Task App, we collect information such as
          your email address, physical address (optional), National Identity
          Document (NID) number, and user interests.
          <br />
          <span className="text-xl  text-gray-500">
            - Non-Stored Information:
          </span>{" "}
          We do not store banking information used for withdrawals. This
          includes bank name, bank type, and bank account number.
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-xl">1. Information We Collect</span>{" "}
          <br />
          <span className="text-xl  text-gray-500">
            - Personal Information:
          </span>{" "}
          When you sign up for Spotlyt Task App, we collect information such as
          your email address, physical address (optional), National Identity
          Document (NID) number, and user interests.
          <br />
          <span className="text-xl  text-gray-500">
            - Non-Stored Information:
          </span>{" "}
          We do not store banking information used for withdrawals. This
          includes bank name, bank type, and bank account number.
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-xl">1. Information We Collect</span>{" "}
          <br />
          <span className="text-xl  text-gray-500">
            - Personal Information:
          </span>{" "}
          When you sign up for Spotlyt Task App, we collect information such as
          your email address, physical address (optional), National Identity
          Document (NID) number, and user interests.
          <br />
          <span className="text-xl  text-gray-500">
            - Non-Stored Information:
          </span>{" "}
          We do not store banking information used for withdrawals. This
          includes bank name, bank type, and bank account number.
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-xl">1. Information We Collect</span>{" "}
          <br />
          <span className="text-xl  text-gray-500">
            - Personal Information:
          </span>{" "}
          When you sign up for Spotlyt Task App, we collect information such as
          your email address, physical address (optional), National Identity
          Document (NID) number, and user interests.
          <br />
          <span className="text-xl  text-gray-500">
            - Non-Stored Information:
          </span>{" "}
          We do not store banking information used for withdrawals. This
          includes bank name, bank type, and bank account number.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
