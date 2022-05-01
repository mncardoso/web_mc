module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["s3.eu-north-1.amazonaws.com", "pbs.twimg.com/"],
		loader: "akamai",
		path: "",
	},
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "postcss-loader"],
			},
			{
				test: /\.jsx?$/,
				use: ["babel-loader", "astroturf/loader"],
			},
		],
	},
};
