"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import { Results } from "@/service/product/type";
import { Armchair } from "lucide-react";




export default function ProductGrid({ products }: { products: Results[] }) {



    if (products.length === 0) {

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 sm:col-span-2 lg:col-span-3 py-24 flex flex-col items-center text-center px-4"
            >
                <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mb-6 shadow-xs border-2">
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                    >
                        <Armchair className="w-10 h-10 text-stone-400" />
                    </motion.div>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-3 tracking-tight">
                    No chairs found
                </h3>

                <p className="text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
                    We couldn't find any chairs matching your specific requirements.
                    Try adjusting your filters to discover more seating options.
                </p>

                <div className="h-px w-24 bg-stone-200" />
            </motion.div>
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


                        <ProductCard
                            id={product.id.toString()}
                            image={product.chair_colors[0]?.chair_images[0] as string || ""}
                            chairColors={product.chair_colors}
                            title={product.name}
                            price={parseFloat((product.chair_colors[0]?.price || "0").toString().replace(/,/g, ''))}
                            discountPrice={product.chair_colors[0]?.if_discount ? parseFloat((product.chair_colors[0]?.discount_price || "0").toString().replace(/,/g, '')) : undefined}
                            url={`/products/${product.unique_id}`}
                            specialTag={product.special_tag}
                        />


                    </motion.div>

                ))}

            </AnimatePresence>

        </motion.div>

    );


}
