// eslint-disable-next-line import/no-extraneous-dependencies

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
})
