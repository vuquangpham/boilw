const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        watchFiles: ["./*", path.resolve(__dirname, '../', 'public', '*')],
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});