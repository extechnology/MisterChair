"use client";


import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetFliterSidebar } from "@/service/product/useProduct";



const PRICE_BUBBLES = [
    { label: "Under ₹50k", min: 0, max: 50000 },
    { label: "₹50k - ₹1.5L", min: 50000, max: 150000 },
    { label: "₹1.5L - ₹3L", min: 150000, max: 300000 },
    { label: "Over ₹3L", min: 300000, max: 1000000 },
];


const MAX_PRICE_LIMIT = 600000;



export const useFilterSidebar = () => {


    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();


    const { data, isLoading, error } = useGetFliterSidebar();


    // Local state for price slider [min, max]
    const [priceRange, setPriceRange] = useState([0, MAX_PRICE_LIMIT]);


    useEffect(() => {
        const min = searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice")!) : 0;
        const max = searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : MAX_PRICE_LIMIT;
        setPriceRange([min, max]);
    }, [searchParams]);




    // Update URL on slider commit
    const handleSliderCommit = (value: number[]) => {

        const params = new URLSearchParams(searchParams.toString());
        params.set("minPrice", value[0].toString());
        params.set("maxPrice", value[1].toString());
        params.delete("page");

        startTransition(() => {
            router.push(`/products?${params.toString()}`, { scroll: true });
        });

    };



    // Update local state while sliding
    const handleSliderChange = (value: number[]) => {
        setPriceRange(value);
    };



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

        startTransition(() => {
            router.push(`/products?${params.toString()}`, { scroll: true });
        });

    };




    // Apply Price Bubble
    const applyPriceBubble = (min: number, max: number) => {
     
        const params = new URLSearchParams(searchParams.toString());
        params.set("minPrice", min.toString());
        params.set("maxPrice", max.toString());
        params.delete("page");

        startTransition(() => {
            router.push(`/products?${params.toString()}`, { scroll: true });
        });
    
    };



    // Clear all filters
    const clearAll = () => {
      
        setPriceRange([0, MAX_PRICE_LIMIT]);
        startTransition(() => {
            router.push("/products", { scroll: true });
        });
    
    };



    // Check if value is selected
    const isSelected = (key: string, value: string) => {
        const current = searchParams.get(key);
        if (!current) return false;
        return current.split(",").includes(value);
    };



    // Check if bubble is active
    const isBubbleActive = (min: number, max: number) => {
        const currentMin = searchParams.get("minPrice") ? parseInt(searchParams.get("minPrice")!) : 0;
        const currentMax = searchParams.get("maxPrice") ? parseInt(searchParams.get("maxPrice")!) : MAX_PRICE_LIMIT;
        return currentMin === min && currentMax === max;
    };



    const hasFilters =
        searchParams.has("category") ||
        searchParams.has("height_stability") ||
        searchParams.has("back_support") ||
        searchParams.has("capacity") ||
        searchParams.has("colors") ||
        searchParams.has("minPrice") ||
        searchParams.has("maxPrice");



    // Format currency helper
    const formatCurrency = (value: number) => {
        if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
        if (value >= 1000) return `₹${(value / 1000).toFixed(0)}k`;
        return `₹${value}`;
    };



    return {
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
    };


};
