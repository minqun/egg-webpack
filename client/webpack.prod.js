const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const getAbsolutePath = p => path.resolve(__dirname, p);
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
    pages[pageName] = file;
});
module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    entry: pages,
    output: {
        path: getAbsolutePath('../app/public/static'),
        publicPath: '/public/static/',
        hashDigestLength: 8,
        filename: '[name]/[name].[chunkhash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin({
            fileName: 'manifest.json',
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].[contenthash:8].css',
            allChunks: true
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 10
                },
                common: {
                    test(module, chunks) {
                        return module.type === 'javascript/auto';
                    },
                    name: 'common',
                    chunks: 'all',
                    minSize: 2,
                    priority: 0
                }

            }

        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: false
                    }
                }
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }]
                }
            })
        ]
    },
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
            }, {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(njk|nunjucks)$/,
                loader: 'nunjucks-loader'
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
});
