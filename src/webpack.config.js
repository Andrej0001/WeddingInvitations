const path = require("path");

module.exports = {
  // ...
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@react-three/drei": path.resolve(
        __dirname,
        "node_modules/@react-three/drei"
      ),
    },
  },
  // ...
};
