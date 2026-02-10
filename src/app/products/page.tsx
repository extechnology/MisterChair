import { Suspense } from "react";
import FilterSidebar from "@/components/products/FilterSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import Pagination from "@/components/products/Pagination";
import { products, filters } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";





// Define Page Props with searchParams
export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {


    const params = await searchParams;
    const page = typeof params.page === "string" ? parseInt(params.page) : 1;



    // Parse filters as arrays (comma separated)
    const categoryParam = typeof params.category === "string" ? params.category : "";
    const categories = categoryParam ? categoryParam.split(",") : [];

    const materialParam = typeof params.material === "string" ? params.material : "";
    const materials = materialParam ? materialParam.split(",") : [];

    const colorParam = typeof params.color === "string" ? params.color : "";
    const selectedColors = colorParam ? colorParam.split(",") : [];



    // --- Mock Backend Filtering Logic ---
    let filteredProducts = products.filter((p) => {


        // Category Filter
        if (categories.length > 0 && !categories.includes(p.category)) return false;


        // Material Filter
        if (materials.length > 0 && !materials.includes(p.material)) return false;


        // Color Filter
        if (selectedColors.length > 0) {


            // Get hex codes for selected color IDs
            const selectedHexes = filters.colors.filter(c => selectedColors.includes(c.id)).map(c => c.value.toLowerCase());


            // Check if product has ANY of the selected colors
            const hasColor = p.colors.some(productColor =>
                selectedHexes.includes(productColor.toLowerCase())
            );

            if (!hasColor) return false;
        }


        return true;


    });



    // Pagination Logic
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);




    return (


        <main className="bg-white min-h-screen pt-24 pb-10 px-4 md:px-10">


            <div className="max-w-[1440px] mx-auto">


                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-stone-300 pb-5">

                    <div>

                        <div className="text-sm text-stone-400 mb-2 flex gap-2">
                            <Link href="/" className="hover:text-stone-800">Home</Link> / <span className="text-stone-800">Shop</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-light text-stone-900">
                            Shop <span className="font-serif italic text-stone-700">All Products</span>
                        </h1>

                    </div>

                    <div className="text-stone-500 font-medium mt-4 md:mt-0">
                        Showing {paginatedProducts.length} of {filteredProducts.length} results
                    </div>

                </div>



                <div className="flex flex-col lg:flex-row gap-6 sm:gap-12">


                    {/* Desktop Sidebar */}
                    <div
                        className="hidden lg:block w-64 shrink-0 sticky top-28 overflow-y-auto no-scrollbar overscroll-contain self-start"
                        style={{ maxHeight: 'calc(100vh - 8rem)' }}
                        data-lenis-prevent
                    >

                        <Suspense>

                            <FilterSidebar />

                        </Suspense>

                    </div>



                    {/* Mobile Filters (Simplified Placeholder) */}
                    <div className="lg:hidden mb-0">

                        <details className="group">

                            <summary className="flex items-center gap-2 cursor-pointer font-medium text-stone-900 bg-stone-200 p-4 rounded-lg list-none justify-between">

                                <span className="flex items-center gap-2"><SlidersHorizontal size={18} /> Filters</span>
                                <span className="transform group-open:rotate-180 transition-transform">▼</span>

                            </summary>

                            <div className="mt-4 p-4 border border-stone-300 rounded-lg">

                                <Suspense>

                                    <FilterSidebar className="w-full" />

                                </Suspense>

                            </div>

                        </details>

                    </div>



                    {/* Main Content */}
                    <div className="flex-1">

                        <ProductGrid products={paginatedProducts} />

                        <Pagination totalPages={totalPages} currentPage={page} />

                    </div>

                </div>


            </div>

        </main>

    );

}
