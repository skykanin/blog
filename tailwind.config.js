const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDepricatedGapUtilities: true,
    pureLayersByDefault: true,
  },
 content: ["./layouts/**/*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#1C1D21",
      gray: colors.gray["700"],
      blue: colors.blue["200"],
      'blue-gray': "#282A36",
      white: "#F1E3E4",
      'brown-light': "#DCD0D0",
      pink: {
        light: "#BB9BB0", 
        dark: "#A288A6",
      },
    },
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
      sans: ["Open Sans", "sans-serif"],
      serif: ["Noto Serif", "Georgia", "Cambria", "Times New Roman", "serif"],
    },
    extend: {
      animation: {
        blink: 'blink 1.2s infinite',
      },
      keyframes: {
        blink: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'currentColor' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      transitionDuration: {
        '1100': '1100ms',
        '1150': '1150ms',
        '1200': '1200ms',
        '1300': '1300ms',
      }
    },
  },
  variants: {},
  plugins: [],
};
