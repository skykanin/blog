const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDepricatedGapUtilities: true,
    pureLayersByDefault: true,
  },
  purge: {
    content: ["./layouts/**/*.html"],
  },
  theme: {
    colors: {
      transparent: "transparent",
      black: "#1C1D21",
      gray: colors.coolGray,
      blue: colors.blue,
      white: "#F1E3E4",
      brown: "#CCBCBC",
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
