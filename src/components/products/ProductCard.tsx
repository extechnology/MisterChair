"use client";


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProductBadges } from "@/hooks/useProductBadges";
import ProductBadge from "../common/ProductBadge";
import { ChairColors } from "@/service/product/type";



interface ProductCardProps {
    id: string;
    image: string;
    chairColors?: ChairColors[];
    title: string;
    price: number;
    discountPrice?: number;
    url: string;
    specialTag?: 'New' | 'Bestseller' | 'Trending' | 'Limited';
}




export default function ProductCard({ image, chairColors, title, price, discountPrice, url, specialTag }: ProductCardProps) {


    const { discountBadge, statusBadge } = useProductBadges({ price, discountPrice, specialTag });


    return (


        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#f5f5f5] rounded-sm overflow-hidden relative border border-gray-100 shadow-sm h-full flex flex-col"
        >


            <Link href={url} className="h-full flex flex-col">


                {/* Image Container */}
                <div className="relative aspect-4/3 bg-[#f5f5f5] overflow-hidden shrink-0">


                    {/* Status Badge - Top Left (Replaces color options) */}
                    {statusBadge && (
                        <div className="absolute top-0 left-0 z-20">
                            <ProductBadge badge={statusBadge} variant="default" />
                        </div>
                    )}


                    {/* Product Image */}
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />


                </div>



                {/* Product Info */}
                <div className="p-5 flex items-end justify-between bg-white relative z-10 flex-1">


                    <div className="flex-1">


                        <h3 className="text-stone-900 font-serif font-medium text-lg leading-tight mb-2 tracking-tight group-hover:text-[#b8604f] transition-colors duration-300">{title}</h3>


                        <div className="flex items-baseline gap-2 flex-wrap mb-2">


                            <span className="text-[#b8604f] font-bold text-xl tracking-wide">
                                ₹{discountPrice?.toLocaleString() || price.toLocaleString()}
                            </span>


                            {discountPrice && (
                                <span className="text-stone-400 line-through text-sm font-light">₹{price.toLocaleString()}</span>
                            )}


                            {/* Discount Badge - Next to Price */}
                            {discountBadge && (
                                <ProductBadge badge={discountBadge} variant="discount" className="ml-1 scale-90 origin-left" />
                            )}

                        </div>


                        {/* Color Options */}
                        {chairColors && chairColors.length > 0 && (

                            <div className="flex gap-1 flex-wrap">

                                {chairColors.slice(0, 5).map((color, index) => {

                                    const backgroundStyle = color.color_codes && color.color_codes.length > 1
                                        ? { background: `linear-gradient(to bottom, ${color.color_codes[0]} 50%, ${color.color_codes[1]} 50%)` }
                                        : { backgroundColor: color.color_codes && color.color_codes.length > 0 ? color.color_codes[0] : '#cccccc' };

                                    return (

                                        <div
                                            key={color.id}
                                            className="w-4 h-4 rounded-full border border-stone-200 shadow-sm"
                                            style={backgroundStyle}
                                            title={color.color_name}
                                        />

                                    );

                                })}

                                {chairColors.length > 5 && (
                                    <span className="text-xs text-stone-500">+{chairColors.length - 5}</span>
                                )}

                            </div>

                        )}

                    </div>


                    {/* Arrow Icon */}
                    <div className="w-10 h-10 rounded-full bg-stone-50 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-[#b8604f] shadow-sm hover:bg-[#b8604f] hover:text-white shrink-0 ml-2">
                        <ArrowRight size={18} />
                    </div>


                </div>


            </Link>

        </motion.div>


    );


}
