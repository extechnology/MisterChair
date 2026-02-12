"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDropdown, { productCategories } from "@/components/common/ProductDropdown";



export default function Header() {


    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [expandedMobileLink, setExpandedMobileLink] = useState<string | null>(null);



    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Product", href: "/product", hasDropdown: true },
        { name: "Our Story", href: "/story" },
        { name: "Contact Us", href: "/contact" },
    ];



    const toggleMobileDropdown = (linkName: string) => {
        if (expandedMobileLink === linkName) {
            setExpandedMobileLink(null);
        } else {
            setExpandedMobileLink(linkName);
        }
    };



    return (


        <>


            <motion.header
                className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
            >


                <div className={`container mx-auto px-6 py-5 flex items-center justify-between shadow-sm md:rounded-sm max-w-[95%] transition-all ${isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"}`}>


                    {/* Left: Navigation (Desktop) */}
                    <nav className="hidden md:flex items-center space-x-8">


                        {navLinks.map((link) => (


                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => {
                                    if (link.hasDropdown) setIsProductDropdownOpen(true);
                                }}
                            >


                                <Link
                                    href={link.href}
                                    className="text-[#6b4c3b] hover:text-[#4a342a] font-medium text-sm transition-colors flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isProductDropdownOpen && link.hasDropdown ? "rotate-180" : ""}`} />}

                                </Link>


                                {/* Simple underline hover effect */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6b4c3b] transition-all duration-300 group-hover:w-full"></span>


                                {/* Desktop Dropdown */}
                                <AnimatePresence>
                                    {link.hasDropdown && isProductDropdownOpen && (
                                        <div
                                            className="absolute top-full left-[-20px] pt-4" // Padding for hover bridge
                                            onMouseEnter={() => setIsProductDropdownOpen(true)}
                                            onMouseLeave={() => setIsProductDropdownOpen(false)}
                                        >
                                            <ProductDropdown onLinkClick={() => setIsProductDropdownOpen(false)} />
                                        </div>
                                    )}
                                </AnimatePresence>


                            </div>

                        ))}

                    </nav>



                    {/* Mobile Menu Button - Left Aligned on Mobile */}
                    <button
                        className="md:hidden text-stone-800"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>



                    {/* Center: Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/" className="block">
                            <img src="/logo.png" alt="Mr. Chair" className="h-40 w-auto object-contain" />
                        </Link>
                    </div>



                    {/* Right: Icons */}
                    <div className="flex items-center gap-4 md:gap-5">
                        <button className="text-[#6b4c3b] hover:text-[#4a342a] transition-colors">
                            <Search size={22} />
                        </button>
                        <button className="relative text-[#6b4c3b] hover:text-[#4a342a] transition-colors">
                            <ShoppingBag size={22} />
                            <span className="absolute -top-1 -right-1 bg-[#6b4c3b] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </button>
                    </div>

                </div>

            </motion.header>



            {/* Mobile Menu Overlay */}
            <AnimatePresence>


                {isMobileMenuOpen && (

                    <>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-xl p-6 md:hidden flex flex-col overflow-y-auto"
                        >

                            <div className="flex justify-between items-center mb-8">

                                <span className="block w-32">
                                    <img src="/logo.png" alt="Mr. Chair" className="h-10 w-auto object-contain" />
                                </span>

                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-stone-500" />
                                </button>

                            </div>



                            <nav className="flex flex-col gap-4">


                                {navLinks.map((link) => (


                                    <div key={link.name} className="border-b border-stone-100 pb-2">


                                        <div
                                            className="flex justify-between items-center py-2"
                                            onClick={() => {
                                                if (link.hasDropdown) {
                                                    toggleMobileDropdown(link.name);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >

                                            <Link
                                                href={link.href}
                                                className="text-lg font-medium text-stone-700 block grow"
                                                onClick={(e) => {
                                                    if (link.hasDropdown) e.preventDefault();
                                                }}
                                            >
                                                {link.name}
                                            </Link>


                                            {link.hasDropdown && (
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleMobileDropdown(link.name);
                                                }}>
                                                    {expandedMobileLink === link.name ? <ChevronUp size={20} className="text-stone-500" /> : <ChevronDown size={20} className="text-stone-500" />}
                                                </button>
                                            )}

                                        </div>



                                        {/* Mobile Dropdown Content */}
                                        <AnimatePresence>

                                            {link.hasDropdown && expandedMobileLink === link.name && (


                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-4"
                                                >


                                                    <div className="flex flex-col gap-4 py-2">


                                                        {productCategories.map(category => (


                                                            <div key={category.title}>


                                                                <span className="text-sm font-bold text-[#b8604f] block mb-2">{category.title}</span>


                                                                <ul className="pl-2 border-l-2 border-stone-100 space-y-2">


                                                                    {category.items.map(item => (


                                                                        <li key={item.name}>


                                                                            <Link
                                                                                href={item.href}
                                                                                className="text-stone-600 text-sm block py-1"
                                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                            >
                                                                                {item.name}
                                                                            </Link>

                                                                        </li>

                                                                    ))}

                                                                </ul>

                                                            </div>

                                                        ))}

                                                    </div>

                                                </motion.div>

                                            )}

                                        </AnimatePresence>

                                    </div>

                                ))}

                            </nav>


                            <div className="mt-8">
                                <div className="flex items-center bg-stone-50 rounded-lg px-4 py-3 border border-stone-100">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="bg-transparent border-none outline-none text-sm w-full text-stone-800"
                                    />
                                    <Search size={18} className="text-stone-400" />
                                </div>
                            </div>


                        </motion.div>

                    </>


                )}


            </AnimatePresence>


        </>


    );


}
