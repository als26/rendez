module.exports = {
  entry: "./client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|server.js)/,
        loader: 'babel',
        query:
        {
          presets:['react','es2015']
        }
      }
    ]
  }
};
