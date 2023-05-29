// node packages
const fs = require("fs");

// webpack
const webpack = require('webpack');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

// config
const config = require('./config');

// entry
const entry = [config.paths.productionDirectoryScript];
if(fs.existsSync(config.paths.productionDirectoryStyle)){
    entry.push(config.paths.productionDirectoryStyle);
}

/**
 * Build type with ENV variables
 * */
const libraryTarget = process.env.TARGET;
let filename, experiments = {}, library = undefined;

if(libraryTarget === 'module'){
    filename = `${config.packageInfo.packageName}.module.js`;
    experiments = {
        outputModule: true,
    };
}else{
    filename = `${config.packageInfo.packageName}.min.js`;
}

// export
module.exports = merge(common, {
    mode: "production",
    entry,
    output: {
        filename,
        library,
        libraryTarget,
        globalObject: 'this',
        path: config.paths.distDirectory,
        umdNamedDefine: true,
    },
    experiments,
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
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: false,},
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')({
                                        browsers: 'last 2 versions',
                                    }),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')({
                                        browsers: 'last 2 versions',
                                    }),
                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({extractComments: false}),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${config.packageInfo.packageName}.min.css`,
        }),
        new webpack.BannerPlugin(config.packageInfo.packageBannerConfig)
    ],
});