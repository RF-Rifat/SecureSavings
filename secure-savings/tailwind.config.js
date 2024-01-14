// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#3498db", // Flat Blue
//         secondary: "#2ecc71", // Emerald Green
//         accent: "#e74c3c", // Alizarin Red
//         background: "#ecf0f1", // Clouds Gray
//         text: "#2c3e50", // Midnight Blue
//       },
//     },
//   },
//   plugins: [],
// });






import withMT from "@material-tailwind/html/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});