const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        path: path.resolve(__dirname, '../', "dist"),
    },
    devtool: "inline-source-map",
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
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'dev', 'index.html'),
            filename: 'index.html',
            inject: 'head'
        }),
    ]
});