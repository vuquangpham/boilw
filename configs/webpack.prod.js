const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "app.[contenthash].js",
        path: path.resolve(__dirname, '../', "dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public', 'index.html'),
            filename: 'index.html',
        }),
    ],
});