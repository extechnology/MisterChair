"use client";


import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";



export default function CustomEditions() {


    return (


        <section className="bg-stone-950 text-white overflow-hidden">


            <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">


                {/* Content Side - Left */}
                <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-10">


                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase text-[#b8604f] bg-[#b8604f]/10 px-3 py-1 rounded-full border border-[#b8604f]/20">
                            Custom Editions
                        </span>


                        <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                            Built Strong, <br />
                            <span className="font-serif italic text-[#b8604f]">Styled Smart</span>
                        </h2>


                        <div className="space-y-6 text-stone-300 font-light text-lg max-w-md leading-relaxed">
                            <p>
                                Modern designs made for real comfort. Seating solutions for every space. Properly manufactured for long-term use.
                            </p>
                            <p className="font-medium text-white text-xl border-l-2 border-[#b8604f] pl-4">
                                Comfort you’ll feel from the first sit.
                            </p>
                        </div>


                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-10 group bg-black text-white px-8 py-3.5 rounded-full flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white hover:border-[#b8604f]/20 hover:cursor-pointer"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-[#b8604f] transition-colors">Explore</span>

                            <span className="font-serif italic text-xl text-stone-400 group-hover:text-[#b8604f] transition-colors">Collection</span>

                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-[#b8604f] group-hover:text-white transition-all duration-300 ml-2">
                                <ArrowRight size={16} />
                            </div>

                        </motion.button>

                    </motion.div>


                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b8604f]/5 rounded-full blur-3xl opacity-50" />
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />
                    </div>

                </div>



                {/* Image Side - Right */}
                <div className="w-full md:w-1/2 relative h-[500px] md:h-auto overflow-hidden group">


                    <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />


                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                        alt="Modern Custom Edition Chair"
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />


                    {/* Floating Badge on Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute bottom-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-xs"
                    >

                        <div className="flex items-start gap-3">

                            <div className="bg-[#b8604f] p-2 rounded-full text-white mt-1">
                                <Check size={16} strokeWidth={3} />
                            </div>

                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Premium Build</h4>
                                <p className="text-stone-300 text-xs leading-relaxed">Engineered for durability with high-grade materials.</p>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}
