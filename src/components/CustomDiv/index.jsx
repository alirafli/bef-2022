import React from "react";
import { motion } from "framer-motion";

const AnimateDiv = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        ease: "easeIn",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateDiv;
