/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm1-min": { min: "800px" },
      'sm-min': { min: '576px' },
    },
    extend: {
      colors: {
        'primary': '#9747FF',
        'textNeutralGray': '#888888',
        'textBlack': '#1A1D1F',
        'textWhaite': '#FFFFFF',
        'bgWhaite': '#FFFFFF',
        'bgblack': '#1f2128',
        'bgCharcoalGray': '#242731',
        'bgSoftGray': '#F5F4F6',
      },
      boxShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      cursor: {
        'fancy': 'url(./src/assets/images/cursor.png), pointer',
        'point': 'url(./src/assets/images/point.png), pointer',
      }
    },
  },
  plugins: [],
}