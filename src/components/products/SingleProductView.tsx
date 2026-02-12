"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShoppingCart, Minus, Plus, Truck, ShieldCheck, RefreshCw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useProductBadges } from "@/hooks/useProductBadges";
import ProductBadge from "@/components/common/ProductBadge";




interface Product {
    id: string;
    name: string;
    mrp: number;
    discountPrice: number;
    color: string;
    moq: number;
    description: string;
    images: string[];
    features: string[];
}



interface SingleProductViewProps {
    product: Product;
}




export default function SingleProductView({ product }: SingleProductViewProps) {


    const [quantity, setQuantity] = useState(product.moq);
    const [selectedImage, setSelectedImage] = useState(0);


    const { discountBadge, statusBadge } = useProductBadges({
        price: product.mrp,
        discountPrice: product.discountPrice,
        isBestSeller: true, // Dummy data assumption
        isNew: true, // Dummy data assumption
    });



    const handleDecrease = () => {
        if (quantity > product.moq) {
            setQuantity(quantity - 1);
        }
    };



    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };



    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };



    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };



    return (



        <div className="min-h-screen bg-white pb-12 pt-24">


            <div className="mx-auto px-4 sm:px-6 lg:px-8">


                <Breadcrumb
                    items={[{ label: "Products", href: "/products" }, { label: product.name }]}
                    className="mb-4"
                />


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">


                    {/* Image Gallery Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6 lg:sticky lg:top-24"
                    >


                        <div className="relative w-full h-[50vh] md:h-[55vh] bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-xs border border-gray-100 group">


                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImage}
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                                />
                            </AnimatePresence>


                            {/* Badges Overlay */}
                            <div className="absolute top-0 left-0 z-10 flex flex-col gap-2">
                                {statusBadge && <ProductBadge badge={statusBadge} />}
                            </div>

                        </div>



                        <div className="grid grid-cols-5 gap-4">

                            {product.images.map((img, idx) => (

                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedImage === idx
                                        ? "border-stone-900 ring-1 ring-stone-900/20 scale-95 opacity-100"
                                        : "border-transparent bg-[#f8f8f8] hover:border-gray-300 opacity-70 hover:opacity-100"
                                        }`}
                                >

                                    <img
                                        src={img}
                                        alt={`${product.name} view ${idx + 1}`}
                                        className="w-full h-full object-cover mix-blend-multiply"
                                    />

                                </button>

                            ))}

                        </div>


                    </motion.div>



                    {/* Product Details Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col space-y-8 lg:pt-2"
                    >


                        <motion.div variants={itemVariants} className="space-y-4">


                            <div className="flex flex-wrap items-center gap-3 mb-2">

                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    In Stock
                                </span>

                                <div className="flex items-center text-amber-500 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                    ))}
                                    <span className="text-stone-500 ml-2 text-xs font-medium border-b border-stone-200 pb-0.5 leading-none">128 Reviews</span>
                                </div>

                            </div>


                            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
                                {product.name}
                            </h1>


                            <div className="flex items-baseline gap-3 mt-2">

                                <span className="text-3xl font-bold text-stone-900 tracking-tight">
                                    ₹{product.discountPrice.toLocaleString()}
                                </span>

                                <span className="text-lg text-stone-400 line-through font-light">
                                    ₹{product.mrp.toLocaleString()}
                                </span>

                                {discountBadge && (
                                    <ProductBadge badge={discountBadge} variant="discount" className="scale-110 origin-left ml-2" />
                                )}

                            </div>

                        </motion.div>


                        <motion.div variants={itemVariants} className="h-px bg-stone-300" />


                        <motion.div variants={itemVariants} className="prose prose-stone text-stone-600 leading-relaxed max-w-none">
                            <p>{product.description}</p>
                        </motion.div>


                        {/* Visual Features Section */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">

                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                                    <span className="text-sm font-medium text-stone-700">{feature}</span>
                                </div>
                            ))}

                        </motion.div>


                        {/* Selection Controls */}
                        <motion.div variants={itemVariants} className="space-y-8 pt-3">


                            {/* Color Selection */}
                            <div>

                                <h3 className="text-xs font-bold text-stone-900 mb-3 uppercase tracking-widest">Select Finish</h3>

                                <div className="flex items-center gap-3">
                                    {[
                                        { name: 'Midnight Black', class: 'bg-[#1a1a1a]' },
                                        { name: 'Graphite Grey', class: 'bg-[#4a4a4a]' },
                                        { name: 'Ocean Blue', class: 'bg-[#1a3a5a]' }
                                    ].map((color, idx) => (

                                        <button
                                            key={idx}
                                            className={`group relative w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 ${idx === 0 ? 'border-stone-900 ring-1 ring-stone-900/20' : 'border-transparent shadow-sm'
                                                }`}
                                            title={color.name}
                                        >
                                            <span className={`absolute inset-0.5 rounded-full ${color.class}`} />

                                        </button>

                                    ))}

                                </div>

                            </div>



                            {/* Quantity Selection */}
                            <div className="py-4 border-t border-stone-300">
                                
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest">Quantity</h3>
                                    {product.moq > 1 && (
                                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 uppercase tracking-wider">
                                            Minimum Order Quantity: {product.moq} Units
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center w-full sm:w-auto bg-stone-50 rounded-full border border-stone-100 p-1.5 shadow-sm hover:shadow transition-shadow max-w-[180px]">
                                
                                    <button
                                        onClick={handleDecrease}
                                        disabled={quantity <= product.moq}
                                        className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md disabled:opacity-50 disabled:hover:shadow-sm transition-all text-stone-900 border border-stone-100"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>

                                    <span className="flex-1 text-center font-bold text-xl text-stone-900 tabular-nums">{quantity}</span>

                                    <button
                                        onClick={handleIncrease}
                                        className="w-10 h-10 flex items-center justify-center bg-stone-900 rounded-full shadow-sm hover:shadow-md hover:bg-black transition-all text-white"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>


                            </div>


                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-stone-100">
                                <Button
                                    className="flex-1 bg-stone-900 text-white hover:bg-stone-800 h-16 text-lg rounded-full font-medium shadow-xl shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/30 transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
                                >
                                    Buy Now — ₹{(product.discountPrice * quantity).toLocaleString()}
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-16 text-lg rounded-full border-2 border-stone-200 hover:border-stone-900 hover:bg-stone-50 text-stone-900 font-medium transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                            <p className="text-center text-xs text-stone-400 font-medium">
                                Free shipping on all orders over ₹5,000
                            </p>

                        </motion.div>


                    </motion.div>


                </div>


            </div>



            {/* Why Choose Us Section - Breaking up the white */}
            <section className="bg-[#1a1a1a] py-20 mt-16 text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 bg-stone-800 rounded-2xl shadow-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <Truck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-white mb-3">Fast & Free Shipping</h3>
                            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">Enjoy free shipping on all orders. We ensure your furniture arrives safely and on time.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 bg-stone-800 rounded-2xl shadow-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-white mb-3">Warranty Protection</h3>
                            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">All our products are backed by a comprehensive 2-year warranty for your peace of mind.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 bg-stone-800 rounded-2xl shadow-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-serif font-medium text-white mb-3">Easy Returns</h3>
                            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">Not 100% satisfied? Return your items within 30 days for a full refund, no questions asked.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Related Products Section */}
            <section className="mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex items-end justify-between mb-10">
                    <div>
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1 block">You Might Also Like</span>
                        <h2 className="text-3xl font-serif font-medium text-stone-900">Related Products</h2>
                    </div>
                    <Button variant="link" className="text-stone-900 font-medium hover:text-amber-700 hidden sm:flex">View Collection <Truck className="w-4 h-4 ml-2" /></Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        // Using the actual ProductCard component here
                        <ProductCardWithDummyData key={item} index={item} />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Button variant="outline" className="w-full">View Collection</Button>
                </div>

            </section>


        </div>

    );

}




import ProductCard from "@/components/products/ProductCard";


function ProductCardWithDummyData({ index }: { index: number }) {

    return (

        <ProductCard
            id={`related-${index}`}
            title="Modern Executive Chair"
            price={12999}
            discountPrice={8999}
            image="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop"
            colors={["#000", "#555"]}
            url={`/products/related-${index}`}
            isNew={index === 1}
            isBestSeller={index === 2}
        />

    )

}
