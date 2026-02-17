"use client";

import { Suspense } from "react";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import Pagination from "@/components/products/Pagination";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { Results } from "@/service/product/type";




// Props type
interface ShopClientProps {
    products: Results[];
    totalCount: number;
    currentPage: number;
    totalpages: number;
}



export default function ShopClient({ products, totalCount, currentPage, totalpages, }: ShopClientProps) {



    return (



        <main className="bg-white min-h-screen pt-24 pb-10 px-4 md:px-10">



            <div className="max-w-[1440px] mx-auto">



                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-stone-300 pb-5">


                    <div>


                        <div className="text-sm text-stone-400 mb-2 flex gap-2">
                            <Link href="/" className="hover:text-stone-800">
                                Home
                            </Link>{" "}
                            / <span className="text-stone-800">Shop</span>
                        </div>


                        <h1 className="text-4xl md:text-5xl font-light text-stone-900 capitalize">
                            Shop{" "}
                            <span className="font-serif italic text-stone-700">
                                All Products
                            </span>
                        </h1>

                    </div>


                    <div className="text-stone-500 font-medium mt-4 md:mt-0">
                        Showing {products.length} of {totalCount} results
                    </div>


                </div>



                <div className="flex flex-col lg:flex-row gap-6 sm:gap-12">


                    {/* Desktop Sidebar */}
                    <div
                        className="hidden lg:block w-64 shrink-0 sticky top-28 overflow-y-auto no-scrollbar overscroll-contain self-start"
                        style={{ maxHeight: "calc(100vh - 8rem)" }}
                        data-lenis-prevent
                    >

                        <Suspense fallback={<div>Loading filters...</div>}>
                            <FilterSidebar />
                        </Suspense>

                    </div>



                    {/* Mobile Filters */}
                    <div className="lg:hidden mb-0">


                        <details className="group">

                            <summary className="flex items-center gap-2 cursor-pointer font-medium text-stone-900 bg-stone-200 p-4 rounded-lg list-none justify-between">

                                <span className="flex items-center gap-2">
                                    <SlidersHorizontal size={18} /> Filters
                                </span>

                                <span className="transform group-open:rotate-180 transition-transform">
                                    ▼
                                </span>

                            </summary>

                            <div className="mt-4 p-4 border border-stone-300 rounded-lg">

                                <Suspense fallback={<div>Loading filters...</div>}>
                                    <FilterSidebar className="w-full" />
                                </Suspense>

                            </div>

                        </details>

                    </div>


                    {/* Main Content */}
                    <div className="flex-1">
                        <ProductGrid products={products} />
                        <Pagination totalPages={totalpages} currentPage={currentPage} />
                    </div>


                </div>


            </div>


        </main>


    );


}
