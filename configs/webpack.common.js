const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../', 'src', '_index.js'),
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../', 'src'),
            assets: path.resolve(__dirname, '../', 'public', 'assets'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
};