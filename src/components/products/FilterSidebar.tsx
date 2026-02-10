"use client";


import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { filters } from "@/data/products";



export default function FilterSidebar({ className = "" }: { className?: string }) {


    const router = useRouter();
    const searchParams = useSearchParams();


    // Helper to update URL (Multi-select logic)
    const updateFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        const current = params.get(key);
        let newValues = current ? current.split(",") : [];

        if (newValues.includes(value)) {
            newValues = newValues.filter(v => v !== value);
        } else {
            newValues.push(value);
        }

        if (newValues.length > 0) {
            params.set(key, newValues.join(","));
        } else {
            params.delete(key);
        }

        params.delete("page");
        router.push(`/products?${params.toString()}`, { scroll: false });
    };




    // Clear all filters
    const clearAll = () => {
        router.push("/products", { scroll: false });
    };



    // Check if value is selected
    const isSelected = (key: string, value: string) => {
        const current = searchParams.get(key);
        if (!current) return false;
        return current.split(",").includes(value);
    };



    const hasFilters = searchParams.has("category") || searchParams.has("material") || searchParams.has("color") || searchParams.has("price") || searchParams.has("sort");



    return (


        <aside className={`w-full md:w-64 space-y-4 border-r border-stone-300 pr-8 pb-10 sm:pb-42 ${className}`}>


            <div className="flex items-center justify-between pb-4 pt-0 mb-4 border-b border-stone-300 sticky top-0 z-10 bg-white">

                <h3 className="text-2xl font-serif italic text-stone-900">Filters</h3>

                {hasFilters && (

                    <button
                        onClick={clearAll}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Clear All
                    </button>

                )}

            </div>



            {/* Categories */}
            <div className="pb-5 border-b border-stone-300">


                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Category</h4>


                <ul className="space-y-4">

                    {filters.categories.map((cat) => {

                        const active = isSelected("category", cat.id);

                        return (

                            <li key={cat.id} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("category", cat.id)}>

                                <div
                                    className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                >
                                    {active && <Check size={14} className="text-white" />}
                                </div>

                                <span
                                    className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                >
                                    {cat.label}
                                </span>

                            </li>

                        );

                    })}

                </ul>

            </div>



            {/* Price Range */}
            <div className="pb-5 border-b border-stone-300">

                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Price Range</h4>

                <ul className="space-y-4">

                    {filters.priceRanges.map((range) => {

                        const active = isSelected("price", range.id);

                        return (

                            <li key={range.id} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("price", range.id)}>

                                <div
                                    className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                >
                                    {active && <Check size={14} className="text-white" />}
                                </div>

                                <span
                                    className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                >
                                    {range.label}
                                </span>

                            </li>

                        );

                    })}

                </ul>

            </div>



            {/* Materials */}
            <div className="pb-5 border-b border-stone-300">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Material</h4>
                <ul className="space-y-4">
                    {filters.materials.map((mat) => {
                        const active = isSelected("material", mat.id);
                        return (
                            <li key={mat.id} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("material", mat.id)}>
                                <div
                                    className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                >
                                    {active && <Check size={14} className="text-white" />}
                                </div>
                                <span
                                    className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                >
                                    {mat.label}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>




            {/* Colors */}
            <div className="pb-5 border-b border-stone-300">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Color</h4>
                <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                    {filters.colors.map((col) => {
                        const active = isSelected("color", col.id);
                        return (
                            <div key={col.id} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => updateFilter("color", col.id)}>
                                <div
                                    className={`w-10 h-10 rounded-full border border-stone-200 relative flex items-center justify-center transition-all duration-300 ${active ? "scale-110 shadow-md ring-2 ring-offset-2 ring-stone-900" : "group-hover:scale-105 border-stone-300"}`}
                                    style={{ backgroundColor: col.value }}
                                    title={col.label}
                                >
                                    {active && <Check size={16} className={col.id === 'white' || col.id === 'beige' ? "text-stone-900" : "text-white"} />}
                                </div>
                                <span className={`text-[10px] text-center font-medium transition-colors ${active ? "text-stone-900" : "text-stone-500 group-hover:text-stone-800"}`}>
                                    {col.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>



            {/* Sort By */}
            <div className="pb-5 border-b border-stone-300">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Sort By</h4>
                <div className="space-y-4">
                    {filters.sortOptions.map((option) => {
                        const currentSort = searchParams.get("sort");
                        const active = currentSort === option.id;
                        return (
                            <div
                                key={option.id}
                                className="flex items-center gap-3 group cursor-pointer"
                                onClick={() => {
                                    const params = new URLSearchParams(searchParams.toString());
                                    if (active) params.delete("sort");
                                    else params.set("sort", option.id);
                                    params.delete("page");
                                    router.push(`/products?${params.toString()}`, { scroll: false });
                                }}
                            >
                                <div
                                    className={`w-5 h-5 border rounded-full flex items-center justify-center transition-all duration-300 ${active ? "border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                >
                                    {active && <div className="w-2.5 h-2.5 rounded-full bg-stone-900" />}
                                </div>
                                <span
                                    className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-bold" : "text-stone-600 group-hover:text-stone-900"}`}
                                >
                                    {option.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </aside>
    );
}
