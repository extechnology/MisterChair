"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";




// categories data
const categories = [
    {
        id: 1,
        title: "Modern Sofas",
        image: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692",
        link: "/category/sofas",
        size: "large", // spans 2 cols
    },
    {
        id: 2,
        title: "Dining Chairs",
        image: "https://cdn.shopaccino.com/plusone/products/grey-look1600x1117-900390_l.jpg?v=651",
        link: "/category/chairs",
        size: "normal",
    },
    {
        id: 3,
        title: "Premium Tables",
        image: "https://smartwoodfurniture.com/wp-content/uploads/2023/07/JAC-corner-CR-Sofa.jpg",
        link: "/category/tables",
        size: "normal",
    },
    {
        id: 4,
        title: "New Lighting",
        image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-1648776.jpg&fm=jpg",
        link: "/category/lighting",
        size: "wide", // spans 2 cols
    },
    {
        id: 5,
        title: "New Lighting",
        image: "https://i.pinimg.com/736x/31/6f/c0/316fc08a70b70bec8be281f65624eb65.jpg",
        link: "/category/lighting",
        size: "wide", // spans 2 cols
    },
];




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
            // default spring-ish feels good for scale
        },
    },
};




export default function CategoryGrid() {


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
                        href="/categories"
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


                    {categories.map((category) => (


                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${category.size === "large" ? "md:col-span-2 md:row-span-1" : ""
                                } ${category.size === "wide" ? "md:col-span-2" : "md:col-span-1"}`}
                        >


                            <Link href={category.link} className="block w-full h-full relative isolate">


                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-10" />
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                </div>


                                {/* Content Overlay - Glassmorphism Card */}
                                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/50 flex justify-between items-center">

                                        <div>
                                            <h3 className="text-xl md:text-2xl text-stone-900 font-medium font-serif italic">
                                                {category.title}
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

                    ))}

                </motion.div>

            </div>

        </section>

    );


}
