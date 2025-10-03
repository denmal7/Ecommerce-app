import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const Reveal = ( {children, delay = 0, direction = "up"}) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, delay },
        },
    };

    
    return (
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;