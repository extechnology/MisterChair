import { Metadata } from "next";
import SingleProductView from "@/components/products/SingleProductView";
import { serverFetch } from "@/lib/fetcher";
import { Results } from "@/service/product/type";







type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};



export async function generateMetadata(props: Props): Promise<Metadata> {


    const params = await props.params;

    // Fetch product for metadata
    try {
        const product = await serverFetch<Results>(
            `/chairs/chair/${params.slug}/`,
            { cache: "no-store" } // Or use appropriate caching
        );

        const title = `${product.name} | Mister Chair`;
        // Strip HTML from description for metadata
        const description = product.description.replace(/<[^>]*>?/gm, '').slice(0, 160) + "...";
        const images = product.chair_colors[0]?.chair_images as string[] || [];

        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                images: images,
                type: "website",
            },
        };
    } catch (error) {
        return {
            title: "Product Not Found | Mister Chair",
            description: "The requested product could not be found.",
        };
    }


}



export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {


    const params = await props.params;


    // Fetch product
    const productsRes = await serverFetch<Results>(
        `/chairs/chair/${params.slug}/`,
        { cache: "no-store" }
    );


    return <SingleProductView product={productsRes} />;

}
