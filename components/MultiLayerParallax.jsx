'use client'

import {motion, useScroll, useTransform} from "framer-motion"
import React, { useRef } from "react"

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
    const layer1 = useTransform(scrollYProgress, [0,1], ["0%", "0%"])
    const layer2 = useTransform(scrollYProgress, [0,1], ["0%", "20%"])
    const layer3 = useTransform(scrollYProgress, [0,1], ["0%", "30%"])
    const layer4 = useTransform(scrollYProgress, [0,1], ["0%", "40%"])
    const layer5 = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const layer6 = useTransform(scrollYProgress, [0,1], ["0%", "60%"])
    const layer7 = useTransform(scrollYProgress, [0,1], ["0%", "70%"])
    const layer8 = useTransform(scrollYProgress, [0,1], ["0%", "80%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["-400%", "-300%"]);

    return (
        <div id="home" ref={ref} className="w-full h-175vh overflow-hidden relative grid place-items-center">
            <motion.h1 
                style={{y: textY}}
                className="font-bold text-white text-8xl relative z-10">
                Andrew Liu
            </motion.h1>
            <motion.div     
                className = "absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/fullimage.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: backgroundY
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-2"
                style={{
                    backgroundImage: `url(/layer8.png)`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    y: layer8
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-3"
                style={{
                    backgroundImage: `url(/layer7.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer7
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-6"
                style={{
                    backgroundImage: `url(/layer6.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer6
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-9"
                style={{
                    backgroundImage: `url(/layer5.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer5
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-12"
                style={{
                    backgroundImage: `url(/layer4.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer4
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-15"
                style={{
                    backgroundImage: `url(/layer3.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer3
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-18"
                style={{
                    backgroundImage: `url(/layer2.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer2
                }}>

            </motion.div>
            <motion.div 
                className = "absolute inset-0 z-21"
                style={{
                    backgroundImage: `url(/layer1.png)`,
                    backgroundPosition: "top",
                    backgroundSize:"cover",
                    y: layer1
                }}>
            </motion.div>
        </div>
    )
} 