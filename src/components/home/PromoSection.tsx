"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";





export default function PromoSection() {


    return (


        <section className="relative w-full h-auto min-h-[600px] md:h-[80vh] flex flex-col md:flex-row bg-[#1a1a1a] text-white overflow-hidden">


            {/* Left Content Half */}
            <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center items-start z-10 relative">


                {/* Decorative background circle */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-stone-800/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />


                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >

                    <span className="text-stone-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">
                        Limited Edition
                    </span>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9] mb-8">
                        The <br /> <span className="text-stone-500 font-sans italic font-bold">Velvet</span> <br /> Lounge
                    </h2>

                    <p className="max-w-md text-stone-300 text-lg leading-relaxed mb-10 font-light">
                        Experience uncompromised comfort with our new premium velvet collection. Designed for the modern home, crafted for timeless elegance.
                    </p>


                    <Link
                        href="/collection/velvet"
                        className="group relative inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-900 font-medium overflow-hidden rounded-full transition-all shadow-lg hover:shadow-2xl border border-transparent hover:border-stone-100"
                    >
                        <span className="flex items-center gap-2 group-hover:text-[#b8604f] transition-colors duration-300">
                            <span className="uppercase tracking-widest text-xs">Explore</span>
                            <span className="font-serif italic font-medium text-lg">Collection</span>
                        </span>
                        <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 group-hover:text-[#b8604f] transition-all duration-300" />
                    </Link>

                </motion.div>

            </div>



            {/* Right Image Half */}
            <div className="w-full md:w-1/2 h-[500px] md:h-full relative overflow-hidden">


                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle overlay */}
                    <img
                        src="https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794692.jpg"
                        alt="Velvet Lounge Collection"
                        className="w-full h-full object-cover"
                    />
                </motion.div>


                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-10 left-10 md:left-auto md:right-10 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg max-w-xs text-sm"
                >
                    <p className="font-serif italic text-2xl mb-2">"Stunning."</p>
                    <p className="text-stone-300 text-xs uppercase tracking-wider">— Architecture Digest</p>
                </motion.div>

            </div>

        </section>

    );

}
