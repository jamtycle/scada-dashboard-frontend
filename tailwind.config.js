import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         poppins: ["Poppins", "sans-serif"],
      },
      extend: {
         maxWidth: {
            "2xs": "16rem",
            "3xs": "12rem",
            "4xs": "8rem",
         },
      },
   },
   plugins: [daisyui],
   daisyui: {
      themes: [
         {
            theme: {
               primary: "#1075DA",
               "primary-content": "#ffffff",
               secondary: "#0b131e",
               "secondary-content": "#0f68c1",
               "base-100": "#14161e",
               "base-200": "#0b0c10",
               "base-content": "#ffffff",
            },
         },
      ],
   },
};
