const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const getAbsolutePath = p => path.resolve(__dirname, p);
const ManifestPlugin = require('webpack-manifest-plugin');

let entries;

let pages = {};
try {
    // 获取相关入口
    entries = glob(path.resolve(__dirname, '../app/view/**/*.js'), {
        sync: true
    });
} catch (err) {
    entries = [];
    throw err;
}
entries.forEach(file => {
    const fileSplit = file.split('/');
    let pageName = fileSplit[fileSplit.length - 1].split('.')[0];
    pages[pageName] = ['webpack-hot-middleware/client?path=http://127.0.0.1:9000/__webpack_hmr&reload=true', file];
});
module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    entry: pages,
    output: {
        path: getAbsolutePath('../app/public/static'),
        publicPath: '/',
        filename: '[name].js'
    },
    plugins: [
        new ManifestPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].[contenthash:8].css',
            allChunks: true
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: ['> 1%', 'last 2 versions']
                                }
                            }]
                        ]
                    }
                },

                exclude: '/node_modules/'
            },
            {
                test: /\.(njk|nunjucks)$/,
                loader: 'nunjucks-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
});
