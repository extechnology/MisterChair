"use client";

import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";
import { Results } from "@/service/product/type";




// framer motion variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        }
    }
};



export default function Bestsellers({ products }: { products: Results[] }) {



    return (



        <section className="py-14 px-4 md:px-20 bg-white overflow-hidden">


            <motion.div
                className="mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >


                {/* Section Header */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">

                    <div>
                        <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                            Customer Favorites
                        </span>
                        <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-tight">
                            Shop Our <span className="font-serif italic font-medium text-stone-800">Bestsellers</span>
                        </h2>
                    </div>

                    <Link
                        href="/products"
                        className="text-[#b8604f] hover:text-[#a04f3e] font-medium text-sm md:text-base transition-colors"
                    >
                        View all Product
                    </Link>

                </motion.div>



                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products?.map((product) => (

                        <motion.div key={product?.id} variants={itemVariants}>

                            <ProductCard
                                id={product?.id?.toString()}
                                image={product?.chair_colors[0]?.chair_images[0] as string || ""}
                                chairColors={product?.chair_colors}
                                title={product?.name}
                                price={parseFloat((product?.chair_colors[0]?.price || "0")?.toString()?.replace(/,/g, ''))}
                                discountPrice={product?.chair_colors[0]?.if_discount ? parseFloat((product?.chair_colors[0]?.discount_price || "0")?.toString()?.replace(/,/g, '')) : undefined}
                                url={`/products/${product?.unique_id}`}
                                specialTag={product?.special_tag}
                            />

                        </motion.div>

                    ))}

                </div>


            </motion.div>


        </section>

    );

}
