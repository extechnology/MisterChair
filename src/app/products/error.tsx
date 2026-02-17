"use client";


import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";




export default function Error({ error, reset, }: { error: Error & { digest?: string }; reset: () => void; }) {


    useEffect(() => {
        console.error(error);
    }, [error]);


    return (


        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-stone-50 overflow-hidden px-4">


            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />


            {/* Ambient Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/50 rounded-full blur-[120px] pointer-events-none" />


            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center max-w-md w-full text-center"
            >


                {/* Animated Icon */}
                <div className="relative mb-8">


                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-24 h-24 bg-white rounded-full shadow-xl shadow-red-100 flex items-center justify-center border border-red-50"
                    >
                        <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
                    </motion.div>


                    {/* Pulsing Ring */}
                    <motion.div
                        className="absolute inset-0 -m-4 border border-red-100 rounded-full"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />


                </div>



                {/* Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >

                    <h2 className="text-3xl font-serif text-stone-900 mb-3">
                        Something went wrong
                    </h2>

                    <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
                        We encountered an unexpected issue. Please try refreshing the page or return home.
                    </p>

                </motion.div>



                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >

                    <button
                        onClick={reset}
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-200 hover:shadow-xl hover:scale-105"
                    >
                        <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-sm font-medium">Try Again</span>
                    </button>


                    <Link
                        href="/"
                        className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-stone-900 border border-stone-200 rounded-full hover:border-stone-300 hover:bg-stone-50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                    >
                        <Home size={16} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                        <span className="text-sm font-medium">Go Home</span>
                    </Link>

                </motion.div>



                {/* Dev Details (Hidden in Prod) */}
                {process.env.NODE_ENV === 'development' && (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-12 pt-6 border-t border-stone-100 w-full"
                    >
                        <p className="text-[10px] font-mono text-stone-400 mb-2 uppercase tracking-widest">Error Details</p>
                        <div className="bg-stone-100/50 p-3 rounded-lg text-[10px] text-red-800 font-mono text-left overflow-auto max-h-24 leading-relaxed">
                            {error.message || "Unknown error occurred"}
                        </div>
                    </motion.div>

                )}


            </motion.div>


        </div>

    );


}
