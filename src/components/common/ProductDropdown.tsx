"use client";

import Link from "next/link";
import { motion } from "framer-motion";




// Dropdown Data
export const productCategories = [
    {
        title: "Living Room",
        items: [
            { name: "Sofas & Sectionals", href: "/products?category=sofas" },
            { name: "Coffee Tables", href: "/products?category=tables" },
            { name: "Accent Chairs", href: "/products?category=chairs" },
            { name: "TV Stands", href: "/products?category=tables" }, // Mapped to tables for demo
        ],
    },
    {
        title: "Bedroom",
        items: [
            { name: "Beds & Headboards", href: "/products?category=sofas" }, // Demo mapping
            { name: "Dressers", href: "/products?category=tables" },
            { name: "Nightstands", href: "/products?category=tables" },
            { name: "Mattresses", href: "/products?category=sofas" },
        ],
    },
    {
        title: "Dining",
        items: [
            { name: "Dining Tables", href: "/products?category=tables" },
            { name: "Dining Chairs", href: "/products?category=chairs" },
            { name: "Bar Stools", href: "/products?category=chairs" },
            { name: "Sideboards", href: "/products?category=tables" },
        ],
    },
    {
        title: "Office",
        items: [
            { name: "Desks", href: "/products?category=tables" },
            { name: "Office Chairs", href: "/products?category=chairs" },
            { name: "Bookcases", href: "/products?category=tables" },
            { name: "Lighting", href: "/products?category=lighting" },
        ],
    },
];





export default function ProductDropdown({ onLinkClick }: { onLinkClick?: () => void }) {


    return (


        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-lg border border-stone-100 p-8 z-50 mt-2"
        >


            <div className="grid grid-cols-4 gap-8">
                {productCategories.map((category) => (
                    <div key={category.title}>
                        <h3 className="font-serif font-bold text-[#6b4c3b] mb-4 border-b border-stone-100 pb-2">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-stone-600 hover:text-[#b8604f] transition-colors text-sm font-medium block"
                                        onClick={onLinkClick}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>


            {/* Featured Section at Bottom */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">

                <span className="text-stone-500 text-sm">New Collection {new Date().getFullYear()}</span>

                <Link
                    href="/new-arrivals"
                    className="text-[#6b4c3b] font-semibold text-sm hover:underline"
                    onClick={onLinkClick}
                >
                    View all new arrivals &rarr;
                </Link>

            </div>

        </motion.div>

    );


}
