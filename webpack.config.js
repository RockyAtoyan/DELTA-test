import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'

const __dirname = path.resolve()

const isDev = process.env.NODE_ENV !== 'production'

const config = {
	entry: './src/index.js',
	mode: !isDev ? 'production' : 'development',
	output: {
		clean: false,
		filename: 'assets/js/main.[contenthash].js',
		path: path.resolve(__dirname),
		assetModuleFilename: 'assets/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/css/main.[contenthash].css',
		}),
	],
}

export default config
