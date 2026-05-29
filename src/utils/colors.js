// Centralized theme color tokens

export const colors = {
  // Primary neon colors
  neonPurple: "#a855f7",
  neonCyan: "#22d3ee",
  neonBlue: "#3b82f6",
  neonPink: "#ec4899",

  // Backgrounds
  bgDark: "#050816",
  bgDarker: "#020617",
  bgBody: "#04070f",
  bgCard: "rgba(255, 255, 255, 0.03)",
  bgCardHover: "rgba(255, 255, 255, 0.06)",

  // Borders
  borderLight: "rgba(255, 255, 255, 0.1)",
  borderPurple: "rgba(168, 85, 247, 0.3)",
  borderCyan: "rgba(34, 211, 238, 0.3)",

  // Text
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.6)",
  textMuted: "rgba(255, 255, 255, 0.4)",

  // Three.js hex colors
  three: {
    purple: 0xa855f7,
    cyan: 0x22d3ee,
    blue: 0x3b82f6,
    pink: 0xec4899,
    dark: 0x050816,
    platformDark: 0x111827,
    rock: 0x1a1a1a,
  },
}

// Gradient strings
export const gradients = {
  purpleToCyan: "linear-gradient(to right, #a855f7, #22d3ee)",
  purpleToBlue: "linear-gradient(135deg, #a855f7, #3b82f6)",
  cyanToPurple: "linear-gradient(to right, #22d3ee, #a855f7)",
}

export default colors
