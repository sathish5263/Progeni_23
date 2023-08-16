import { motion } from "framer-motion";
import "./model.css";

import Backdrop from "../backdrop/index";
import React from 'react';

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

const Modal = ({ handleClose, text }) => {

  return (
      <div className="desc"  >
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
          exit="exit"
          
          >
            <p >mnsjdksjkds</p>
            <button onClick={handleClose} className="close">Close</button>
          </motion.div>
      </Backdrop>
      </div>
    );
  };

  
  export default Modal;