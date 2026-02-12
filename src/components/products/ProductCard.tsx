"use client";


import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useProductBadges } from "@/hooks/useProductBadges";
import ProductBadge from "../common/ProductBadge";



interface ProductCardProps {
    id: string;
    image: string;
    colors: string[];
    moreOptions?: boolean;
    title: string;
    price: number;
    discountPrice?: number;
    url: string;
    isNew?: boolean;
    isBestSeller?: boolean;
    isTrending?: boolean;
    isLimited?: boolean;
}




export default function ProductCard({ image, colors, moreOptions = false, title, price, discountPrice, url, isNew, isBestSeller, isTrending, isLimited }: ProductCardProps) {


    const { discountBadge, statusBadge } = useProductBadges({ price, discountPrice, isNew, isBestSeller, isTrending, isLimited });


    return (


        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#f5f5f5] rounded-sm overflow-hidden relative border border-gray-100 shadow-sm"
        >


            <Link href={url}>


                {/* Image Container */}
                <div className="relative aspect-4/3 bg-[#f5f5f5] overflow-hidden">


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
                <div className="p-5 flex items-end justify-between bg-white relative z-10">


                    <div>

                        <h3 className="text-stone-900 font-serif font-medium text-lg leading-tight mb-2 tracking-tight group-hover:text-[#b8604f] transition-colors duration-300">{title}</h3>


                        <div className="flex items-baseline gap-2 flex-wrap">


                            <span className="text-[#b8604f] font-bold text-xl tracking-wide">
                                ${discountPrice || price}
                            </span>


                            {discountPrice && (
                                <span className="text-stone-400 line-through text-sm font-light">${price}</span>
                            )}


                            {/* Discount Badge - Next to Price */}
                            {discountBadge && (
                                <ProductBadge badge={discountBadge} variant="discount" className="ml-1 scale-90 origin-left" />
                            )}

                        </div>

                    </div>


                    {/* Arrow Icon */}
                    <div className="w-10 h-10 rounded-full bg-stone-50 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-[#b8604f] shadow-sm hover:bg-[#b8604f] hover:text-white">
                        <ArrowRight size={18} />
                    </div>

                </div>

            </Link>

        </motion.div>

    );

}
