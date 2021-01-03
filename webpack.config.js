const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_, { mode }) => ({
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: mode === 'production' ? false : 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: 'sources/[name][ext]',
  },
  resolve: {
    extensions: [
      '.js',
      '.vue',
      '.sass',
    ],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      styles: path.resolve(__dirname, 'src', 'assets', 'styles'),
      img: path.resolve(__dirname, 'src', 'assets', 'img'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/i,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/i,
          /dist/i,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          mode === 'production' ? MiniCssExtractplugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          mode === 'production' ? MiniCssExtractplugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jp(e)?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[hash][ext]',
        },
      },
      {
        test: /^favicon\.(jp(e)?g|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../[name][ext]',
        },
      },
      {
        test: /\.(svg|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  optimization: {
    minimize: mode === 'production' ? true : false,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractplugin({
      filename: 'index.css',
    }),
  ],
});
