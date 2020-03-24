const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const PUBLIC_DIR = 'public'
const webpack  = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'main.js'),
    mode: 'development',
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, PUBLIC_DIR),
        hot: true,
        port: 5000
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {

                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env'
                    ]
                },
                test: /\.js$/
            },
            {

                exclude: /node_modules/,
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }, 
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, PUBLIC_DIR, 'index.html')
        }), 
        new webpack.HotModuleReplacementPlugin()
    ]
} 