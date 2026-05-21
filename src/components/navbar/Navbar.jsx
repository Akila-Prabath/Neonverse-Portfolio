const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          A
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">

          <li>
            <a
              href="#home"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              HOME

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative hover:text-purple-400 transition duration-300 group"
            >
              ABOUT

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              PROJECTS

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative hover:text-purple-400 transition duration-300 group"
            >
              SKILLS

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              EXPERIENCE

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative hover:text-purple-400 transition duration-300 group"
            >
              CONTACT

              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

        </ul>

        {/* Status */}
        <div className="hidden md:flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Available for Work
        </div>

      </div>
    </nav>
  )
}

export default Navbar