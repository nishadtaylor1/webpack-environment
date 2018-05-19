const path = require("path");
const webpack = require("webpack"); 
const HTMLwebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: [
      "./src/main.js"
    ]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
	{
	  test: /\.vue$/,
	  use: [
		{
			loader: "vue-loader"
		}
	  ]	
	},
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }

        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new HTMLwebpackPlugin({
      template: "./src/index.html"
    })
  ],
	resolve: {
		alias: {	
		'vue$': 'vue/dist/vue.js'
		}
	}

}
