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
      [
        'babel-plugin-styled-components',
        {
          ssr: false, // Desative SSR (não é necessário no React Native)
          displayName: true, // Ative nomes de exibição para depuração
          preprocess: false,
        },
      ],
    ],
  }
}
