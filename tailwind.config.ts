import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary')
          }
        }
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        night: {
          ...require('daisyui/src/theming/themes')['night'],
          primary: "#FFF",
          secondary: "#19abff",
          accent: "#152847",
          "base-100": "#0e1022",
          ".badge": {
            "margin": "0.3rem 0.5rem",
            "border-radius": "10px", 
          },
          ".badge-lg": {
            "padding": "1rem 2rem"
          }
        },
      },
    ]
  }
};
export default config;
