import { CommonApi } from "@/lib/CommonApi";




// Get Fliter Sidebar
export const GetFliterSidebarApi = async () => {

    return await CommonApi("GET", `/chairs/filter-bar/`);

}


// Get Related products
export const GetRelatedProductsApi = async (id: string) => {

    return await CommonApi("GET", `/chairs/chair/${id}/related-products/`);

}


// Get Navbar Categories
export const GetNavbarCategoriesApi = async () => {

    return await CommonApi("GET", `/ui/category-nav-items/`);

}