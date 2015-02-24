 var webpack = require('webpack');
 var ExtractTextPlugin = require("extract-text-webpack-plugin");
 var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
 var path = require('path');
 var appConfig = require('./dev/js/config'); 

var PRODUCTION = false;//'production';


var plugins = function () {
  var all = [
    new webpack.DefinePlugin({
      THEME:JSON.stringify("../templates/" + appConfig.theme + "/"),
      BOWER:JSON.stringify(__dirname + '/bower_components/')
    }),
    new webpack.optimize.CommonsChunkPlugin('main', null, false),
    new ExtractTextPlugin("[name].css", {allChunks: true}),
    //new CommonsChunkPlugin("config.js", ["app"]),
  ];

  var production = [
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ];

  return PRODUCTION ? all.concat(production) : all;
};

 var config = {
   addVendor: function (name, path) {
     this.resolve.alias[name] = path;
     this.module.noParse.push(path);
   },
   context: __dirname,
   
   entry: {
     main: ['./dev/js/main.js']
   },
   output: {
     path: path.resolve(__dirname, PRODUCTION ? './dist/' : './dist/'),
     publicPath: '/dist/',
     filename: '[name].js'
   },
   externals:{
   		'jquery':'$',
   		'lodash':'_',
   		'backbone':'Backbone',
   		'backbone.marionette':'Marionette'
   },
   resolve: {
     alias: {}
   },
   module: {
     noParse: [],
     loaders: [
     	{
	       test: /\.html$/, 
	       loader: "html-loader"
	     }, {
	       test: /\.css$/,
	       loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&minimize')
	     },{
	       test: /\.less$/,
	       loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!less-loader?compress')
	     }, {
	       test: /\.(svg|eot|ttf|woff2|woff|png)$/,
	       loader: 'url-loader?limit=100000'
	     }
	  ]
   },
   plugins: plugins(),
   devtool: "source-map"
 };

 //config.addVendor('lodash', '//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js');	//path.resolve(bower_dir, 'react/react.min.js'));

 module.exports = config;