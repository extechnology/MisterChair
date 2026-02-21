"use client";


import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ShoppingCart, Minus, Plus, Truck, ShieldCheck, RefreshCw, Star } from "lucide-react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/common/Breadcrumb";
import { useProductBadges } from "@/hooks/useProductBadges";
import ProductBadge from "@/components/common/ProductBadge";
import RelatedProducts from "@/components/products/RelatedProducts";
import { Results } from "@/service/product/type";




// Props type
interface SingleProductViewProps {
    product: Results;
}



export default function SingleProductView({ product }: SingleProductViewProps) {



    const [quantity, setQuantity] = useState(product?.minimum_order_quantity || 1);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);



    // Derived values based on selected color
    const selectedVariant = product?.chair_colors?.[selectedColorIndex];
    const currentPrice = selectedVariant ? parseFloat(selectedVariant?.price?.toString().replace(/,/g, '')) : 0;
    const currentDiscountPrice = selectedVariant && selectedVariant?.if_discount ? parseFloat(selectedVariant?.discount_price?.toString()?.replace(/,/g, '')) : undefined;
    const currentImages = selectedVariant ? (selectedVariant?.chair_images as string[]) : [];



    // Ensure we have at least one image to show
    const displayImages = currentImages?.length > 0 ? currentImages : ["/placeholder.png"];



    const { discountBadge, statusBadge } = useProductBadges({
        price: currentPrice,
        discountPrice: currentDiscountPrice,
        specialTag: product?.special_tag
    });



    const handleDecrease = () => {
        if (quantity > (product?.minimum_order_quantity || 1)) {
            setQuantity(quantity - 1);
        }
    };



    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };



    // Animation variants
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
                    items={[{ label: "Products", href: "/products" }, { label: product?.name }]}
                    className="mb-4"
                />


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">


                    {/* Image Gallery Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-3 lg:sticky lg:top-24 max-w-2xl w-full mx-auto"
                    >

                        <div className="relative w-full bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-xs border-2 border-gray-100 group flex items-center justify-center min-h-[300px] md:min-h-[430px]">


                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={`${selectedColorIndex}-${selectedImageIndex}`}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full flex items-center justify-center isolate"
                                    style={{ mixBlendMode: 'multiply' }}
                                >

                                    <InnerImageZoom
                                        src={displayImages[selectedImageIndex] || displayImages[0]}
                                        zoomSrc={displayImages[selectedImageIndex] || displayImages[0]}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        hideCloseButton={true}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                        hideHint={true}
                                    />

                                </motion.div>

                            </AnimatePresence>


                            {/* Badges Overlay */}
                            <div className="absolute top-0 left-0 z-10 flex flex-col gap-2">
                                {statusBadge && <ProductBadge badge={statusBadge} />}
                            </div>


                        </div>


                        {displayImages?.length > 1 && (

                            <div className="grid grid-cols-6 gap-2">

                                {displayImages?.map((img, idx) => (

                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImageIndex(idx)}
                                        className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${selectedImageIndex === idx
                                            ? "border-stone-900 ring-1 ring-stone-900/20 scale-95 opacity-100"
                                            : "border-transparent bg-[#f8f8f8] hover:border-gray-300 opacity-70 hover:opacity-100"
                                            }`}
                                    >

                                        <img
                                            src={img}
                                            alt={`${product?.name} view ${idx + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover mix-blend-multiply p-0"
                                        />

                                    </button>

                                ))}

                            </div>

                        )}


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


                                {selectedVariant?.is_available ? (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        In Stock
                                    </span>

                                ) : (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-red-50 text-red-700 border border-red-100">
                                        Out of Stock
                                    </span>
                                )}


                                {selectedVariant?.is_available && selectedVariant?.available_stock > 0 && selectedVariant?.available_stock < 10 && (

                                    <span className="text-[10px] font-medium text-red-600 animate-pulse">
                                        Only {selectedVariant?.available_stock} left!
                                    </span>

                                )}


                                <div className="flex items-center text-amber-500 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                                    ))}
                                    <span className="text-stone-500 ml-2 text-xs font-medium border-b border-stone-200 pb-0.5 leading-none">Reviews</span>
                                </div>


                            </div>


                            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight leading-tight">
                                {product?.name}
                            </h1>


                            <div className="flex items-baseline gap-3 mt-2">
                                <span className="text-3xl font-bold text-stone-900 tracking-tight">
                                    ₹{(currentDiscountPrice || currentPrice)?.toLocaleString()}
                                </span>

                                {(currentDiscountPrice && currentDiscountPrice < currentPrice) && (
                                    <>
                                        <span className="text-lg text-stone-400 line-through font-light">
                                            ₹{currentPrice?.toLocaleString()}
                                        </span>
                                        {discountBadge && (
                                            <ProductBadge badge={discountBadge} variant="discount" className="scale-110 origin-left ml-2" />
                                        )}
                                    </>
                                )}
                            </div>

                        </motion.div>



                        <motion.div variants={itemVariants} className="h-px bg-stone-300" />


                        {/* Description (HTML) */}
                        <motion.div
                            variants={itemVariants}
                            className="prose prose-stone text-stone-600 leading-relaxed max-w-none text-sm"
                            dangerouslySetInnerHTML={{ __html: product?.description }}
                        />


                        {/* Key Features (HTML) */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-3">Key Features</h3>
                            <div
                                className="prose prose-sm prose-stone text-stone-600 [&>ul]:list-disc [&>ul]:pl-4 [&>li]:mb-1"
                                dangerouslySetInnerHTML={{ __html: product?.key_features }}
                            />
                        </motion.div>



                        {/* Selection Controls */}
                        <motion.div variants={itemVariants} className="space-y-8 pt-3">


                            {/* Color Selection */}
                            {product?.chair_colors && product?.chair_colors?.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-bold text-stone-900 mb-3 uppercase tracking-widest">
                                        Select Finish: <span className="text-stone-500 font-normal ml-1">{selectedVariant?.color_name}</span>
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-3">
                                        {product?.chair_colors.map((variant, idx) => (
                                            <button
                                                key={variant?.id}
                                                onClick={() => {
                                                    setSelectedColorIndex(idx);
                                                    setSelectedImageIndex(0); // Reset image on color change
                                                }}
                                                className={`group relative w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 ${selectedColorIndex === idx
                                                    ? 'border-stone-900 ring-1 ring-stone-900/20'
                                                    : 'border-transparent shadow-sm'
                                                    }`}
                                                title={variant?.color_name}
                                            >
                                                {/* Allow multiple color codes for dual tone */}
                                                <div className="absolute inset-0.5 rounded-full overflow-hidden flex transform rotate-45">
                                                    {variant?.color_codes && variant?.color_codes.map((code, codeIdx) => (
                                                        <span
                                                            key={codeIdx}
                                                            className="flex-1 h-full"
                                                            style={{ backgroundColor: code }}
                                                        />
                                                    ))}
                                                    {(!variant?.color_codes || variant?.color_codes.length === 0) && (
                                                        <span className="flex-1 h-full bg-stone-200" />
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {/* Quantity Selection */}
                            <div className="py-4 border-t border-stone-300">

                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest">Quantity</h3>
                                    {(product?.minimum_order_quantity || 1) > 1 && (
                                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 uppercase tracking-wider">
                                            Minimum Order: {product?.minimum_order_quantity} Units
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center w-full sm:w-auto bg-stone-50 rounded-full border border-stone-100 p-1.5 shadow-sm hover:shadow transition-shadow max-w-[180px]">

                                    <button
                                        onClick={handleDecrease}
                                        disabled={quantity <= (product?.minimum_order_quantity || 1)}
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
                                    disabled={!selectedVariant?.is_available}
                                    className="flex-1 bg-stone-900 text-white hover:bg-stone-800 h-16 text-lg rounded-full font-medium shadow-xl shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/30 transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0"
                                >
                                    {selectedVariant?.is_available ? (
                                        `Buy Now — ₹${((currentDiscountPrice || currentPrice) * quantity).toLocaleString()}`
                                    ) : (
                                        "Currently Unavailable"
                                    )}
                                </Button>
                                <Button
                                    variant="outline"
                                    disabled={!selectedVariant?.is_available}
                                    className="flex-1 h-16 text-lg rounded-full border-2 border-stone-200 hover:border-stone-900 hover:bg-stone-50 text-stone-900 font-medium transition-all hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] disabled:opacity-50"
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
            <RelatedProducts id={product?.unique_id} />


        </div>

    );

}
