const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">

      <div className="w-7 h-12 rounded-full border border-white/20 flex justify-center p-2">
        <div className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
        Scroll
      </p>

    </div>
  )
}

export default ScrollIndicator