import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { fontFamily: {
        nerko: ['Nerko One', 'cursive'],
        lato: ['Lato', 'sans-serif']
        // Add your Google Font here
      },},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#38bdf8",

          secondary: "#00c6ec",

          accent: "#0052ff",

          neutral: "#111827",

          "base-100": "#1f2937",

          info: "#00e0ff",

          success: "#00a600",

          warning: "#e08800",

          error: "#f45861",
        },
      },
    ],
  },
};
