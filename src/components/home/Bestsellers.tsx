"use client";

import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";




// bestsellers data
const bestsellersData = [
    {
        id: "1",
        image: "https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1722852692",
        colors: ["#d4c5b9", "#e8e8e8"],
        moreOptions: false,
        title: "Serenity Timber Loveseat",
        price: 1499,
        discountPrice: 1299,
        url: "/product/serenity-timber-loveseat",
        isNew: true,
    },
    {
        id: "2",
        image: "https://cdn.shopaccino.com/plusone/products/grey-look1600x1117-900390_l.jpg?v=651",
        colors: ["#9ca3a8", "#e8e8e8", "#d4c5b9", "#2c3e50"],
        moreOptions: true,
        title: "Block Nomad Sofa - 3 piece",
        price: 1499,
        discountPrice: 1299,
        url: "/product/block-nomad-sofa",
        isBestSeller: true,
        isTrending: true,
    },
    {
        id: "3",
        image: "https://smartwoodfurniture.com/wp-content/uploads/2023/07/JAC-corner-CR-Sofa.jpg",
        colors: ["#d4c5b9", "#e8e8e8", "#9ca3a8", "#2c3e50"],
        moreOptions: true,
        title: "Nomad Sofa - Loveseat",
        price: 1499,
        discountPrice: 1299,
        url: "/product/nomad-sofa-loveseat",
        isLimited: true,
    },
    {
        id: "4",
        image: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-plant_53876-129804.jpg",
        colors: ["#8b5a2b", "#d4c5b9"],
        moreOptions: false,
        title: "Mid-Century Armchair",
        price: 899,
        discountPrice: 799,
        url: "/product/mid-century-armchair",
        isTrending: true,
    },
    {
        id: "5",
        image: "https://img.freepik.com/free-photo/scandinavian-living-room-interior-design_53876-65376.jpg",
        colors: ["#f5f5f5", "#2c3e50"],
        moreOptions: true,
        title: "Nordic Lounge Chair",
        price: 1299,
        discountPrice: 1099,
        url: "/product/nordic-lounge-chair",
    },
    {
        id: "6",
        image: "https://img.freepik.com/free-photo/minimalist-living-room-interior-design_53876-64370.jpg",
        colors: ["#d4c5b9", "#e8e8e8", "#9ca3a8"],
        title: "Minimalist Coffee Table",
        price: 599,
        url: "/product/minimalist-coffee-table",
        isNew: true,
    },
];



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
            // default ease is 'easeOut' equivalent for simple props
        }
    }
};





export default function Bestsellers() {


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
                    {bestsellersData.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </div>


            </motion.div>


        </section>

    );

}
