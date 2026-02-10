"use client";


import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
            className="group bg-[#f5f5f5] rounded-sm overflow-hidden relative"
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Product Info */}
                <div className="p-4 flex items-center justify-between">
                    <div>
                        <h3 className="text-stone-800 font-medium text-base mb-1">{title}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                            {discountPrice && (
                                <span className="text-stone-400 line-through text-sm">${price}</span>
                            )}
                            <span className="text-[#b8604f] font-semibold text-lg">
                                ${discountPrice || price}
                            </span>

                            {/* Discount Badge - Next to Price */}
                            {discountBadge && (
                                <ProductBadge badge={discountBadge} variant="discount" className="ml-1" />
                            )}
                        </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-stone-100 transition-colors">
                        <ChevronRight size={18} className="text-stone-600" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
