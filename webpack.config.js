const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const paths = {
    src: "./src",
    dist: path.resolve(__dirname,"./dist"),
    assets: "assets/"
}

module.exports = {
    entry:{
        main: `${paths.src}/main.js`,
    },
    output:{
        filename: "js/[name].js",
        path:paths.dist,
        publicPath: "/"
    },
    devServer: {
        port:"8081",
        historyApiFallback: true,
        overlay:{
            warnings: true,
            errors:true
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module:{
      rules:[
          {
            test: /\.scss$/,
              use:[
                  "style-loader",
                miniCssExtractPlugin.loader,
                  "css-loader",
                  {
                  loader:"postcss-loader",
                   options:{
                      config:{
                          path:'./postcss.config.js'
                      }
                      }
                  },
                  "sass-loader"
              ]
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              use:[
                  {
                      loader: "file-loader",
                      options: {
                          outputPath:"img"
                      }
                  }
              ]
          },
          {
            test:/\.(wolf|wolf2|ttf|otf)$/,
             use:[
                 {
                     loader:"file-loader",
                     options: {
                         outputPath:"fonts"
                     }
                 }
             ]
          },
          {
              test:/.(js|jsx)$/,
              exclude: /node_modules/,
              use: "babel-loader"
          }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template:`${paths.src}/main.html`
        }),
        new miniCssExtractPlugin({
            filename: `css/base.css`
        }),
        new copyWebpackPlugin([
            {from: `${paths.src}/img`, to:"img"}
            ]
        ),
        new CleanWebpackPlugin()
    ]

}