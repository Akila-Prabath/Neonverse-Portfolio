import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-8 left-8 md:left-14 flex items-center gap-3 z-20"
    >
      {/* Scroll Icon */}
      <div className="w-8 h-13 rounded-full border border-white/20 flex justify-center p-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
        />
      </div>

      <p className="text-[11px] tracking-[0.3em] text-white/40 uppercase font-medium">
        Scroll to explore
      </p>
    </motion.div>
  )
}

export default ScrollIndicator