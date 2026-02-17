"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { ChairColors } from "@/service/product/type";

// Mock Data for Search (Replace with API call in real app)
const MOCK_PRODUCTS = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000",
        chairColors: [
            { id: 1, color_name: "Classic Brown", color_codes: ["#8B4513"], chair_images: [], discount_percentage: 0, price: "12000", discount_price: "0", if_discount: false, is_available: true, available_stock: 10, created_at: "" },
            { id: 2, color_name: "Midnight Black", color_codes: ["#000000"], chair_images: [], discount_percentage: 0, price: "12000", discount_price: "0", if_discount: false, is_available: true, available_stock: 10, created_at: "" }
        ] as ChairColors[],
        title: "Eames Lounge Chair",
        price: 45000,
        url: "/product/eames-lounge",
        category: "Lounge"
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=1000",
        chairColors: [],
        title: "Modern velvet Armchair",
        price: 18500,
        discountPrice: 15999,
        url: "/product/velvet-armchair",
        category: "Armchair",
        specialTag: 'Bestseller' as const
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=1000",
        chairColors: [],
        title: "Minimalist Dining Chair",
        price: 8500,
        url: "/product/dining-chair",
        category: "Dining"
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000",
        chairColors: [],
        title: "Ergonomic Office Chair",
        price: 22000,
        url: "/product/office-chair",
        category: "Office",
        specialTag: 'New' as const
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000",
        chairColors: [],
        title: "Scandinavian Rocking Chair",
        price: 12500,
        url: "/product/rocking-chair",
        category: "Living Room"
    }

];




interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}





export default function SearchModal({ isOpen, onClose }: SearchModalProps) {


    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(typeof window !== "undefined" ? MOCK_PRODUCTS : []);
    const inputRef = useRef<HTMLInputElement>(null);



    // Focus input when modal opens
    useEffect(() => {

        if (isOpen) {

            setSearchQuery("");
            setFilteredProducts(MOCK_PRODUCTS);

            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }

    }, [isOpen]);




    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);



    // Handle search filtering
    useEffect(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) {
            setFilteredProducts(MOCK_PRODUCTS);
            return;
        }

        const filtered = MOCK_PRODUCTS.filter(product =>
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    }, [searchQuery]);



    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);


    if (!isOpen) return null;


    return (


        <AnimatePresence mode="wait">


            {isOpen && (


                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">


                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-stone-900/40 backdrop-blur-md"
                        onClick={onClose}
                    />


                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-[90vw] h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Header / Search Input */}
                        <div className="flex items-center gap-6 p-8 border-b border-stone-200 bg-white sticky top-0 z-10">

                            <Search className="text-stone-800 shrink-0" size={32} />

                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search for chairs, collections..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 text-3xl font-light outline-none text-stone-900 placeholder:text-stone-600 bg-transparent tracking-tight"
                            />

                            <button
                                onClick={onClose}
                                className="p-3 hover:bg-stone-50 rounded-full transition-colors text-stone-400 hover:text-stone-800 shrink-0"
                            >
                                <X size={28} />
                            </button>

                        </div>



                        {/* Recent / Results Area */}
                        <div
                            className="flex-1 overflow-y-auto p-6 bg-[#fafafa] custom-scrollbar pb-20"
                            style={{ overscrollBehavior: 'contain' }}
                            onWheel={(e) => e.stopPropagation()}
                        >


                            {/* Results Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-widest">
                                    {searchQuery ? `Found ${filteredProducts.length} results` : "Suggested Products"}
                                </h4>
                            </div>


                            {/* Product Grid */}
                            {filteredProducts.length > 0 ? (

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                                    {filteredProducts.map((product) => (

                                        <div key={product.id} onClick={onClose} className="h-full">
                                            <ProductCard {...product} />
                                        </div>

                                    ))}

                                </div>


                            ) : (

                                <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                                    <Search size={48} className="text-stone-300 mb-4" />
                                    <p className="text-xl text-stone-500 font-medium">No matches found</p>
                                    <p className="text-stone-400 mt-2">Try adjusting your search</p>
                                </div>

                            )}


                        </div>



                        {/* Footer */}
                        <div className="py-4 px-8 bg-white border-t border-stone-100 flex items-center justify-between text-xs text-stone-400 font-medium">

                            <span className="hidden sm:inline">Search across our entire collection</span>

                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2">
                                    <kbd className="px-2 py-1 bg-stone-100 rounded-md text-[10px] text-stone-600 font-sans">ESC</kbd> to close
                                </span>
                            </div>

                        </div>


                    </motion.div>

                </div>

            )}

        </AnimatePresence>

    );

}
