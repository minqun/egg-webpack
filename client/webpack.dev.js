const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const getAbsolutePath = p => path.resolve(__dirname, p)
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client?path=http://127.0.0.1:9000/__webpack_hmr&reload=true',
            getAbsolutePath('../app/view/index.js')
        ]
    },
    output: {
        path: getAbsolutePath('../app/public/static'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new ManifestPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html', //输出后的文件名称
        //     template: getAbsolutePath('../app/view/index.html'), //模版页面路径
        //     // chunks:['home'],//需要引入的js文件名称
        //     inject: true,
        //     hash: true, //哈希值
        //     minify: { //压缩
        //         removeComments: true,
        //         collapseWhitespace: true
        //     }
        // }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})