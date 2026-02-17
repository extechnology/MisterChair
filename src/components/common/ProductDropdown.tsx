"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useGetNavbarCategories } from "@/service/product/useProduct";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { BrowseByCategoryType } from "@/types/type";





export default function ProductDropdown({ onLinkClick }: { onLinkClick?: () => void }) {



    // Get navbar categories data
    const { data: navbarCategories, isLoading, isError, refetch } = useGetNavbarCategories();



    // Framer motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };



    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };



    return (



        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-[900px] bg-white shadow-2xl rounded-xl border border-stone-100 p-6 z-50 overflow-hidden"
        >


            {/* Triangular arrow / bridge at the top */}
            <div className="absolute -top-10 left-10 w-4 h-4 bg-white transform rotate-45 border-t border-l border-stone-100"></div>



            {/* Main Content Container */}
            <div className="block">


                {/* Header */}
                <div className="mb-6 px-1">
                    <h2 className="text-2xl font-serif font-bold text-[#6b4c3b] relative inline-block pb-2">
                        Browse Categories
                        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#b8604f] rounded-full"></span>
                    </h2>
                </div>


                {/* Scrollable Content */}
                {isLoading ? (


                    <div className="grid grid-cols-4 gap-6 h-[300px]">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex flex-col gap-3 animate-pulse">
                                <div className="h-40 bg-stone-100 rounded-lg w-full"></div>
                                <div className="h-4 bg-stone-100 rounded w-2/3"></div>
                            </div>
                        ))}
                    </div>


                ) : isError ? (


                    <div className="flex flex-col items-center justify-center h-[300px] text-stone-500">

                        <AlertCircle className="w-10 h-10 mb-3 text-red-400" />

                        <p className="mb-4 text-sm font-medium">Failed to load categories</p>

                        <button
                            onClick={() => refetch()}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#6b4c3b] bg-[#6b4c3b]/5 hover:bg-[#6b4c3b]/10 rounded-full transition-colors"
                        >
                            <RefreshCcw size={14} />
                            Try Again
                        </button>
                    </div>


                ) : !navbarCategories || navbarCategories.length === 0 ? (


                    <div className="flex flex-col items-center justify-center h-[200px] text-stone-500">
                        <p>No categories found.</p>
                    </div>


                ) : (


                    <>

                        {/* Categories Grid */}
                        <div
                            className="max-h-[45vh] overflow-y-auto pr-2 overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-stone-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-stone-300"
                            style={{ overscrollBehavior: 'contain' }}
                            onWheel={(e) => e.stopPropagation()}
                        >

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-4 gap-6 pb-4"
                            >


                                {navbarCategories.map((category: BrowseByCategoryType) => (


                                    <motion.div key={category.id} variants={itemVariants}>


                                        <Link
                                            href={`/products?category=${encodeURIComponent(category.category_name)}`}
                                            onClick={onLinkClick}
                                            className="group block relative overflow-hidden rounded-xl bg-stone-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                        >


                                            <div className="aspect-4/3 overflow-hidden">

                                                <img
                                                    src={category.category_image}
                                                    alt={category.category_name}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                            </div>


                                            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-0 transition-transform">
                                                <h3 className="text-white font-serif font-bold text-xl tracking-wide drop-shadow-md group-hover:text-[#f5f5f5] transition-colors border-l-4 border-[#b8604f] pl-3">
                                                    {category.category_name}
                                                </h3>
                                            </div>

                                        </Link>

                                    </motion.div>

                                ))}

                            </motion.div>

                        </div>



                        {/* Footer Link */}
                        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-end">
                            <Link
                                href="/products"
                                className="text-[#6b4c3b] font-serif font-semibold text-base hover:underline flex items-center gap-2 group"
                                onClick={onLinkClick}
                            >
                                Shop all collections
                                <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                            </Link>
                        </div>


                    </>
                
                )}


            </div>


        </motion.div>


    );


}
