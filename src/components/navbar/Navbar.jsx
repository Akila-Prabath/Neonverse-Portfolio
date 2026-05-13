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
          <li className="text-cyan-400">HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
          <li>EXPERIENCE</li>
          <li>CONTACT</li>
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