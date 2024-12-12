const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3004/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reducersharedstorage',
      filename: 'remoteEntry.js',
      exposes: {
         './store': './src/store.js'
      },
      shared: {
        react: {eager: true, singleton: true, requiredVersion: '^18.0.0' },
        "react-dom": { eager: true,singleton: true, requiredVersion: '^18.0.0' },
        "react-redux": { singleton: true, eager: true, requiredVersion: '^8.0.0' },
        "@reduxjs/toolkit": { singleton: true, eager: true, requiredVersion: '^1.0.0' }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3004,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },  
};
