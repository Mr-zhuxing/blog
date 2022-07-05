const path = require('path')
const HtmlPlugin = require('html-webpack-plugin');

const lessRegex = /\.less$/i
const lessModuleRegex = /\.module\.(less)$/i

module.exports = {
    entry: path.resolve('./src/index.tsx'),
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: './',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /(\.ts|\.tsx|\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: lessRegex,
                exclude: [lessModuleRegex,/node_modules/],
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: lessModuleRegex,
                exclude: /node_modules/,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            }
                        }
                    },
                    'less-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve('./src'),
        }
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: 'body',
        })
    ]
}   