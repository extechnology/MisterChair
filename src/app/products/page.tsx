import { serverFetch } from "@/lib/fetcher";
import { PaginatedResponse } from "@/service/product/type";
import ShopClient from "@/components/products/ShopClient";




export default async function ShopPage({ searchParams, }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {


    const resolvedSearchParams = await searchParams;


    const query = new URLSearchParams();


    Object.entries(resolvedSearchParams).forEach(([key, value]) => {

        if (!value) return;

        if (Array.isArray(value)) {
            // Join array values with comma
            query.append(key, value.join(","));
            return;
        }

        // Pass string values directly (even if comma-separated)
        query.append(key, value);

    });


    // Fetch product
    const productsRes = await serverFetch<PaginatedResponse>(
        `/chairs/filter/?${query}`,
        { cache: "no-store" }
    );


    return (

        <ShopClient
            products={productsRes.results}
            totalCount={productsRes.count}
            currentPage={productsRes.current_page}
            totalpages={productsRes.total_pages}
        />

    );


}
