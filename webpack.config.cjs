const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        type: 'javascript/auto', 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ],
            sourceType: 'module'
          }
        }
      },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"], 
    },
    {
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext][query]'
      }
    },
  ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};