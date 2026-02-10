"use client";


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";




// Mock Data for the slider
const slides = [
    {
        id: 1,
        title: "The Winter Sale",
        description: "Integer eget at augue suspendisse in vitae enim habitant. At donec pretium ultrices ac luctus vitae nibh erat.",
        image: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692",
        thumbnail: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692",
        bgColor: "bg-[#e8e6e1]",
    },
    {
        id: 2,
        title: "Modern Comfort",
        description: "Experience the ultimate in relaxation with our new collection designed for modern living spaces.",
        image: "https://cdn.shopaccino.com/plusone/products/grey-look1600x1117-900390_l.jpg?v=651",
        thumbnail: "https://cdn.shopaccino.com/plusone/products/grey-look1600x1117-900390_l.jpg?v=651",
        bgColor: "bg-[#dcdcdc]",
    },
    {
        id: 3,
        title: "Timeless Design",
        description: "Crafted with precision and care, our furniture stands the test of time both in style and durability.",
        image: "https://smartwoodfurniture.com/wp-content/uploads/2023/07/JAC-corner-CR-Sofa.jpg",
        thumbnail: "https://smartwoodfurniture.com/wp-content/uploads/2023/07/JAC-corner-CR-Sofa.jpg",
        bgColor: "bg-[#e0dcd9]",
    },
];




export default function HomeSlider() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);


    // Auto-advance slider (optional, can remove if not desired)
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);



    const handleThumbnailClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };



    const currentSlide = slides[currentIndex];



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


        <div className={`relative h-screen w-full overflow-hidden ${currentSlide.bgColor} transition-colors duration-700 ease-in-out`}>


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
                            {/* Fallback visual if no image */}
                            <div className="w-full h-full bg-stone-300/20 flex items-center justify-center text-stone-400">
                                <img
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
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

                            <h1 className="text-5xl md:text-7xl font-sans font-medium text-white mb-4 tracking-tight drop-shadow-sm">
                                {currentSlide.title}
                            </h1>

                            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 font-light max-w-sm drop-shadow-sm">
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

                    {slides.map((slide, index) => (

                        <button
                            key={slide.id}
                            onClick={() => handleThumbnailClick(index)}
                            className={`relative w-20 h-20 overflow-hidden border-2 transition-all duration-300 ${index === currentIndex ? "border-stone-700 border-2 scale-105" : "border-transparent opacity-70 hover:opacity-100"
                                }`}
                        >
                            <div className="w-full h-full bg-stone-200 flex items-center justify-center text-[10px] text-stone-500">
                                <img
                                    src={slide.thumbnail}
                                    alt=""
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
