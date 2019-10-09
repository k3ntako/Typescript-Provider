const path = require('path');
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  }, {
    test: /\.css$/i,
    // use: ['style-loader', 'css-loader'],
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]--[local]--[hash:base64:8]"            
          },
          importLoaders: 1,
        }
      },
    ]
  },
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: { extensions: [ '.ts', '.tsx', '.js', '.css' ]},
  devServer: {
    contentBase: './',
    port: 3000,
  }
}
