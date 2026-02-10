"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";

interface Product {
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

export default function ProductGrid({ products }: { products: Product[] }) {
    if (products.length === 0) {
        return (
            <div className="py-20 text-center">
                <h3 className="text-2xl font-serif italic text-stone-400 mb-4">No products found.</h3>
                <p className="text-stone-500">Try adjusting your filters to find what you're looking for.</p>
            </div>
        );
    }

    return (
        <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
                {products.map((product) => (
                    <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ProductCard {...product} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
