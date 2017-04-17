var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
  entry:{
    app:path.resolve(APP_PATH,'app.jsx')
  },
  output:{
    path:BUILD_PATH,
    filename:'bundle.js'
  },
  //开启dev source map
  devtool:'eval-source-map',
  //开启webpack dev server
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
  },

  module:{
    rules:[
      {
        test:/\.jsx?$/,
        use:['babel-loader'],
        include:APP_PATH
      }
    ]
  },
  plugins:[
    new HtmlwebpackPlugin({
      title:'react'
    })
  ],
  resolve:{
    extensions: ['.js', '.jsx']
  }
}
