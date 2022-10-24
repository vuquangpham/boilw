const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "app.[contenthash].js",
        path: path.resolve(__dirname, '../', "dist"),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true,
        },
        port: 3000,
        open: true,
        watchFiles: ["./*"],
        hot: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public', 'index.html'),
            filename: 'index.html',
        }),
    ],
});