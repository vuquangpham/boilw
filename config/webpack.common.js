const path = require("path");
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
        ]
    },
};