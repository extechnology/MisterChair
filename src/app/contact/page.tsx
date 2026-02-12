"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, Plus, Minus, ArrowRight } from "lucide-react";




// --- Animation Variants ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};




// --- FAQ Data ---
const faqs = [
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 20 countries worldwide. Shipping costs and timelines vary by location. Please check our shipping page for more details."
    },
    {
        question: "What is your warranty policy?",
        answer: "We offer a comprehensive 5-year warranty on all structural elements and a 2-year warranty on fabrics and foams."
    },
    {
        question: "Can I customize the fabric?",
        answer: "Absolutely. We offer a 'Made to Order' service where you can choose from over 50 premium fabrics and leathers for any of our seating collection."
    },
    {
        question: "How do I care for my wood furniture?",
        answer: "We recommend using a soft, dry cloth for daily dusting. Avoid direct sunlight and moisture. We provide a complimentary care kit with every wood furniture purchase."
    }
];





export default function ContactPage() {


    const containerRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });



    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);



    // Form State
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");




    // Handle Form Submission
    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => setFormStatus("success"), 1500);

    };




    return (



        <main ref={containerRef} className="bg-stone-50 min-h-screen overflow-hidden">


            {/* --- Hero Section --- */}
            <section className="relative h-screen w-full overflow-hidden">


                <motion.div style={{ y: yHero }} className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
                        alt="Contact Us Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>


                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white pb-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >

                        <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm md:text-base font-bold tracking-[0.3em] uppercase text-white bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                            Get in Touch
                        </motion.span>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
                            Let's Start a <br /> <span className="font-serif italic font-medium">Conversation.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-2xl text-stone-200 font-light leading-relaxed">
                            Have a question about an order, a custom project, or just want to say hello? We'd love to hear from you.
                        </motion.p>

                    </motion.div>

                </div>


                {/* Dramatic Curved Bottom Mask */}
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-stone-50" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}></div>


            </section>




            {/* --- Contact Info & Form Section --- */}
            <section className="py-0 md:py-4 px-4 md:px-20">


                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">


                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >


                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl text-stone-900 mb-8 font-light">
                            Contact <span className="font-serif italic text-stone-600">Details</span>
                        </motion.h2>


                        <div className="space-y-6 mb-12">
                            {[
                                { icon: Mail, label: "Email Us", value: "hello@mrchair.com", link: "mailto:hello@mrchair.com" },
                                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
                                { icon: MapPin, label: "Visit HQ", value: "123 Furniture Lane, Design District, NY", link: "#" }
                            ].map((item, idx) => (

                                <motion.a
                                    key={idx}
                                    variants={fadeInUp}
                                    href={item.link}
                                    className="flex items-center gap-4 group"
                                >

                                    <div className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-400 group-hover:bg-[#b8604f] group-hover:text-white group-hover:border-[#b8604f] transition-all duration-300 shadow-sm group-hover:shadow-md shrink-0">
                                        <item.icon size={18} />
                                    </div>

                                    <div>
                                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5 group-hover:text-[#b8604f] transition-colors">{item.label}</h3>
                                        <p className="text-base md:text-lg text-stone-900 font-medium group-hover:text-stone-900/80 transition-colors">{item.value}</p>
                                    </div>

                                </motion.a>

                            ))}

                        </div>


                        <motion.div variants={fadeInUp} className="p-8 bg-stone-100 rounded-2xl">

                            <h3 className="text-xl font-bold text-stone-900 mb-2">Opening Hours</h3>

                            <div className="space-y-2 text-stone-600">
                                <p className="flex justify-between"><span>Mon - Fri</span> <span className="font-medium">9:00 AM - 6:00 PM</span></p>
                                <p className="flex justify-between"><span>Saturday</span> <span className="font-medium">10:00 AM - 4:00 PM</span></p>
                                <p className="flex justify-between"><span>Sunday</span> <span className="font-medium text-[#b8604f]">Closed</span></p>
                            </div>

                        </motion.div>


                    </motion.div>



                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100"
                    >

                        <h3 className="text-2xl font-serif italic text-stone-900 mb-8">Send a Message</h3>


                        {formStatus === "success" ? (

                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">

                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={32} />
                                </div>

                                <h4 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h4>

                                <p className="text-stone-500">We'll get back to you as soon as possible.</p>

                                <button onClick={() => setFormStatus("idle")} className="mt-8 text-[#b8604f] font-bold text-sm uppercase underline decoration-2 underline-offset-4">Send Another</button>

                            </motion.div>

                        ) : (


                            <form onSubmit={handleSubmit} className="space-y-6">


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="relative">
                                        <input type="text" id="name" required className="peer w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-[#b8604f] transition-colors placeholder-transparent" placeholder="Name" />
                                        <label htmlFor="name" className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b8604f]">Name</label>
                                    </div>

                                    <div className="relative">
                                        <input type="email" id="email" required className="peer w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-[#b8604f] transition-colors placeholder-transparent" placeholder="Email" />
                                        <label htmlFor="email" className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b8604f]">Email</label>
                                    </div>

                                </div>


                                <div className="relative">
                                    <input type="text" id="subject" required className="peer w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-[#b8604f] transition-colors placeholder-transparent" placeholder="Subject" />
                                    <label htmlFor="subject" className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b8604f]">Subject</label>
                                </div>


                                <div className="relative">
                                    <textarea id="message" rows={4} required className="peer w-full bg-transparent border-b border-stone-300 py-3 text-stone-900 focus:outline-none focus:border-[#b8604f] transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                                    <label htmlFor="message" className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#b8604f]">Message</label>
                                </div>


                                <button
                                    type="submit"
                                    disabled={formStatus === "submitting"}
                                    className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b8604f] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                >
                                    {formStatus === "submitting" ? "Sending..." : (
                                        <>Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>


                            </form>

                        )}


                    </motion.div>


                </div>


            </section>




            {/* --- FAQ Section --- */}
            <section className="py-10 bg-white border-t border-stone-100">


                <div className="max-w-5xl mx-auto px-4">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Help Center</span>
                        <h2 className="text-4xl md:text-5xl font-light text-stone-900">Frequently Asked <span className="font-serif italic">Questions</span></h2>
                    </motion.div>


                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} question={faq.question} answer={faq.answer} index={idx} />
                        ))}
                    </div>


                </div>


            </section>



            {/* --- Google Map Embed --- */}
            <section className="h-[500px] w-full relative z-0">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043424153!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="transition-all duration-700"
                ></iframe>

            </section>


        </main>

    );


}




// --- FAQ Item Component ---
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {


    const [isOpen, setIsOpen] = useState(false);


    return (


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-stone-200 last:border-0"
        >

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
                <span className="text-lg md:text-xl font-medium text-stone-800 group-hover:text-[#b8604f] transition-colors">{question}</span>

                <span className={`w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-400 transition-all duration-300 ${isOpen ? "bg-[#b8604f] border-[#b8604f] text-white rotate-180" : "group-hover:border-[#b8604f] group-hover:text-[#b8604f]"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>

            </button>


            <AnimatePresence>

                {isOpen && (

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >

                        <p className="pb-6 text-stone-500 leading-relaxed max-w-2xl">{answer}</p>

                    </motion.div>

                )}

            </AnimatePresence>

        </motion.div>

    );

}
