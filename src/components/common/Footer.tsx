"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";



export default function Footer() {


    return (


        <footer className="bg-stone-950 text-stone-300 pt-20 pb-10 border-t border-stone-800">


            <div className="mx-auto px-6 md:px-20">


                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">


                    {/* Brand Section */}
                    <div className="space-y-6">

                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-serif italic text-white font-medium">Mr. Chair</span>
                        </Link>

                        <p className="text-sm leading-relaxed max-w-xs text-stone-400">
                            Crafting comfort for the modern home since 2024. Discover furniture designed to elevate your living space.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <SocialIcon icon={Facebook} href="#" label="Facebook" />
                            <SocialIcon icon={Instagram} href="#" label="Instagram" />
                            <SocialIcon icon={Twitter} href="#" label="Twitter" />
                            <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
                        </div>

                    </div>



                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/shop" label="Shop All" />
                            <FooterLink href="/collections" label="Collections" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/blog" label="Journal" />
                        </ul>
                    </div>


                    {/* Customer Support */}
                    <div>
                        <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Customer Care</h4>
                        <ul className="space-y-4 text-sm">
                            <FooterLink href="/faq" label="FAQ" />
                            <FooterLink href="/shipping" label="Shipping & Delivery" />
                            <FooterLink href="/returns" label="Returns & Exchanges" />
                            <FooterLink href="/terms" label="Terms & Conditions" />
                            <FooterLink href="/privacy" label="Privacy Policy" />
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-medium mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#b8604f] shrink-0 mt-0.5" />
                                <span>
                                    123 Furniture Blvd, <br />
                                    Design District, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#b8604f] shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#b8604f] shrink-0" />
                                <a href="mailto:hello@mrchair.com" className="hover:text-white transition-colors">hello@mrchair.com</a>
                            </li>
                        </ul>
                    </div>


                </div>


                {/* Bottom Bar */}
                <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Mr. Chair. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-stone-300 transition-colors">Cookie Policy</Link>
                    </div>
                </div>

            </div>

        </footer>

    );

}





// Helper Components
function SocialIcon({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-900 transition-all duration-300"
            aria-label={label}
        >
            <Icon size={18} />
        </a>
    );
}



function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="hover:text-[#b8604f] hover:translate-x-1 inline-block transition-all duration-300"
            >
                {label}
            </Link>
        </li>
    );
}
