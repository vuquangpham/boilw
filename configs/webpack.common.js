const path = require("path");

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
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {targets: "defaults"}]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
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
                    filename: "img/[hash][ext]",
                },
            },
        ],
    },
};