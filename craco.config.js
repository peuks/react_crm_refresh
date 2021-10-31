const path = require("path");
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@contexts": path.resolve(__dirname, "src/contexts/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@animations": path.resolve(__dirname, "src/animations/"),
    },
  },
};
