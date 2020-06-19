const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

// eslint-disable-next-line global-require
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

// eslint-disable-next-line no-unused-vars
module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/i,
            use: 'babel-loader',
            exclude: /node_modules/,
            resolve: {
              extensions: ['.js', '.jsx'],
            },
          },
          { test: /\.(jpe?g|png)$/, use: 'url-loader' },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: `${__dirname}/public/index.html`,
          filename: 'index.html',
        }),
      ],
    },
    modeConfig(mode),
  )
