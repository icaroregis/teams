module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@assets': './src/assets',
            '@components': './src/components',
            '@styles': './src/styles',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
        'react-native-reanimated/plugin',
      ],
    ],
  }
}
