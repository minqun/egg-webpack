const path = require('path');
const getAbsolutePath = p => path.resolve(__dirname, p);

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': getAbsolutePath('../app'),
            'tpl': getAbsolutePath('../../view'),
            'jquery': getAbsolutePath('../app/public/utils/jquery-3.2.1.min.js')
        }
    },
    module: {
        rules: [{
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    }
};
