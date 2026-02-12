import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav className={cn("flex items-center text-sm text-gray-500", className)} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900 transition-colors flex items-center">
                <Home className="w-4 h-4" />
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-gray-900 transition-colors font-medium"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-900 font-semibold cursor-default">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
