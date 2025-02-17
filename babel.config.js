module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@styles': './src/styles',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
        'react-native-reanimated/plugin',
        'nativewind/babel',
      ],
    ],
  }
}
