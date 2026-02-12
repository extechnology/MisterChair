import { Metadata } from "next";
import SingleProductView from "@/components/products/SingleProductView";



// Dummy Product Data (simulating data fetch)
const product = {
    id: "1",
    name: "Ergonomic Office Chair - Elite Series",
    mrp: 12999,
    discountPrice: 8999,
    color: "Midnight Black",
    moq: 2,
    description:
        "Experience ultimate comfort and productivity with our Elite Series Ergonomic Office Chair. Designed with breathable mesh, lumbar support, and adjustable armrests, it's perfect for long hours at your desk. The sturdy base and smooth-rolling casters ensure durability and mobility.",
    images: [
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
    ],
    features: ["Adjustable Lumbar Support", "Breathable Mesh Back", "360-degree Swivel", "High-Density Foam Seat"],
};




type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};



export async function generateMetadata(props: Props): Promise<Metadata> {


    const params = await props.params;
    // In a real app, fetch data here
    const title = `${product.name} | Mr Chair`;
    const description = product.description.slice(0, 160) + "...";


    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            images: [product.images[0]],
            type: "website",
        },
    };


}



export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {

    const params = await props.params;

    return <SingleProductView product={product} />;

}
