module.exports = function (api) {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
	};
};
