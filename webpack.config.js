const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    devtool: "source-map",
    devServer: {
        port: 8000,
        compress: true,
    },
    resolve: {
        extensions: [".ts", ".tsx"],
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
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "知雀",
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
