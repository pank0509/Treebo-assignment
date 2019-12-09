'use strict';

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');


var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

module.exports = {

    devtool: 'cheap-module-source-map',

    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        require.resolve('./polyfills'),
        paths.appIndexJs
    ],
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        publicPath: publicPath
    },
    resolve: {
        fallback: paths.nodePaths,
        extensions: ['.js', '.json', '.jsx', ''],
        alias: {
            'react-native': 'react-native-web'
        }
    },

    module: {
        preLoaders: [{
            test: /\.(js|jsx)$/,
            loader: 'eslint',
            include: paths.appSrc,
        }],
        loaders: [{
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)(\?.*)?$/,
                    /\.css$/,
                    /\.json$/,
                    /\.svg$/,
                    /\.scss$/,
                    /\.png$/,
                    /\.jpg$/,
                ],
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: 'babel',
                query: {

                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/,
                include: paths.appSrc,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loader: 'style!css?importLoaders=2!postcss'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.svg$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file',
                query: {
                    name: 'static/media/image/[name].[hash:8].[ext]'
                }
            }
            //add the new extension(s) to the "url" loader exclusion list.
        ]
    },

    // We use PostCSS for autoprefixing only.
    postcss: function() {
        return [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                ]
            }),
        ];
    },
    plugins: [
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules)
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};