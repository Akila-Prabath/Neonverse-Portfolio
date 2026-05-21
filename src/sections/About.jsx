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
    <section className="relative min-h-screen py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-[1450px]  mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* Section Tag */}
          <p className="uppercase tracking-[0.35em] text-purple-400 text-sm mb-8">
            • About Me
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">

            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Curious mind.
            </span>

            <span className="block bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Problem solver.
            </span>

            <span className="block text-white">
              Frontend developer.
            </span>

          </h2>

          {/* Description */}
          <div className="border-l border-purple-500/40 pl-6 mb-12">

            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              I'm a frontend developer who loves building immersive,
              interactive and performance-driven web experiences.
              I enjoy turning complex ideas into clean, elegant
              and engaging user interfaces.
            </p>

          </div>

          {/* Features */}
          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Rocket size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  Passionate
                </h3>

                <p className="text-white/50">
                  I love what I do and I'm always eager to learn
                  and explore new technologies.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  Detail Oriented
                </h3>

                <p className="text-white/50">
                  I focus on writing clean code and crafting
                  delightful user experiences.
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Star size={24} />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">
                  Always Improving
                </h3>

                <p className="text-white/50">
                  I believe in continuous growth and building
                  better every single day.
                </p>
              </div>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

            <div>
              <Briefcase className="text-purple-400 mb-4" />
              <h4 className="text-4xl font-black text-purple-400 mb-2">
                3+
              </h4>
              <p className="text-white/50 text-sm">
                Years Experience
              </p>
            </div>

            <div>
              <Code2 className="text-cyan-400 mb-4" />
              <h4 className="text-4xl font-black text-cyan-400 mb-2">
                20+
              </h4>
              <p className="text-white/50 text-sm">
                Projects Completed
              </p>
            </div>

            <div>
              <Users className="text-purple-400 mb-4" />
              <h4 className="text-4xl font-black text-purple-400 mb-2">
                10+
              </h4>
              <p className="text-white/50 text-sm">
                Happy Clients
              </p>
            </div>

            <div>
              <Sparkles className="text-cyan-400 mb-4" />
              <h4 className="text-4xl font-black text-cyan-400 mb-2">
                ∞
              </h4>
              <p className="text-white/50 text-sm">
                Ideas & Creativity
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center h-[850px]"
        >

          {/* Glow */}
          <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full"></div>

          {/* Platform */}
          <div className="absolute bottom-20 w-[420px] h-[70px] rounded-full bg-gradient-to-r from-[#14142b] to-[#1e1e40] border border-cyan-500/20 shadow-[0_0_50px_rgba(59,130,246,0.35)]">

            <div className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-sm"></div>

          </div>

          {/* Triangle */}
          <div className="absolute w-[420px] h-[420px] border-[5px] border-purple-400 rotate-[8deg] shadow-[0_0_60px_rgba(168,85,247,0.7)]"></div>

          {/* Profile Image */}
          <div className="relative z-10">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="profile"
              className="w-[380px] object-cover rounded-3xl"
            />

          </div>

          {/* Floating Ball */}
          <div className="absolute right-8 top-28 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 shadow-[0_0_70px_rgba(59,130,246,0.75)]"></div>

          {/* Floating Cube */}
          <div className="absolute left-20 top-40 w-20 h-20 rotate-12 rounded-2xl bg-gradient-to-br from-purple-500/50 to-cyan-500/50 backdrop-blur-xl"></div>

          {/* Quote Card */}
          <div className="absolute bottom-44 left-0 z-20 p-8 w-[380px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">

            <p className="text-5xl text-purple-400 mb-4">
              “
            </p>

            <p className="text-white/80 text-xl leading-relaxed mb-6">
              I don't just write code,
              I craft experiences that
              connect and inspire.
            </p>

            <p className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-signature">
              Akila Prabath
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About