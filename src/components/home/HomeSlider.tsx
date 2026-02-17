"use client";


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroSliderType } from "@/types/type";





export default function HomeSlider({data}: {data: HeroSliderType[]}) {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);


    // Auto-advance slider (optional, can remove if not desired)
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % data?.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);



    const handleThumbnailClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };



    const currentSlide = data[currentIndex];



    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };



    return (


        <div className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ease-in-out`}>


            {/* Background Image & Content Container */}
            <div className="absolute inset-0 flex items-center justify-center">


                {/* We use a key to trigger re-animation on slide change */}
                <AnimatePresence custom={direction} mode="wait">

                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center pt-20 pb-10 px-6 h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="absolute inset-0 w-full h-full">
                            
                            {/* Desktop image */}
                            <div className="w-full h-full bg-stone-300/20 items-center justify-center text-stone-400 md:flex hidden">
                                <img
                                    src={currentSlide?.image_landscap}
                                    alt={currentSlide?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Mobile image */}
                            <div className="w-full h-full bg-stone-300/20 items-center justify-center text-stone-400 md:hidden flex">
                                <img
                                    src={currentSlide?.image_portrait}
                                    alt={currentSlide?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dark inset overlay */}
                            <div className="absolute inset-0 bg-black/40 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />

                        </div>

                    </motion.div>

                </AnimatePresence>



                {/* Text Content overlay - Bottom Left */}
                <div className="absolute bottom-12 left-6 md:left-16 max-w-lg z-10">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={currentIndex}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >

                            <h1 className="text-5xl md:text-8xl font-serif italic font-medium text-white mb-6 tracking-tight drop-shadow-md">
                                {currentSlide.title}
                            </h1>

                            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl drop-shadow-md tracking-wide">
                                {currentSlide.description}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white text-stone-900 px-10 py-4 text-sm font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-stone-100 hover:cursor-pointer"
                            >
                                <span className="flex items-center gap-2 group-hover:text-[#b8604f] transition-colors duration-300">
                                    <span className="uppercase tracking-widest text-xs">Shop</span>
                                    <span className="font-serif italic font-medium text-lg">Collection</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 ml-1" />
                                </span>
                            </motion.button>

                        </motion.div>

                    </AnimatePresence>

                </div>



                {/* Thumbnails - Bottom Right */}
                <div className="absolute bottom-12 right-6 md:right-16 z-20 hidden md:flex gap-4">

                    {data.map((slide, index) => (

                        <button
                            key={slide.id}
                            onClick={() => handleThumbnailClick(index)}
                            className={`relative w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${index === currentIndex ? "border-stone-700 border-2 scale-105" : "border-transparent opacity-70 hover:opacity-100"
                                }`}
                        >
                            <div className="w-full h-full bg-stone-200 flex items-center justify-center text-[10px] text-stone-500">
                                <img
                                    src={slide.image_landscap}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </button>

                    ))}

                </div>


            </div>

        </div>

    );

}
