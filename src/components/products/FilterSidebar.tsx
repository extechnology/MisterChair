"use client";

import { Check } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useFilterSidebar } from "../../hooks/useFilterSidebar";
import FilterGlobalLoader from "../loader/FilterGlobalLoader";




export default function FilterSidebar({ className = "" }: { className?: string }) {


    const {
        data,
        isLoading,
        error,
        priceRange,
        handleSliderCommit,
        handleSliderChange,
        updateFilter,
        applyPriceBubble,
        clearAll,
        isSelected,
        isBubbleActive,
        hasFilters,
        formatCurrency,
        MAX_PRICE_LIMIT,
        PRICE_BUBBLES,
        isPending
    } = useFilterSidebar();



    // Loading state
    if (isLoading) {
        return <div className={`w-full md:w-64 space-y-8 animate-pulse ${className}`}>
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="space-y-3">
                    <div className="h-4 bg-stone-200 w-1/3 rounded"></div>
                    <div className="space-y-2">
                        <div className="h-8 bg-stone-100 w-full rounded"></div>
                        <div className="h-8 bg-stone-100 w-full rounded"></div>
                        <div className="h-8 bg-stone-100 w-full rounded"></div>
                    </div>
                </div>
            ))}
        </div>;
    }



    // Error state
    if (error) {
        return (
            <div className={`w-full md:w-64 p-4 border border-red-200 bg-red-50 rounded-lg text-center ${className}`}>
                <p className="text-red-600 font-medium text-sm mb-2">Failed to load filters</p>
                <button
                    onClick={() => window.location.reload()}
                    className="text-xs text-red-500 underline hover:text-red-700"
                >
                    Retry
                </button>
            </div>
        );
    }



    if (!data) return null;



    return (


        <aside className={`w-full md:w-64 space-y-4 border-r border-stone-300 pr-8 pb-10 sm:pb-42 ${className}`}>

            {isPending && <FilterGlobalLoader text="Applying Filters..." />}

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
            {data.category && data.category.length > 0 && (

                <div className="pb-5 border-b border-stone-300">

                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Category</h4>

                    <ul className="space-y-4">

                        {data.category.map((cat, idx) => {

                            const active = isSelected("category", cat);

                            return (

                                <li key={cat + idx} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("category", cat)}>

                                    <div
                                        className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                    >
                                        {active && <Check size={14} className="text-white" />}
                                    </div>

                                    <span
                                        className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                    >
                                        {cat}
                                    </span>

                                </li>

                            );

                        })}

                    </ul>

                </div>

            )}


            {/* Height Stability */}
            {data.height_stability && data.height_stability.length > 0 && (

                <div className="pb-5 border-b border-stone-300">

                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Height Stability</h4>

                    <ul className="space-y-4">

                        {data.height_stability.map((item, idx) => {

                            const active = isSelected("height_stability", item);

                            return (

                                <li key={item + idx} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("height_stability", item)}>

                                    <div
                                        className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                    >
                                        {active && <Check size={14} className="text-white" />}
                                    </div>

                                    <span
                                        className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                    >
                                        {item}
                                    </span>

                                </li>

                            );

                        })}

                    </ul>

                </div>

            )}



            {/* Back Support */}
            {data.back_support && data.back_support.length > 0 && (

                <div className="pb-5 border-b border-stone-300">

                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Back Support</h4>

                    <ul className="space-y-4">

                        {data.back_support.map((item, idx) => {

                            const active = isSelected("back_support", item);

                            return (

                                <li key={item + idx} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("back_support", item)}>

                                    <div
                                        className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                    >
                                        {active && <Check size={14} className="text-white" />}
                                    </div>

                                    <span
                                        className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                    >
                                        {item}
                                    </span>

                                </li>

                            );

                        })}

                    </ul>

                </div>

            )}



            {/* Capacity */}
            {data.capacity && data.capacity.length > 0 && (

                <div className="pb-5 border-b border-stone-300">

                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Capacity</h4>

                    <ul className="space-y-4">

                        {data.capacity.map((item, idx) => {

                            const active = isSelected("capacity", item);

                            return (

                                <li key={item + idx} className="flex items-center gap-3 group cursor-pointer" onClick={() => updateFilter("capacity", item)}>

                                    <div
                                        className={`w-5 h-5 border rounded-md flex items-center justify-center transition-all duration-300 ${active ? "bg-stone-900 border-stone-900" : "border-stone-400 bg-white group-hover:border-stone-600"}`}
                                    >
                                        {active && <Check size={14} className="text-white" />}
                                    </div>

                                    <span
                                        className={`text-sm transition-colors duration-300 ${active ? "text-stone-900 font-semibold" : "text-stone-600 group-hover:text-stone-900"}`}
                                    >
                                        {item}
                                    </span>

                                </li>

                            );

                        })}

                    </ul>

                </div>

            )}


            {/* Colors */}
            {data.color && data.color.length > 0 && (

                <div className="pb-5 border-b border-stone-300">

                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">Color</h4>

                    <div className="grid grid-cols-4 gap-y-6 gap-x-2">

                        {data.color.map((col, idx) => {

                            const active = isSelected("color", col.name);

                            const backgroundStyle = col.code && col.code.length > 1
                                ? { background: `linear-gradient(to bottom, ${col.code[0]} 50%, ${col.code[1]} 50%)` }
                                : { backgroundColor: col.code && col.code.length > 0 ? col.code[0] : '#cccccc' };


                            return (

                                <div key={col.name + idx} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => updateFilter("color", col.name)}>

                                    <div
                                        className={`w-10 h-10 rounded-full border border-stone-200 relative flex items-center justify-center transition-all duration-300 ${active ? "scale-110 shadow-md ring-2 ring-offset-2 ring-stone-900" : "group-hover:scale-105 border-stone-300"}`}
                                        style={backgroundStyle}
                                        title={col.name}
                                    >
                                        {active && <Check size={16} className={col.name.toLowerCase() === 'white' || col.name.toLowerCase() === 'beige' ? "text-stone-900" : "text-white"} />}
                                    </div>

                                    <span className={`text-[10px] text-center font-medium transition-colors ${active ? "text-stone-900" : "text-stone-500 group-hover:text-stone-800"}`}>
                                        {col.name}
                                    </span>

                                </div>

                            );

                        })}

                    </div>

                </div>

            )}



            {/* Price Range */}
            <div className="pb-8 border-b border-stone-300">

                <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900">Price Range</h4>
                </div>


                {/* Min/Max Labels */}
                <div className="flex justify-between items-end mb-4">

                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Min Price</span>
                        <span className="text-lg font-bold text-stone-900 leading-none">{formatCurrency(priceRange[0])}</span>
                    </div>

                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Max Price</span>
                        <span className="text-lg font-bold text-stone-900 leading-none">{formatCurrency(priceRange[1])}</span>
                    </div>

                </div>


                {/* Slider */}
                <div className="mb-8 px-1">
                    <Slider
                        defaultValue={[0, MAX_PRICE_LIMIT]}
                        max={MAX_PRICE_LIMIT}
                        step={1000}
                        value={priceRange}
                        onValueChange={handleSliderChange}
                        onValueCommit={handleSliderCommit}
                        minStepsBetweenThumbs={1}
                    />
                </div>


                {/* Price Bubbles */}
                <div className="flex flex-wrap gap-2">

                    {PRICE_BUBBLES.map((bubble, index) => {

                        const isActive = isBubbleActive(bubble.min, bubble.max);

                        return (

                            <button
                                key={index}
                                onClick={() => applyPriceBubble(bubble.min, bubble.max)}
                                className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${isActive
                                    ? "bg-stone-900 text-white border-stone-900 shadow-md"
                                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900"
                                    }`}
                            >
                                {bubble.label}
                            </button>
                        );
                    })}

                </div>

            </div>

        </aside>

    );

}
