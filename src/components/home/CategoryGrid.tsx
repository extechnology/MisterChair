"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrowseByCategoryType } from "@/types/type";





export default function CategoryGrid({ categories }: { categories: BrowseByCategoryType[] }) {



    // Helper to determine size based on index to match the original layout
    const getSize = (index: number) => {
        if (index === 0) return "large";
        if (index === 3 || index === 4) return "wide";
        return "normal";
    };
    


    // framer motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };


    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
            },
        },
    };



    return (


        <section className="py-14 px-4 md:px-10 bg-white border-t-2 border-dashed border-stone-200">


            <div className="mx-auto max-w-[1400px]">


                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-10 px-2"
                >

                    <div>
                        <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Curated Collections
                        </span>
                        <h2 className="text-4xl md:text-6xl font-light text-stone-900 tracking-tight">
                            Browse by <span className="font-serif italic font-medium">Category</span>
                        </h2>
                    </div>

                    <Link
                        href="/products"
                        className="group flex items-center gap-2 text-stone-900 font-semibold hover:text-[#b8604f] transition-colors pb-1 border-b-2 border-stone-200 hover:border-[#b8604f] mt-6 md:mt-0"
                    >
                        View All Categories
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                </motion.div>



                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[350px] md:auto-rows-[450px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {categories?.map((category, index) => {

                        const size = getSize(index);

                        return (

                            <motion.div
                                key={category.id}
                                variants={itemVariants}
                                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${size === "large" ? "md:col-span-2 md:row-span-1" : ""
                                    } ${size === "wide" ? "md:col-span-2" : "md:col-span-1"}`}
                            >


                                <Link href={`/products?category=${category?.category_name}`} className="block w-full h-full relative isolate">


                                    {/* Background Image */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10" />
                                        <img
                                            src={category?.category_image}
                                            alt={category?.category_name}
                                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                        />
                                    </div>


                                    {/* Content Overlay - Glassmorphism Card */}
                                    <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/50 flex justify-between items-center">

                                            <div>
                                                <h3 className="text-xl md:text-2xl text-stone-900 font-medium font-serif italic">
                                                    {category?.category_name}
                                                </h3>
                                                <p className="text-xs uppercase tracking-wider text-stone-500 mt-1 font-semibold group-hover:text-[#b8604f] transition-colors">
                                                    Explore Collection
                                                </p>
                                            </div>

                                            <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                                <ArrowRight size={14} />
                                            </div>

                                        </div>

                                    </div>

                                </Link>

                            </motion.div>
                        );
                    })}

                </motion.div>

            </div>

        </section>

    );


}
