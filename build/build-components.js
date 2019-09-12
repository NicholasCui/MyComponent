'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'publish'

const ora = require('ora')
const rm = require('rimraf')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
let webpackConfig = require('./webpack.publish.conf')
let config = require('../config')

function getFolders (dir) {
  return fs.readdirSync(dir).filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory()
  })
}

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.publish.distRoot, 'lib'), err => {
  if (err) throw err
})

const folders = getFolders(path.join(__dirname, '../src/components'))
const originEntry = Object.assign(webpackConfig.entry)
const originOutput = Object.assign(webpackConfig.output)

webpackConfig.entry = {}
for (let i = 0; i < folders.length; i++) {
  let componentName = folders[i]

  if (!webpackConfig.entry[componentName]) {
    webpackConfig.entry[componentName] = `./src/components/${componentName}/index.js`
  }
}

webpackConfig.output.path = path.join(config.publish.distRoot, 'lib')
webpackConfig.output.filename = '[name].js'

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.greenBright(`$Build components successfully!\n`))
  webpackConfig.entry = originEntry
  webpackConfig.output = originOutput
})
