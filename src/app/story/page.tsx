import { Metadata } from "next";
import StoryClient from "./StoryClient";



// Site URL for seo
const siteUrl = "https://mister-chair.vercel.app";


// Social image (1200×630) px
const socialImage = "https://mister-chair.vercel.app/logo.png";



// Metadata for about page
export const metadata: Metadata = {


    metadataBase: new URL(siteUrl),

    title: "Mr Chair | Story",

    description: "Shop premium office chairs, executive seating, and modern furniture at Mr Chair. Discover high-performance and stylish seating solutions for home and office.",


    applicationName: "Mr Chair",


    keywords: [
        "premium chairs",
        "office chairs",
        "executive chairs",
        "furniture store",
        "modern seating",
        "home furniture",
    ],


    authors: [{ name: "Mr Chair" }],
    creator: "Mr Chair",
    publisher: "Mr Chair",


    openGraph: {
        title: "Mr Chair - Story",
        description: "Mr Chair is a premium furniture store for high-performance furniture, accessories and seating solutions.",
        url: `${siteUrl}`,
        siteName: "Mr Chair",
        images: [
            {
                url: socialImage,
                width: 1200,
                height: 630,
                alt: "Mr Chair – Premium furniture store",
            },
        ],
        locale: "en_US",
        type: "website",
    },


    twitter: {
        card: "summary_large_image",
        title: "Mr Chair - Story",
        description: "Mr Chair is a premium furniture store for high-performance furniture, accessories and seating solutions.",
        images: [socialImage],
    },


    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },


    alternates: {
        canonical: `${siteUrl}`,
    },

    category: "Ecommerce",

};




export default function StoryPage() {


    return (


        <StoryClient />

    );


}