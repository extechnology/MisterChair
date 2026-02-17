"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Leaf, Award, PenTool, User } from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { useRef } from "react";




// Animation Variants
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


const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};



export default function StoryClient() {


    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });


    // Parallax effect for hero
    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


    return (


        <main ref={containerRef} className="bg-stone-50 min-h-screen overflow-hidden">


            {/* --- Hero Section with Dramatic Curve --- */}
            <section className="relative h-screen w-full overflow-hidden">


                <motion.div style={{ y: yHero }} className="absolute inset-0">

                    <img
                        src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg"
                        alt="Mr. Chair Workshop"
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

                        <motion.span variants={fadeInUp} className="inline-block mb-4 text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#b8604f] bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                            Since 2006
                        </motion.span>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
                            Crafting <span className="font-serif italic font-medium">Legacy.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-2xl text-stone-200 font-light leading-relaxed">
                            Stylish seating with solid construction Perfect balance of form and function.
                        </motion.p>

                    </motion.div>

                </div>


                {/* Dramatic Curved Bottom Mask */}
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-stone-50" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}></div>

            </section>




            {/* --- Our Story Section --- */}
            <section className="py-0 md:py-8 px-4 md:px-20 relative">


                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="relative z-10"
                    >

                        <motion.span variants={fadeInUp} className="text-[#b8604f] font-bold tracking-widest uppercase text-xs mb-4 block">
                            The Beginning
                        </motion.span>

                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl text-stone-900 mb-8 font-light leading-tight">
                            Crafted for Comfort, <br /> <span className="font-serif italic text-stone-600">Designed to Last.</span>
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-4 text-stone-600 leading-relaxed text-lg font-light text-justify">
                            <p>
                                <strong className="text-stone-900 font-medium">Mr. Chair</strong> is a trusted manufacturer of high-quality chairs designed for comfort, durability, and style. With a focus on expert craftsmanship and premium materials, we create seating solutions for homes, offices, and commercial spaces.
                            </p>
                            <p>
                                Every chair reflects our commitment to innovation, ergonomic support, and long-lasting performance, ensuring comfort you can rely on every day.
                            </p>
                        </motion.div>

                    </motion.div>


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group"
                    >

                        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />

                        <img
                            src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
                            alt="Craftsman working"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                        />

                        {/* Floating Caption */}
                        <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-xs text-sm">
                            <p className="font-serif italic text-stone-800">"Quality is never an accident; it is always the result of high intention."</p>
                        </div>

                    </motion.div>

                </div>

            </section>




            {/* --- Chairman's Message Section --- */}
            <section className="py-16 md:py-14 bg-stone-100/50">


                <div className="mx-auto px-4 md:px-20">


                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


                        {/* Left Side - Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="lg:col-span-5 relative group"
                        >


                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">


                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />


                                <img
                                    src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
                                    alt="Md. Afsal - Chairman"
                                    className="w-full h-full object-cover object-top transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                                />


                                <div className="absolute bottom-6 left-6 z-20 text-white">
                                    <h3 className="text-2xl font-bold">Md. Afsal</h3>
                                    <p className="text-[#b8604f] uppercase tracking-widest text-sm font-semibold">Chairman</p>
                                </div>

                            </div>


                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#b8604f]/10 rounded-full blur-2xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-stone-200 rounded-full blur-3xl -z-10" />


                        </motion.div>



                        {/* Right Side - Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="lg:col-span-7"
                        >

                            <motion.span variants={fadeInUp} className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[#b8604f] bg-[#b8604f]/5 px-3 py-1 rounded-full border border-[#b8604f]/10">
                                Leadership
                            </motion.span>


                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light text-stone-900 mb-8 leading-tight">
                                A Message from <br />
                                <span className="font-serif italic text-stone-600">The Chairman</span>
                            </motion.h2>


                            <motion.div variants={fadeInUp} className="relative">

                                <span className="absolute -top-6 -left-4 text-8xl font-serif text-[#b8604f]/10 user-select-none opacity-50">“</span>


                                <blockquote className="relative z-10 text-lg md:text-xl text-stone-600 font-light leading-relaxed space-y-6 text-justify">
                                    <p>
                                        As Chairman of <strong className="font-medium text-stone-900">Mr. Chair</strong>, I am proud of the journey we have built through dedication, innovation, and unwavering commitment to quality. From our roots in manufacturing to becoming a trusted chair brand, our focus has always been on delivering comfort, durability, and value.
                                    </p>
                                    <p>
                                        Every chair we produce reflects our passion for craftsmanship and customer satisfaction. With the support of our team and partners, we continue to evolve by adopting modern technology and design.
                                    </p>
                                    <p className="text-stone-800 font-normal italic">
                                        "Our vision is to strengthen trust, expand digitally, and serve our customers with excellence for many years to come."
                                    </p>
                                </blockquote>


                                <div className="mt-8 flex items-center gap-4">
                                    <div className="h-px bg-stone-300 w-16" />
                                    <span className="font-serif italic text-stone-500 text-lg">Md. Afsal</span>
                                </div>

                            </motion.div>


                        </motion.div>

                    </div>

                </div>

            </section>





            {/* --- Our Journey (Timeline) --- */}
            <section className="py-10 bg-white border-y border-stone-100 overflow-hidden">


                <div className="max-w-7xl mx-auto px-4 md:px-20">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Milestones</span>
                        <h2 className="text-4xl md:text-5xl font-light text-stone-900">Our <span className="font-serif italic">Journey</span></h2>
                    </motion.div>


                    <div className="relative">


                        {/* Center Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" />


                        {[

                            { year: "2006", title: "The Beginning", desc: "Our journey began in 2006 under the leadership of Md. Afsal with the establishment of MS Steel Furniture. We started by manufacturing durable steel chairs, laying a strong foundation built on quality, trust, and workmanship." },
                            { year: "2010", title: "Expansion & Diversification", desc: "As demand grew, we expanded our operations into the manufacturing and distribution of steel wall drops and related products. During this phase, we adopted modern designs and improved manufacturing techniques to enhance product quality and delivery efficiency." },
                            { year: "2014", title: "Entering the Office Seating Segment", desc: "By 2017, we stepped into a new segment by producing office chairs and related seating solutions. This marked a major milestone as we successfully served businesses with reliable, ergonomic, and functional seating products" },
                            { year: "2018", title: "Strengthening the Brand", desc: "With growing experience and market presence, we strengthened our production capabilities and customer reach. Our focus remained on consistent quality, timely delivery, and customer satisfaction, serving clients across Kerala, Tamil Nadu, and Karnataka." },
                            { year: "2022 - 2026", title: "Rebranding & Future Growth", desc: "In 2022, we proudly rebranded as Mr. Chair, marking a new era in our journey. We began manufacturing all types of chairs in large quantities, offering 100% customization to meet diverse customer needs." },
                            { year: "Goal Reach", title: "Goal Reach", desc: "To date, we have delivered over 4 lakh chairs across South India. Looking ahead to 2026, we are transforming our business into a digital-first brand with a full-fledged e-commerce platform, ensuring wider reach, seamless ordering, and enhanced customer experience." },
                            { year: "Mr. Chair’s Goal", title: "Mr. Chair’s Goal", desc: "Is to deliver high-quality, customizable seating solutions by combining modern design, durable manufacturing, and reliable service, while continuously evolving through innovation, technology, and customer-focused excellence.." },

                        ].map((item, idx) => (

                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`relative flex items-center mb-16 md:mb-24 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >


                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right" style={{ paddingRight: idx % 2 === 0 ? "0" : "", paddingLeft: idx % 2 === 0 ? "3rem" : "" }}>


                                    <div className={`hidden md:block ${idx % 2 === 0 ? "text-left" : "text-right"}`}>
                                        <span className="text-[#b8604f]/20 font-bold text-6xl md:text-4xl absolute top-0 -mt-8 transform scale-150 origin-center z-0 select-none" style={{ left: idx % 2 === 0 ? "2rem" : "auto", right: idx % 2 === 0 ? "auto" : "2rem" }}>{item.year}</span>
                                        <div className="relative z-10">
                                            <span className="text-[#b8604f] font-bold text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                                            <h3 className="text-3xl font-serif italic text-stone-900 mb-4">{item.title}</h3>
                                            <p className="text-stone-600 text-lg font-light leading-relaxed text-justify">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Mobile View */}
                                    <div className="md:hidden block relative pl-6 border-l border-stone-200 ml-2">
                                        <div className="absolute left-0 top-0 w-3 h-3 bg-[#b8604f] rounded-full -translate-x-[7px] border-2 border-white ring-1 ring-[#b8604f]/20"></div>
                                        <span className="text-[#b8604f] font-bold text-xs tracking-widest uppercase mb-1 block">{item.year}</span>
                                        <h3 className="text-xl font-serif italic text-stone-900 mb-2">{item.title}</h3>
                                        <p className="text-stone-600 text-sm font-light leading-relaxed text-justify">{item.desc}</p>
                                    </div>

                                </div>

                                {/* Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-[#b8604f] rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10" />


                                <div className="w-full md:w-1/2 pl-12 md:pl-12 hidden md:block">
                                    <div className={`${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                                        {/* Empty space for alternating layout */}
                                    </div>
                                </div>


                            </motion.div>

                        ))}


                    </div>


                </div>


            </section>




            {/* --- Philosophy Visual Break (Parallax) --- */}
            <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg')" }}>

                <div className="absolute inset-0 bg-stone-900/60" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-4xl px-6 text-center text-white"
                >
                    <PenTool size={48} className="mx-auto mb-8 text-[#b8604f]" />

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-8">
                        "Every detail is made with purpose Comfort is never an afterthought."
                    </h2>

                    <p className="text-stone-300 uppercase tracking-widest text-sm">— Mr. Chair</p>

                </motion.div>

            </section>




            {/* --- Values Grid --- */}
            <section className="py-14 bg-stone-50">


                <div className="mx-auto px-4 md:px-20">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-light text-stone-900">Why We <span className="font-serif italic">Exist</span></h2>
                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Leaf,
                                title: "Superior Quality & Durability",
                                desc: "Chairs manufactured with premium materials and advanced techniques for long-lasting comfort and strength"
                            },
                            {
                                icon: Award,
                                title: "100% Customization",
                                desc: "Tailor-made seating solutions designed to meet your exact space, style, and functional requirements."
                            },
                            {
                                icon: User,
                                title: "Trusted Experience & Reliable Delivery",
                                desc: "Proven expertise with lakhs of chairs delivered across South India, ensuring timely and dependable service."
                            }
                        ].map((item, idx) => (

                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group"
                            >

                                <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center mb-6 text-stone-400 group-hover:bg-[#b8604f] group-hover:text-white transition-all duration-300">
                                    <item.icon size={28} />
                                </div>

                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-[#b8604f] transition-colors">{item.title}</h3>
                                <p className="text-stone-500 leading-relaxed font-light">{item.desc}</p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>





            {/* --- Animated Stats --- */}
            <section className="py-24 bg-stone-950 text-white relative overflow-hidden">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#b8604f]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 md:px-20 relative z-10">


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x divide-stone-800/50">

                        {[
                            { num: 2006, label: "Founded", isDate: true },
                            { num: 35000, label: "Happy Clients", suffix: "+" },
                            { num: 4, label: "Unique Products", suffix: "LK +" },
                            { num: 150, label: "Comfort Designs", suffix: "+" }

                        ].map((stat, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ delay: i * 0.1 }}
                                className="px-4"
                            >

                                <div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#b8604f] mb-3">
                                    {stat.isDate ? stat.num : <AnimatedCounter value={stat.num} />}
                                    {!stat.isDate && stat.suffix}
                                </div>

                                <div className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase font-bold">{stat.label}</div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>




            {/* --- Quality Section --- */}
            <section className="py-8 md:py-14 bg-white overflow-hidden relative">


                <div className="mx-auto px-4 md:px-20 relative z-10">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Content Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="order-2 lg:order-1"
                        >

                            <motion.span variants={fadeInUp} className="text-[#b8604f] font-bold tracking-widest uppercase text-xs mb-4 block">
                                Our Promise
                            </motion.span>


                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl text-stone-900 mb-8 font-light leading-tight">
                                Quality is Always <br /> <span className="font-serif italic text-stone-600">Prior to Us.</span>
                            </motion.h2>


                            <motion.div variants={fadeInUp} className="space-y-6 text-stone-600 leading-relaxed text-lg font-light text-justify">
                                <p>
                                    Quality is the foundation of <strong className="font-medium text-stone-900">Mr. Chair</strong>. Every chair is manufactured with premium materials, precise engineering, and strict quality control at every stage of production. Our processes follow international standards, ensuring durability, comfort, and consistent performance.
                                </p>
                                <p>
                                    Being <span className="text-stone-900 font-medium">ISO 9001:2015 certified</span>, we maintain a systematic approach to quality management, continuous improvement, and customer satisfaction.
                                </p>
                                <p>
                                    From design to delivery, each product is carefully inspected to meet our high benchmarks. This commitment to certified quality enables Mr. Chair to deliver reliable, long-lasting, and customizable seating solutions that customers can trust for homes, offices, and commercial spaces.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-stone-900">ISO</span>
                                    <span className="text-xs uppercase tracking-widest text-[#b8604f] font-bold">9001:2015 Certified</span>
                                </div>
                                <div className="h-12 w-px bg-stone-200" />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-stone-900">100%</span>
                                    <span className="text-xs uppercase tracking-widest text-[#b8604f] font-bold">Quality Check</span>
                                </div>
                            </motion.div>

                        </motion.div>


                        {/* Image Side */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            className="order-1 lg:order-2 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors duration-500 z-10" />

                            <img
                                src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg"
                                alt="Quality Control Inspection"
                                loading="lazy"
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Floating Badge */}
                            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-full shadow-lg w-24 h-24 flex items-center justify-center border border-white/50">
                                <div className="text-center">
                                    <Award size={24} className="text-[#b8604f] mx-auto mb-1" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-800">Premium<br />Quality</span>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>

                {/* Background Decorative Text */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 select-none opacity-[0.03] pointer-events-none">
                    <span className="text-[20rem] font-bold font-serif text-stone-900 leading-none">Quality</span>
                </div>

            </section>


        </main>

    );


}