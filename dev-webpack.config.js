const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: ["file-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: require.resolve("jquery"),
            jQuery: require.resolve("jquery"),
        })
    ]
}