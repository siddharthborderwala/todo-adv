const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const cssStyleLoader = devMode ? "style-loader" : {
//     loader:  MiniCssExtractPlugin.loader,
//     options: {
//         path: "./dist/css",
//     }
// };

module.exports = {
	entry: ["@babel/polyfill", "./src/js/index.js", "./src/sass/main.scss"],
	devServer: {
		contentBase: path.join(__dirname, "./dist"),
		port: 8000
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "./js/bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "css/style.css"
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.scss$/,
				use: [
                    {
						loader:  MiniCssExtractPlugin.loader,
						options: {
							path: "./dist/css",
						},
					},
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
};
