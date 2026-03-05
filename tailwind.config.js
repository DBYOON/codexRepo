/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      zIndex: {
        sidebar: "200",
        header: "200",
        map: "100",
      },
      spacing: {
        sidebar: "340px",
        "section-y": "22px",
        "field-h": "36px",
        "group-gap": "14px",
        "switch-h": "30px",
        "switch-w": "52px",
        "switch-pad": "3px",
        "action-h": "46px",
        "save-h": "82px",
      },
      fontSize: {
        "sidebar-xxs": "7px",
        "sidebar-xs": "10px",
        "sidebar-sm": "12px",
        "sidebar-input": "13px",
        "sidebar-title": "16px",
        "sidebar-body": "18px",
        "sidebar-heading": "24px",
        "sidebar-cta": "30px",
      },
      letterSpacing: {
        "sidebar-tight": "0.2px",
        "sidebar-wide": "0.3px",
      },
      screens: {
        desktop: "1200px",
      },
      colors: {
        brand: {
          accent: "#cf1f2e",
          metric: "#9c0e25",
          sub: "#991226",
        },
        control: {
          on: "#2f2f2f",
          off: "#d8d8d8",
        },
        surface: {
          app: "#f6f6f6",
          panel: "#f4f4f4",
          muted: "#e4e4e4",
          map: "#f7f7f7",
          strong: "#0d0d0d",
        },
        border: {
          base: "#d8d8d8",
          panel: "#cfcfcf",
          section: "#d4d4d4",
          input: "#c2c2c2",
          subtle: "#b7b7b7",
          avatar: "#d6d6d6",
          map: "#ececec",
        },
        text: {
          primary: "#222",
          body: "#121212",
          nav: "#1a1a1a",
          logo: "#111",
        },
      },
    },
  },
  plugins: [],
};
