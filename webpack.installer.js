38e4a6c8b068dbcc9126c92636ec04e09838f02b// webpack config for webinstaller

'use strict';

const path = require('path');

/** @type { import('webpack').Configuration } */
module.exports = {
	mode: 'production',
	entry: {
		installer: './public/src/installer/install.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'build/public'),
		publicPath: `/assets/`,
	},
	resolve: {
		symlinks: false,
		modules: [
			'public/src',
			'node_modules',
		],
	},
};
