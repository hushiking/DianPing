// windows系统 rd/s/q build 删除文件夹（不能添加./）；mac系统 rm -rf ./build可行
var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// css 文件抽取配置项
var ExtractCSS = new ExtractTextPlugin({
    filename: "/css/[name][id].[contenthash:8].css",
    disable: process.env.NODE_ENV === "dev"
})
// less文件抽取配置项
var ExtractLess = new ExtractTextPlugin({
    filename: "/css/[id].[name].[contenthash:8].css",
    disable: process.env.NODE_ENV === "dev"
})

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        // 将 第三方依赖（node_modules中的） 单独打包
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: __dirname + "/build",
        filename: "js/[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' }
                    ]
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractLess.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' },
                        { loader: 'less-loader' }
                    ]
                })
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'images/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'fonts/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // webpack1 迁移 webpack2，postcss-loader配置
        // https://webpack.js.org/guides/migrating/#complex-options
        /* new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }), */
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by hushiking@github.com."),

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/template.html'
        }),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)  // package.json中set NODE_ENV=production&&...，production后面不能留空格，否则set命令会把空格带进环境变量中去
            }
        }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),

        // 如果没有 less文件，可以单独抽取 css文件
        // new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

        // 有 less文件则分别抽取 css与 less文件到不同文件
        ExtractCSS,
        ExtractLess,

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '/js/[name].[chunkhash:8].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}