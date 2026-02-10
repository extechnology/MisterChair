"use client";

import React from 'react';
import { ProductBadgeConfig } from '@/hooks/useProductBadges';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ProductBadgeProps {
    badge: ProductBadgeConfig;
    variant?: 'default' | 'status' | 'discount';
    className?: string;
}

export default function ProductBadge({ badge, variant = 'default', className }: ProductBadgeProps) {
    if (!badge) return null;

    // Stunning Discount Badge
    if (variant === 'discount') {
        return (
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                    "relative inline-flex items-center justify-center px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-tight uppercase shadow-sm overflow-hidden border border-rose-200",
                    "bg-rose-50 text-rose-600",
                    className
                )}>
                {/* Subtle Shine */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent opacity-50" />
                <span className="relative z-10">{badge.label}</span>
            </motion.div>
        )
    }

    // Default / Status Variant (Modern, Gradient, Shimmer)
    return (
        <div
            className={cn(
                "relative overflow-hidden px-3 py-1.5 rounded-br-2xl text-[10px] sm:text-xs font-bold text-white shadow-lg uppercase tracking-wider backdrop-blur-md", // sleek shape
                badge.colorClass,
                "bg-linear-to-r", badge.gradientClass,
                className
            )}
        >
            {/* Glassy reflection top */}
            <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
            <div className="absolute inset-y-0 left-0 w-px bg-white/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20 rounded-tl-lg" />

            {/* Shimmer Effect - faster and tilted */}
            <div className="absolute inset-0 z-0 mix-blend-overlay">
                <div className="animate-shimmer w-1/2 h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />
            </div>

            {/* Content */}
            <span className="relative z-10 drop-shadow-md">{badge.label}</span>
        </div>
    );
}
