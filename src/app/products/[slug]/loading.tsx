"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";



const LOADING_TEXTS = [
    "Preparing your experience...",
    "Curating premium seating...",
    "Designing comfort...",
    "Almost there..."
];



export default function Loading() {


    const [textIndex, setTextIndex] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);




    return (


        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-stone-50 overflow-hidden">


            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />


            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none" />


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center"
            >


                {/* Logo Container */}
                <div className="relative mb-0 group">


                    {/* Rotating Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-4 border border-dashed border-stone-300 rounded-full opacity-50"
                    />


                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 -m-2 border border-stone-200 rounded-full opacity-50"
                    />


                    <div className="relative w-52 h-52 flex items-center justify-center border border-stone-100">


                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/logo.png"
                                alt="Mister Chair"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>


                </div>



                {/* Brand Name */}
                <h1 className="text-3xl font-serif text-stone-900 mb-2 tracking-wide">
                    Mister Chair
                </h1>



                {/* Cycling Loading Text */}
                <div className="h-6 overflow-hidden relative w-64 text-center">

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={textIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-stone-500 font-medium uppercase tracking-widest absolute inset-0 flex items-center justify-center"
                        >
                            {LOADING_TEXTS[textIndex]}
                        </motion.p>
                    </AnimatePresence>

                </div>
                


                {/* Loading Bar */}
                <div className="mt-8 w-48 h-1 bg-stone-200 rounded-full overflow-hidden">

                    <motion.div
                        className="h-full bg-stone-800"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                </div>


            </motion.div>


        </div>


    );


}
