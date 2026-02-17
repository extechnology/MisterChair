

// Single Color Type
export type SidebarColor = {
    name: string;
    code: string[];
};


// Main Sidebar Response Type
export type SidebarResponse = {
    category: string[];
    height_stability: string[];
    back_support: string[];
    capacity: string[];
    color: SidebarColor[];
};



// Filter response 
export interface PaginatedResponse {
    count: number;
    total_pages: number;
    current_page: number;
    next?: null;
    previous?: null;
    results: Results[];
}


export interface Results {
    id: number;
    chair_colors: ChairColors[];
    category: string;
    unique_id: string;
    name: string;
    description: string;
    special_tag: 'New' | 'Bestseller' | 'Trending' | 'Limited' | undefined;
    minimum_order_quantity: number;
    height_stability: string;
    back_support: string;
    capacity: string;
    key_features: string;
}


export interface ChairColors {
    id: number;
    chair_images: string[] | unknown[];
    discount_percentage: number;
    color_codes: string[];
    color_name: string;
    price: string;
    discount_price: string;
    if_discount: boolean;
    is_available: boolean;
    available_stock: number;
    created_at: string;
}
