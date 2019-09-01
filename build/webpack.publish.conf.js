'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

baseWebpackConfig.entry = {}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.publish.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.publish.productionSourceMap ? '#source-map' : false,
  entry: {
    myElement: './src/index.js'
  },
  output: {
    path: config.publish.distRoot + '/dist',
    filename: 'index.js',
    publicPath: config.publish.assetsPublicPath,
    library: 'my-component',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': config.publish.env
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('style.css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // keep module.id stable when vender modules does not change
    new webpack.HashedModuleIdsPlugin()
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
})

module.exports = webpackConfig
