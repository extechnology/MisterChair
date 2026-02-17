"use client";

import { useGetRelatedProducts } from "@/service/product/useProduct";
import ProductGrid from "./ProductGrid";
import { Loader2 } from "lucide-react";



export default function RelatedProducts({ id }: { id: string }) {


    const { data: relatedProducts, isLoading, isError } = useGetRelatedProducts(id);


    if (isLoading) {
        return (
            <div className="w-full py-12 flex justify-center items-center">
                <Loader2 className="w-8 h-8 animate-spin text-stone-300" />
            </div>
        );
    }


    if (isError || !relatedProducts || relatedProducts.length === 0) {
        return null;
    }


    return (

        <section className="py-6 bg-stone-50 relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-stone-300 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col items-center text-center mb-5 space-y-2">

                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">
                        You Might Also Like
                    </h2>

                    <div className="h-1 w-20 bg-stone-900/10 rounded-full" />

                    <p className="text-stone-500 max-w-lg mx-auto text-sm leading-relaxed">
                        Curated selections illustrating our commitment to comfort and style.
                        Perfect companions for your space.
                    </p>

                </div>

                <ProductGrid products={relatedProducts} />

            </div>

        </section>

    );


}
