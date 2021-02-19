const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    mode: production ? 'production' : 'development',
    devtool: production ? false : 'eval-cheap-module-source-map',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: 'static/js/[name].[hash:8].js',
        chunkFilename: 'static/js/[name].chunk.[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
            maxSize: 200000,
            automaticNameDelimiter: '.'
        },
        runtimeChunk: {
            name: 'runtime',
        },
    },
    devServer: {
        port: 8000,
        compress: true,
        historyApiFallback: true, // 访问任何路由时都返回index.html（单页应用）
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                ]
            },
            {
                test: /\.((c|le)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    },
                ]
            },
            {
                enforce: 'pre',
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '知雀',
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')]
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].chunk.[contenthash:8].css',
        }),
        new ESLintPlugin({
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: true,
            overrideConfigFile: path.join(__dirname, '.eslintrc.js'),
            fix: true,
        }),
        new StylelintPlugin({
            context: 'src',
            configFile: path.resolve(__dirname, '.stylelintrc'),
            files: '**/*.((c|le)ss)',
            fix: true,
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: true
        }),
    ],
};
