/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../Zap-Component-CleanCode/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      notContainer: {
        center: false,
        padding: "0px",
      },
      backgroundImage: {
        "treatment-pilihan-bg":
          "url('../temp-asset/homepage/treatment-pilihan-bg.png')",
        "booking1-bg":
          "url('../temp-asset/homepage/Booking-1.png')",
        "booking2-bg":
          "url('../temp-asset/homepage/Booking-2.png')",
      },
      fontFamily: {
        spartanThin: ["spartanThin"],
        spartanSemiBold: ["spartanSemiBold"],
        spartanRegular: ["spartanRegular"],
        spartanMedium: ["spartanMedium"],
        spartanLight: ["spartanLight"],
        spartanExtraLight: ["spartanExtraLight"],
        spartanExtraBold: ["spartanExtraBold"],
        spartanBold: ["spartanBold"],
        spartanBlack: ["spartanBlack"],
      },
      backgroundColor: {
        "zap-white": "#FAF7F5",
        "zap-green": "#E0F2D6",
        "zap-green-medium": "#E0F2D6",
        "zap-SuperGreen": "#31AB5C",
        "zap-magenta": "#EFCDC2",
        "zap-pink": "#F8958C",
        "zap-brown": "#C0A279",
        "zap-superBrown": "#8B4328",
        'bg-gradient': 'linear-gradient(180deg, rgba(250, 247, 245, 0.99) 67.48%, rgba(250, 247, 245, 0.77) 79.33%, rgba(250, 247, 245, 0.00) 100%)',
      },
      colors: {
        "zap-text-superGreen": "#31AB5C",
        "zap-text-pink": "#F8958C",
        "zap-text-brown": "#C0A279",
        "zap-text-superBrown": "#8B4328",
      },
      spacing: {
        jumbo: "380px",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
