module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "hsl(210, 25%, 98%)",
          100: "hsl(210, 25%, 95%)",
          200: "hsl(210, 18%, 90%)",
          300: "hsl(210, 15%, 80%)",
          400: "hsl(210, 10%, 68%)",
          500: "hsl(210, 7%, 52%)",
          600: "hsl(212, 7%, 35%)",
          700: "hsl(213, 9%, 28%)",
          800: "hsl(215, 11%, 20%)",
          900: "hsl(220, 14%, 12%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ['"DM Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(215, 72%, 45%) 0%, hsl(192, 65%, 40%) 100%)',
        'gradient-2': 'linear-gradient(135deg, hsl(192, 65%, 40%) 0%, hsl(165, 58%, 53%) 100%)',
        'button-border-gradient': 'linear-gradient(90deg, hsla(215, 72%, 45%, 0.8), hsla(192, 65%, 40%, 0.8))',
      },
      letterSpacing: {
        tighter: '-0.025em',
      },
    },
  },
  plugins: [],
}
