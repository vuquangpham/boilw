const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../', 'src', '_index.js'),
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../', 'src'),
            assets: path.resolve(__dirname, '../', 'public', 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[hash][ext]",
                },
            },
            // Fonts and SVGs: Inline files
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/inline',
                generator: {
                    filename: "assets/fonts/[hash][ext]",
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public', 'index.html'),
            filename: 'index.html',
            inject: 'head'
        }),
    ],
};