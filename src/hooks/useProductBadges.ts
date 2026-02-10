
export interface ProductBadgeConfig {
    type: 'discount' | 'new' | 'bestseller' | 'trending' | 'limited';
    label: string;
    description: string;
    colorClass: string; // Tailwind bg color class
    gradientClass?: string; // Optional gradient for extra flair
    textColorClass?: string;
    ringColorClass?: string;
}

interface UseProductBadgesProps {
    price: number;
    discountPrice?: number;
    isNew?: boolean;
    isBestSeller?: boolean;
    isTrending?: boolean;
    isLimited?: boolean;
}

export const useProductBadges = ({
    price,
    discountPrice,
    isNew,
    isBestSeller,
    isTrending,
    isLimited,
}: UseProductBadgesProps) => {
    let discountBadge: ProductBadgeConfig | null = null;
    let statusBadge: ProductBadgeConfig | null = null;

    // 1. Calculate Discount Badge
    if (discountPrice && discountPrice < price) {
        const off = Math.round(((price - discountPrice) / price) * 100);
        if (off > 0) {
            discountBadge = {
                type: 'discount',
                label: `${off}% OFF`,
                description: 'Discounted Price',
                colorClass: 'bg-rose-100', // lighter bg
                textColorClass: 'text-rose-700',
                ringColorClass: 'ring-rose-200',
            };
        }
    }

    // 2. Determine Status Badge (Priority: Limited > BestSeller > New > Trending)
    if (isLimited) {
        statusBadge = {
            type: 'limited',
            label: 'Limited Edition',
            description: 'Limited Edition',
            colorClass: 'bg-purple-600',
            gradientClass: 'from-purple-500 via-purple-600 to-purple-800',
            textColorClass: 'text-white',
        };
    } else if (isBestSeller) {
        statusBadge = {
            type: 'bestseller',
            label: 'Best Seller',
            description: 'Best Selling Product',
            colorClass: 'bg-emerald-600',
            gradientClass: 'from-emerald-500 via-emerald-600 to-emerald-800',
            textColorClass: 'text-white',
        };
    } else if (isNew) {
        statusBadge = {
            type: 'new',
            label: 'New Arrival',
            description: 'New Arrival',
            colorClass: 'bg-rose-600',
            gradientClass: 'from-rose-500 via-rose-600 to-rose-800',
            textColorClass: 'text-white',
        };
    } else if (isTrending) {
        statusBadge = {
            type: 'trending',
            label: 'Trending',
            description: 'Trending Now',
            colorClass: 'bg-amber-500',
            gradientClass: 'from-amber-400 via-amber-500 to-amber-600',
            textColorClass: 'text-white',
        };
    }

    return { discountBadge, statusBadge };
};
