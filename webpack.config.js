const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
let path = require('path')
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: true
})
var isPro = process.env.NODE_ENV === 'pro'

module.exports = {
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: isPro ? './dist/' : '',
    filename: 'js/[name][hash].js',
    chunkFilename: path.join('', './js/async/[name][hash].js')
  },
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './app/images'),
      '@css': path.resolve(__dirname, './app/css')
    }
  },
  devServer: {
    contentBase: './dist',
    host: '192.168.1.214',
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015'
              ]
            }
          },
          {
            loader: 'eslint-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'images/[name][hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: isPro
            }
          }, {
            loader: 'sass-loader'
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              minimize: isPro
            }
          }, {
            loader: 'css-loader',
            options: {
              minimize: isPro
            }
          }
        ]
      },
      {
        test: /\.mp3(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'music/[name].[ext]'
        }
      }
    ]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './app/index.html'),
      filename: isPro ? path.resolve(__dirname, './index.html') : 'index.html'
    }),
    new CopyPlugin([{
      from: path.resolve('./app/music'), // path.resolve('./app/music'),
      to: path.resolve('./dist/music')
      // ignore: ['.*']
    }]),
    extractSass,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
