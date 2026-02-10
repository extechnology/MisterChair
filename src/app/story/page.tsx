"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Leaf, Award, PenTool, User, Calendar, MapPin, ArrowRight } from "lucide-react";
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



export default function AboutPage() {


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
                            Since 2024
                        </motion.span>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
                            Crafting <span className="font-serif italic font-medium">Legacy.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-lg md:text-2xl text-stone-200 font-light leading-relaxed">
                            Furniture is more than function. It's the backdrop to your life's most cherished moments.
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
                            From a garage project to <br /> <span className="font-serif italic text-stone-600">global design.</span>
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
                            <p>
                                <strong className="text-stone-900 font-medium">Mr. Chair</strong> was born out of frustration. We looked around and saw furniture that was either beautiful but fragile, or durable but dull. We wanted both.
                            </p>
                            <p>
                                What began with a single chair design in 2024 has grown into a movement. We don't just build chairs; we engineer comfort using traditional joinery and modern ergonomics.
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



            {/* --- The Journey (Timeline) --- */}
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
                            { year: "2020", title: "The Idea", desc: "Sketches in a notebook. The dream of a perfect chair takes shape." },
                            { year: "2022", title: "First Prototype", desc: "After 50 failed attempts, the 'Nomad' chair is born." },
                            { year: "2024", title: "Official Launch", desc: "Mr. Chair launches online, selling out the first batch in 48 hours." },
                            { year: "2025", title: "Global Reach", desc: "Expanding shipping to 20+ countries and opening our first showroom." }
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
                                        <span className="text-[#b8604f] font-bold text-5xl opacity-20 absolute top-0 -mt-4 transform" style={{ left: idx % 2 === 0 ? "3rem" : "auto", right: idx % 2 === 0 ? "auto" : "3rem" }}>{item.year}</span>
                                        <h3 className="text-2xl font-bold text-stone-900 mb-2 relative z-10">{item.title}</h3>
                                        <p className="text-stone-500">{item.desc}</p>
                                    </div>

                                    {/* Mobile View */}
                                    <div className="md:hidden block">
                                        <span className="text-[#b8604f] font-bold text-sm mb-1 block">{item.year}</span>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                                        <p className="text-stone-500 text-sm">{item.desc}</p>
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
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </h2>

                    <p className="text-stone-300 uppercase tracking-widest text-sm">— Steve Jobs (Inspiration)</p>

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
                                title: "Sustainable Roots",
                                desc: "We plant a tree for every chair sold. Our wood is FSC certified and our fabrics are organic."
                            },
                            {
                                icon: Award,
                                title: "Master Craftsmanship",
                                desc: "30+ hours of hand-work goes into every piece. No assembly lines, just skilled hands."
                            },
                            {
                                icon: User,
                                title: "Human Centric",
                                desc: "Designed for real bodies and real homes. We prototype endlessly until it feels perfect."
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




            {/* --- Meet the Makers --- */}
            <section className="py-12 bg-white">


                <div className="mx-auto px-4 md:px-20">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <span className="text-stone-400 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Team</span>
                            <h2 className="text-4xl md:text-5xl font-light text-stone-900">Meet the <span className="font-serif italic">Makers</span></h2>
                        </div>

                        <button className="group flex items-center gap-2 text-stone-900 font-semibold border-b border-stone-200 pb-1 hover:border-[#b8604f] hover:text-[#b8604f] transition-colors">
                            Join the team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </motion.div>



                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                        {[
                            { name: "John Doe", role: "Lead Designer", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" },
                            { name: "Elena R.", role: "Master Joiner", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" },
                            { name: "Marcus T.", role: "Sustainability", img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" }
                        ].map((member, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="group text-center cursor-pointer"
                            >

                                <div className="relative overflow-hidden rounded-2xl aspect-3/4 mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">

                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10" />

                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                </div>


                                <h3 className="text-2xl md:text-3xl font-serif italic text-stone-900 group-hover:text-[#b8604f] transition-colors duration-300">
                                    {member.name}
                                </h3>


                                <p className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">
                                    {member.role}
                                </p>


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
                            { num: 2024, label: "Founded", isDate: true },
                            { num: 5000, label: "Happy Clients", suffix: "+" },
                            { num: 150, label: "Unique Products", suffix: "+" },
                            { num: 12, label: "Awards Won" }

                        ].map((stat, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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


        </main>

    );


}