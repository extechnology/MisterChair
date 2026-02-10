"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, CheckCircle } from "lucide-react";



// features data
const features = [
    {
        icon: Truck,
        title: "Fast Shipping",
        description: "Free delivery on all orders above $500 within the continental US."
    },
    {
        icon: ShieldCheck,
        title: "2-Year Warranty",
        description: "Comprehensive coverage for peace of mind on every purchase."
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Our dedicated team is here to assist you anytime, day or night."
    },
    {
        icon: CheckCircle,
        title: "Easy Returns",
        description: "30-day return policy. No questions asked return process."
    },
];



// framer motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};


const itemVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 }, // Subtle 3D tilt
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.7,
            type: "spring" as const,
            bounce: 0.3
        }
    }
};




export default function FeaturesSection() {


    return (


        <section className="py-14 px-4 md:px-20 bg-stone-900 text-white">


            <div className="mx-auto max-w-7xl">


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-light mb-4">Why choose <span className="font-serif italic text-[#b8604f]">Mr. Chair?</span></h2>
                    <p className="text-stone-400 max-w-xl mx-auto font-light">
                        We believe in furniture that looks good, feels good, and does good. Experience the difference.
                    </p>
                </motion.div>


                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >


                    {features.map((feature, index) => (


                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                        >


                            {/* Gradient Blur Background on Hover */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#b8604f]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />


                            <div className="relative z-10 flex flex-col items-center text-center">

                                <div className="w-16 h-16 rounded-full bg-linear-to-br from-stone-800 to-stone-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#b8604f]/50 transition-all duration-300 shadow-xl">
                                    <feature.icon size={26} className="text-stone-300 group-hover:text-[#b8604f] transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-stone-400 text-sm leading-relaxed group-hover:text-stone-300 transition-colors">
                                    {feature.description}
                                </p>

                            </div>


                        </motion.div>

                    ))}


                </motion.div>


            </div>


        </section>


    );


}
