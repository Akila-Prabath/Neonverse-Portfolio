import { ArrowUpRight, User } from "lucide-react"
import { motion } from "framer-motion"

import Particles from "../components/common/Particles"
import ScrollIndicator from "../components/common/ScrollIndicator"

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-8 px-6 md:px-10 overflow-hidden">

            <Particles />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <p className="uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2 text-sm">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-3">
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Akila Prabath
                        </span>
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                        I build immersive <br />
                        <span className="mr-3">
                            web
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            experiences.
                        </span>
                    </h2>

                    <p className="text-white/60 text-md max-w-xl leading-relaxed mb-4">
                        Frontend developer passionate about creating beautiful,
                        interactive and high-performance web applications.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5">

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center gap-3 text-sm font-medium shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                        >
                            VIEW MY WORK
                            <ArrowUpRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-5 py-3 rounded-lg border border-white/10 flex items-center gap-3 text-sm font-medium hover:bg-white/5 transition"
                        >
                            ABOUT ME
                            <User size={18} />
                        </motion.button>

                    </div>

                </motion.div>


                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="relative flex justify-center items-center h-[720px]"
                >

                    {/* Main Background Glow */}
                    <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>

                    {/* Smoke Glow */}
                    <div className="absolute w-[420px] h-[420px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

                    {/* Platform Back */}
                    <div className="absolute bottom-24 w-[420px] h-[60px] rounded-full bg-[#151528] border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.25)]"></div>

                    {/* Platform Front */}
                    <div className="absolute bottom-16 w-[500px] h-[90px] rounded-full bg-gradient-to-r from-[#111827] to-[#1f2937] border border-cyan-500/10 shadow-[0_0_60px_rgba(59,130,246,0.25)] overflow-hidden">

                        {/* Neon Line */}
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-500 blur-sm"></div>

                    </div>

                    {/* Rocks */}
                    <div className="absolute bottom-28 flex items-end gap-[-20px] z-20">

                        <div className="w-32 h-28 bg-[#161616] rounded-[40%] rotate-[-12deg] shadow-[0_0_30px_rgba(168,85,247,0.2)]"></div>

                        <div className="w-44 h-40 bg-[#1a1a1a] rounded-[42%] rotate-[8deg] -ml-10 shadow-[0_0_40px_rgba(168,85,247,0.3)]"></div>

                        <div className="w-36 h-32 bg-[#121212] rounded-[38%] rotate-[-6deg] -ml-10 shadow-[0_0_35px_rgba(168,85,247,0.25)]"></div>

                    </div>

                    {/* Portal */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="relative z-10 w-[260px] h-[520px]"
                    >

                        {/* Portal Outer Glow */}
                        <div className="absolute inset-0 rounded-[6px] border-[6px] border-purple-300 shadow-[0_0_70px_rgba(192,132,252,0.9)]"></div>

                        {/* Portal Inner */}
                        <div className="absolute inset-[14px] bg-[#050816]/70 backdrop-blur-xl overflow-hidden">

                            {/* Stars */}
                            <div className="absolute inset-0">

                                {[...Array(30)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="absolute bg-white rounded-full"
                                        style={{
                                            width: `${Math.random() * 3 + 1}px`,
                                            height: `${Math.random() * 3 + 1}px`,
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random(),
                                        }}
                                    />
                                ))}

                            </div>

                            {/* Smoke */}
                            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-2xl"></div>

                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 blur-[80px] rounded-full"></div>

                        </div>

                    </motion.div>

                    {/* Left Floating Crystal */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 12, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                        className="absolute left-12 top-40 w-24 h-24 rotate-12 bg-gradient-to-br from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] rounded-2xl opacity-70 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                    />

                    {/* Small Cube */}
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                            rotate: [0, -15, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="absolute right-24 top-96 w-12 h-12 rotate-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                    />

                    {/* Floating Sphere */}
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="absolute right-0 top-28 w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_70px_rgba(59,130,246,0.7)]"
                    />

                    {/* Floating Mini Orbs */}
                    <div className="absolute top-56 left-52 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"></div>

                    <div className="absolute top-72 left-12 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]"></div>

                    <div className="absolute top-80 left-72 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]"></div>

                    {/* Ring */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute bottom-6 right-8 w-44 h-44 border-[18px] border-purple-500 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.6)]"
                    />

                </motion.div>

            </div>

            <ScrollIndicator />

        </section>
    )
}

export default Hero