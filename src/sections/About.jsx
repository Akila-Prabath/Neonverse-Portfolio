import {
    Code2,
    Rocket,
    Star,
    Users,
    Briefcase,
    Sparkles,
} from "lucide-react"

import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="relative min-h-screen py-14 md:px-5 overflow-hidden flex items-center bg-[#020617]">

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >

                    {/* Section Tag */}
                    <p className="uppercase tracking-[0.30em] text-purple-400 text-xs mb-5">
                        • About Me
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-5">

                        <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Curious mind.
                        </span>

                        <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                            Problem solver.
                        </span>

                        <span className="block text-white text-4xl">
                            Frontend developer.
                        </span>

                    </h2>

                    {/* Description */}
                    <div className="border-l border-purple-500/40 pl-4 mb-8">

                        <p className="text-white/55 text-base text-sm leading-relaxed max-w-lg">
                            I'm a frontend developer who loves building immersive,
                            interactive and performance-driven web experiences.
                            I enjoy turning complex ideas into elegant user interfaces.
                        </p>

                    </div>

                    {/* Features */}
                    <div className="space-y-5">

                        {/* Feature 1 */}
                        <div className="flex gap-2">

                            <div className="w-11 h-11 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <Rocket size={18} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1 text-purple-400">
                                    Passionate
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed">
                                    Always eager to learn and explore modern technologies.
                                </p>
                            </div>

                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-2">

                            <div className="w-11 h-11 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                <Code2 size={18} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1 text-cyan-400">
                                    Detail Oriented
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed">
                                    Writing clean code and crafting delightful experiences.
                                </p>
                            </div>

                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-2">

                            <div className="w-11 h-11 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <Star size={18} />
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1 text-purple-400">
                                    Always Improving
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed">
                                    Building better products and improving every day.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mt-10 p-5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                    >

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                            <div>
                                <Briefcase className="text-purple-400 mb-2" size={20} />

                                <h4 className="text-2xl font-black text-purple-400 mb-1">
                                    3+
                                </h4>

                                <p className="text-white/50 text-xs">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <Code2 className="text-cyan-400 mb-2" size={20} />

                                <h4 className="text-2xl font-black text-cyan-400 mb-1">
                                    20+
                                </h4>

                                <p className="text-white/50 text-xs">
                                    Projects Completed
                                </p>
                            </div>

                            <div>
                                <Users className="text-purple-400 mb-2" size={20} />

                                <h4 className="text-2xl font-black text-purple-400 mb-1">
                                    10+
                                </h4>

                                <p className="text-white/50 text-xs">
                                    Happy Clients
                                </p>
                            </div>

                            <div>
                                <Sparkles className="text-cyan-400 mb-2" size={20} />

                                <h4 className="text-2xl font-black text-cyan-400 mb-1">
                                    ∞
                                </h4>

                                <p className="text-white/50 text-xs">
                                    Ideas & Creativity
                                </p>
                            </div>

                        </div>

                    </motion.div>

                </motion.div>


                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center items-center h-[620px]"
                >

                    {/* Main Glow */}
                    <div className="absolute w-[520px] h-[520px] bg-purple-600/20 blur-[140px] rounded-full"></div>

                    {/* Background Smoke */}
                    <div className="absolute bottom-28 w-[420px] h-[220px] bg-purple-500/20 blur-[100px] rounded-full"></div>

                    {/* Neon Triangle */}
                    <div
                        className="absolute w-[430px] h-[430px] border-[5px] border-purple-400 rotate-[8deg]
                        shadow-[0_0_60px_rgba(168,85,247,0.9)]
                        before:absolute before:inset-0 before:border-[5px] before:border-cyan-400/40
                        before:translate-x-1 before:translate-y-1"
                        style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                    ></div>

                    {/* Platform */}
                    <div className="absolute bottom-8 z-0">

                        {/* Main Platform */}
                        <div
                            className="relative w-[420px] h-[90px] rounded-full
                            bg-gradient-to-r from-[#151530] to-[#0f172a]
                            border border-cyan-500/20
                            shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                        >

                            {/* Bottom Neon */}
                            <div className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-sm"></div>

                        </div>

                    </div>

                    {/* Left Floating Polygon */}
                    <motion.div
                        animate={{
                            y: [0, -16, 0],
                            rotate: [0, 8, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                        className="absolute left-2 top-28 w-20 h-20"
                    >

                        <div
                            className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-400 opacity-80
            shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                            style={{
                                clipPath:
                                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                            }}
                        ></div>

                    </motion.div>

                    {/* Right Floating Sphere */}
                    <motion.div
                        animate={{
                            y: [0, -18, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="absolute right-0 top-32 w-24 h-24 rounded-full
        bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
        shadow-[0_0_60px_rgba(59,130,246,0.8)]"
                    ></motion.div>

                    {/* Right Floating Cube */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                        }}
                        className="absolute right-12 bottom-32 w-20 h-20 rotate-12"
                    >

                        <div
                            className="w-full h-full border border-cyan-400/50
            bg-gradient-to-br from-[#111827] to-[#312e81]
            shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                            style={{
                                clipPath:
                                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                            }}
                        ></div>

                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                        className="relative z-10"
                    >

                        <img
                            src="../src/assets/images/profile.png"
                            alt="profile"
                            className="w-[400px] object-cover drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                        />

                    </motion.div>

                    {/* Quote Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-12 z-20
                        p-6 w-[330px]
                        rounded-[28px]
                        border border-cyan-400/20
                        bg-black/35
                        backdrop-blur-2xl
                        shadow-[0_0_40px_rgba(168,85,247,0.25)]"
                    >

                        {/* Quote */}
                        <p className="text-3xl text-purple-400 leading-none mb-4">
                            “
                        </p>

                        {/* Text */}
                        <p className="text-white/85 text-[15px] leading-relaxed mb-5">
                            I don’t just write code,
                            <br />
                            I craft experiences
                            <br />
                            that connect and inspire.
                        </p>

                        {/* Name */}
                        <p className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-xl font-medium">
                            Akila Prabath
                        </p>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    )
}

export default About