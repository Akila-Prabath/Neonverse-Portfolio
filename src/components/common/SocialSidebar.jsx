import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"

import { Mail } from "lucide-react"

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 bottom-10 hidden lg:flex flex-col gap-5 z-40">

      <a
        href="https://github.com/Akila-Prabath"
        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition"
      >
        <FaGithub size={18} />
      </a>

      <a
        href="#"
        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500 transition"
      >
        <FaLinkedinIn size={18} />
      </a>

      <a
        href="#"
        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500 transition"
      >
        <FaInstagram size={18} />
      </a>

      <a
        href="#"
        className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500 transition"
      >
        <Mail size={18} />
      </a>

    </div>
  )
}

export default SocialSidebar