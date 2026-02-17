import { useQuery } from "@tanstack/react-query";
import { GetFliterSidebarApi, GetNavbarCategoriesApi, GetRelatedProductsApi } from "./ProductApi";
import { Results, SidebarResponse } from "./type";
import { BrowseByCategoryType } from "@/types/type";




// Hook to Get Filter Sidebar Data
export const useGetFliterSidebar = () => {

    return useQuery<SidebarResponse>({

        queryKey: ["Fliter-Sidebar"],

        queryFn: async () => {

            return await GetFliterSidebarApi() as SidebarResponse;

        },
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        retry: 1,

    })

}



// Hook to Get Related Products Data
export const useGetRelatedProducts = (id: string) => {

    return useQuery<Results[]>({

        queryKey: ["Related-Products", id],

        queryFn: async () => {

            return await GetRelatedProductsApi(id) as Results[];

        },
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        retry: 1,

    })

}



// Hook to Get Navbar Categories Data
export const useGetNavbarCategories = () => {

    return useQuery<BrowseByCategoryType[]>({

        queryKey: ["Navbar-Categories"],

        queryFn: async () => {

            return await GetNavbarCategoriesApi() as BrowseByCategoryType[];

        },
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false,
        retry: 1,

    })

}
