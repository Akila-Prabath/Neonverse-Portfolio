import { motion } from "framer-motion"
import { useRef } from "react"

import {
    FaReact,
    FaJs,
    FaGitAlt,
} from "react-icons/fa"

import {
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiThreedotjs,
    SiFramer,
    SiVite,
    SiSass,
    SiGreensock,
} from "react-icons/si"

import {
    Brain,
    Lightbulb,
    Target,
    MessageCircle,
    TrendingUp,
    Code2,
    Heart,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"

const technicalSkills = [
    {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-400",
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-blue-500",
    },
    {
        name: "JavaScript",
        icon: <FaJs />,
        color: "text-yellow-400",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
    },
    {
        name: "Three.js",
        icon: <SiThreedotjs />,
        color: "text-white",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-cyan-400",
    },

    {
        name: "JavaScript",
        icon: <FaJs />,
        color: "text-yellow-400",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
    },
    {
        name: "GSAP",
        icon: <SiGreensock />,
        color: "text-green-400",
    },
    {
        name: "Sass",
        icon: <SiSass />,
        color: "text-pink-400",
    },
]

const softSkills = [
    {
        title: "Problem Solving",
        icon: <Brain size={18} />,
        desc: "Breaking down complex problems into simple solutions.",
    },
    {
        title: "Creativity",
        icon: <Lightbulb size={18} />,
        desc: "Designing intuitive experiences with creative thinking.",
    },
    {
        title: "Attention to Detail",
        icon: <Target size={18} />,
        desc: "Pixel-perfect UIs and clean code.",
    },
    {
        title: "Communication",
        icon: <MessageCircle size={18} />,
        desc: "Clear communication and collaboration.",
    },
    {
        title: "Continuous Learning",
        icon: <TrendingUp size={18} />,
        desc: "Always adapting to technologies.",
    },
    {
        title: "Continuous Learning",
        icon: <TrendingUp size={18} />,
        desc: "Always adapting to technologies.",
    },
]

const techStack = [
    {
        icon: <FaReact className="text-cyan-400" />,
        name: "React",
    },
    {
        icon: <SiTypescript className="text-blue-500" />,
        name: "TypeScript",
    },
    {
        icon: <SiThreedotjs className="text-white" />,
        name: "Three.js",
    },
    {
        icon: <SiNextdotjs className="text-white" />,
        name: "Next.js",
    },
    {
        icon: <SiTailwindcss className="text-cyan-400" />,
        name: "Tailwind CSS",
    },
    {
        icon: <FaGitAlt className="text-orange-500" />,
        name: "Git",
    },
    {
        icon: <SiVite className="text-yellow-400" />,
        name: "Vite",
    },
]

const Skills = () => {
    const softSkillsRef = useRef(null)

    const scrollLeft = () => {
        softSkillsRef.current?.scrollBy({
            left: -190,
            behavior: "smooth",
        })
    }

    const scrollRight = () => {
        softSkillsRef.current?.scrollBy({
            left: 190,
            behavior: "smooth",
        })
    }
    return (
        <section className="relative min-h-screen py-12 overflow-hidden flex items-center">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[150px] rounded-full"></div>

            <div className="max-w-[1450px] mx-auto px-6 lg:px-10 w-full">

                <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-10 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        {/* Tag */}
                        <p className="uppercase tracking-[0.32em] text-purple-400 text-xs mb-4">
                            • My Skills
                        </p>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">

                            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Tools I use.
                            </span>

                            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                                Magic I create.
                            </span>

                        </h2>

                        {/* Description */}
                        <p className="text-white/55 text-base leading-relaxed max-w-md mb-6">
                            A blend of creativity, logic and the right tools.
                            These are the skills I use to build immersive
                            digital experiences.
                        </p>

                        {/* Cube Area */}
                        <div className="relative flex justify-center items-center h-[300px]">

                            {/* Glow */}
                            <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

                            {/* Platform */}
                            <div className="absolute bottom-8 w-[260px] h-[42px] rounded-full bg-gradient-to-r from-[#14142b] to-[#1f2937] border border-cyan-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)]">

                                <div className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-sm"></div>

                            </div>

                            {/* Floating Cube */}
                            <motion.div
                                animate={{
                                    y: [0, -14, 0],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                                className="relative w-40 h-40 rounded-[26px] rotate-[-12deg] bg-gradient-to-br from-[#111827] to-[#1f2937] border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.35)] flex items-center justify-center"
                            >

                                {/* Glow Border */}
                                <div className="absolute inset-0 rounded-[26px] border border-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.4)]"></div>

                                {/* Icon */}
                                <div className="text-cyan-400">
                                    <Code2 size={65} />
                                </div>

                            </motion.div>

                            {/* Floating Elements */}
                            <div className="absolute left-6 top-16 w-14 h-14 rotate-12 rounded-2xl bg-gradient-to-br from-purple-500/50 to-cyan-500/50 shadow-[0_0_30px_rgba(168,85,247,0.35)]"></div>

                            <div className="absolute right-10 top-28 w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.5)]"></div>

                            <div className="absolute right-0 bottom-8 w-24 h-24 border-[12px] border-purple-500 rounded-full shadow-[0_0_35px_rgba(168,85,247,0.45)]"></div>

                        </div>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        {/* Technical Skills */}
                        <div className="mb-8">

                            <div className="flex items-center gap-3 mb-5">

                                <div className="w-10 h-10 rounded-xl border border-purple-500/30 flex items-center justify-center text-purple-400">
                                    <Code2 size={18} />
                                </div>

                                <h3 className="uppercase tracking-[0.22em] text-base text-white/90">
                                    Technical Skills
                                </h3>

                            </div>

                            <div className="max-h-[170px] overflow-y-auto pr-2 custom-scrollbar">

                                <div className="grid md:grid-cols-4 gap-4">

                                    {technicalSkills.map((skill, index) => (
                                        <motion.div
                                            whileHover={{
                                                y: -4,
                                            }}
                                            key={index}
                                            className="group h-[72px] px-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/30 transition flex items-center gap-5"
                                        >

                                            <div className={`text-3xl ${skill.color}`}>
                                                {skill.icon}
                                            </div>

                                            <h4 className="text-base font-medium">
                                                {skill.name}
                                            </h4>

                                        </motion.div>
                                    ))}

                                </div>

                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div>

                            {/* Header */}
                            <div className="flex items-center justify-between mb-5">

                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 rounded-xl border border-purple-500/30 flex items-center justify-center text-purple-400">
                                        <Brain size={18} />
                                    </div>

                                    <h3 className="uppercase tracking-[0.22em] text-base text-white/90">
                                        Soft Skills
                                    </h3>

                                </div>

                                {/* Arrows */}
                                <div className="flex items-center gap-2">

                                    <button
                                        onClick={scrollLeft}
                                        className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-purple-500/30 hover:text-purple-400 transition flex items-center justify-center"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>

                                    <button
                                        onClick={scrollRight}
                                        className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-purple-500/30 hover:text-purple-400 transition flex items-center justify-center"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                </div>

                            </div>

                            {/* Scroll Container */}
                            <div className="overflow-hidden w-[830px]">
                            <div
                                ref={softSkillsRef}
                                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
                            >

                                {softSkills.map((skill, index) => (
                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                        }}
                                        key={index}
                                        className="min-w-[150px] max-w-[150px] p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-purple-500/30 transition flex-shrink-0"
                                    >

                                        <div className="w-10 h-10 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                                            {skill.icon}
                                        </div>

                                        <h4 className="text-sm font-semibold mb-2">
                                            {skill.title}
                                        </h4>

                                        <p className="text-white/50 leading-relaxed text-xs">
                                            {skill.desc}
                                        </p>

                                    </motion.div>
                                ))}

                                </div>
                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* Bottom Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-2 p-6 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl w-[1080px] mx-auto"
                >

                    <div className="flex items-center gap-3 mb-6 ">

                        <Heart className="text-purple-400" size={10} />

                        <p className="uppercase tracking-[0.25em] text-white/70 text-xs">
                            Tech I Love Working With
                        </p>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 ">

                        {techStack.map((tech, index) => (
                            <motion.div
                                whileHover={{
                                    y: -4,
                                }}
                                key={index}
                                className="h-16 rounded-xl border border-white/10 bg-[#0b1020] flex items-center justify-center gap-2 hover:border-purple-500/30 transition"
                            >

                                <div className="text-xl">
                                    {tech.icon}
                                </div>

                                <span className="text-xs text-white/70">
                                    {tech.name}
                                </span>

                            </motion.div>
                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    )
}

export default Skills