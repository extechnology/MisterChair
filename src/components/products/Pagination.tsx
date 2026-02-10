"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";




export default function Pagination({ totalPages, currentPage }: { totalPages: number, currentPage: number }) {


    const router = useRouter();
    const searchParams = useSearchParams();


    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`/products?${params.toString()}`);
    };


    if (totalPages <= 1) return null;



    return (


        <div className="flex justify-center items-center gap-4 mt-8 sm:mt-16">


            <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <ChevronLeft size={18} />
            </button>


            <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => changePage(page)}
                        className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${currentPage === page ? "bg-stone-900 text-white" : "text-stone-600 hover:bg-stone-100"}`}
                    >
                        {page}
                    </button>
                ))}
            </div>


            <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >

                <ChevronRight size={18} />

            </button>


        </div>

    );


}
